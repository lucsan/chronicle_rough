/* global defaults: true */
const marshalling = () => {
  /* Marshalling is concerned with the loading, unloading
   * and regulation of data, into itseslf
  */
  let cabinet = {
    debug: false,
    moves: 0,
    sets: {}, // objects from the setsPlans file.
    props: {}, // objects from the propsPlans file.
    chest: {}, // a storage chest to save things in.
    rigging: {}, // all the data needed by a stage.
    character: {},
    player: {},
    places: {}, // Sets which have been visited, and their props
    boxes: {} // inv and bod props
  }

  //document.addEventListener('chronicle_action', () => { console.log('ev');  (e) => { actionear(e.detail) }})
  document.addEventListener(
    'chronicle_action',
    (e) => { actionear(e.detail)  }
  )



  const actionear = (d) => {
    //if (d.actionId === 'pickUp') moveProp(d.propId, d.from, d.to)
    //if (d.actionId === 'drop') moveProp(d.propId, d.from, d.to)
    moveProp(d.propId, d.from, d.to)
  }

  const newCharacter = (aName) => {
    let newChar = {...defaults.character}
    let newChest = {...defaults.chest}
    let newRig = {...defaults.rigging}
    newChar.name = aName
    cabinet.character = newChar
    newRig.character = newChar
    newChest.character = newChar

    loadBoxes()
    chest(newChest)
    rigging(newRig)
    cabinet.rigging.exitAction = (to) => { character({location: to}) }
    cabinet.rigging.comboAction = (propId) => { combine(propId) }
    addNewPlaceToPlaces('begining')
    cabinet.rigging.places = cabinet.places

    return {...cabinet.character}
  }

  const moveCharacter = (to) => { character({location: to}) }

  const character = (...v) => {

    if (v.length === 1 && typeof v[0] == 'string') {
      v[0] = { name: v[0] }
    }
    v.map( i => {
      if (i.name && Object.keys(cabinet.character).length == 0) {
        newCharacter(i.name)
      }
      if (i.name) cabinet.character.name = i.name
      if (i.health) cabinet.character.health = i.health
      if (i.level) cabinet.character.level = i.level
      if (i.location) moved(i.location)
    })
    if (v.length > 0) { save() }
    return {...cabinet.character}
  }

  const props = (v) => {
    if (v === undefined) return {...cabinet.props}
    cabinet.props = propConstructor().build(v)
    return {...cabinet.props}
  }

  const sets = (v) => {
    if (v === undefined) return {...cabinet.sets}
    if (Object.keys(v).length === 0) return {...cabinet.sets}
    for( let i in v) {
      v[i].id = i
      v[i].title = camelToTitle(i)
    }
    addSetExitsDesc(v)
    cabinet.sets = v
    return {...cabinet.sets}
  }

  const addSetExitsDesc = (sets) => {
    for (let i in sets) {
      sets[i].exits.map(e => {
        if (!e.desc) {
          e.desc = sets[e.to].desc
        }
      })
    }

  }

  const moved = (to) => {
    if (to === cabinet.character.location || to == '') return
    cabinet.moves++
    let from = cabinet.character.location
    cabinet.character.location = to
    if (cabinet.places[to] === undefined) addNewPlaceToPlaces(to)
    chest({places: cabinet.places})
    rigging({places: cabinet.places})
    document.dispatchEvent(new Event('chronicle_character_moved'))
    respond(`you went from ${cabinet.places[from].desc} to ${cabinet.places[to].desc}`)
  }

  const addNewPlaceToPlaces = (locId) => {
    let place = setsPlansById(locId)
    place.props = propsPlansByLocation(locId)
    cabinet.places[locId] = place
    if (place.proseScript === undefined || place.prose !== undefined) { return }
    loadProse(place)
  }

  const loadProse = (place) => {
    scriptLoader(`app/components/data/places/${place.proseScript}.js`, () => {
      place.prose = eval(`${place.proseScript}_prose`)
      document.dispatchEvent(new Event('chronicle_character_moved'))
    })
  }

  const chest = (...v) => {
    v.map(i => {
      if (i.character) cabinet.chest.character = i.character
      if (i.places) cabinet.chest.places = i.places
      if (i.boxes) cabinet.chest.boxes = i.boxes
    })
    return {...cabinet.chest}
  }

  const rigging = (...v) => {
    v.map(i => {
      if (i.character) cabinet.rigging.character = i.character
      if (i.places) cabinet.rigging.places = i.places
      if (i.boxes) cabinet.rigging.boxes = i.boxes
    })
    return {...cabinet.rigging}
  }

  const loadBoxes = () => {
    let inv = propsPlansByLocation('inv')
    let bod = propsPlansByLocation('bod')
    cabinet.boxes.inv = inv
    cabinet.boxes.bod = bod
    cabinet.chest.boxes = cabinet.boxes
    cabinet.rigging.boxes = cabinet.boxes
    document.dispatchEvent(new Event('chronicle_boxes_loaded'))
  }

  const player = (name) => {
    if (name) {
      cabinet.player = { name: name }
      cabinet.chest.player = { name: name }
      cabinet.rigging.player = { name: name }
      tools().storeData('player', cabinet.chest.player.name)
    }
    return {...cabinet.player}
  }

  const save = () => {
    cabinet.chest.character = cabinet.character
    cabinet.rigging.character = cabinet.character
    tools().storeData('player', cabinet.chest.player)
    tools().storeData(cabinet.chest.character.name, cabinet.chest)

  }

  const propsPlansByLocation = (location) => {
    let selected = []
    if (!location) location = cabinet.character.location
    for (let prop in cabinet.props) {
      if (cabinet.props[prop].locs === undefined) continue
      cabinet.props[prop].locs.map(p => {
        if (p == location) {
          selected.push(cabinet.props[prop])
        }
      })
    }
    return selected
  }

  const setsPlansById = (id) => {
    for (let s in cabinet.sets) {
      if (cabinet.sets[s].id === id) return {...cabinet.sets[s]}
    }
    return false
  }

  const propsPlansById = (id) => {
    for (let p in cabinet.props) {
      if (cabinet.props[p].id === id) return {...cabinet.props[p]}
    }
    return false
  }

  const combine = (propId) => {
    let props = [...cabinet.boxes.inv, ...cabinet.boxes.bod]
    let newThing = cabinet.props[propId]

    // See if everything is available
    let missing = []
    let match = newThing.combines.needs.map(i => {
      let prop = props.find(e => { return e.id == i })
      if (prop === undefined) {
        missing.push(i)
      }
    })
    // Whoops, something(s) missing
    if (missing.length > 0) {
      let txt = 'you are missing '
      missing.map(i => {
        let prop = propsPlansById(i)
        txt += `${prop.desc}, `
      })
      txt = txt.substr(0, txt.length -2) + '.'
      respond(txt)
      return
    }

    // Combine and destroy
    newThing.combines.destroys.map(i => {
      cabinet.boxes.inv.map(e => {
        if (e.id === i) { spliceProps(cabinet.boxes.inv, i)}
      })
      cabinet.boxes.bod.map(e => {
        if (e.id === i) { spliceProps(cabinet.boxes.bod, i)}
      })
    })
    cabinet.boxes.bod.push(newThing)
    rigging({boxes: cabinet.boxes})
    respond(`you made ${newThing.desc}`)
    document.dispatchEvent(new Event('chronicle_prop_moved'))
  }

  const moveProp = (propId, from, to) => {
    let prop = {}
    if (from === 'env') {
      prop = removePropFromPlace(propId, cabinet.character.location)
    } else {
      prop = removePropFromBox(propId, from)
    }

    if (to === 'env') {
      addPropToPlace(prop, cabinet.character.location)
    } else {
      addPropToBox(prop, to)
    }
    rigging({
      boxes: cabinet.boxes,
      places: cabinet.places
    })
    document.dispatchEvent(new Event('chronicle_prop_moved'))
    respond(`you moved ${prop.id} from ${from} to ${to}`)
  }

  const addPropToPlace = (prop, placeId) => {
    if (cabinet.places[placeId].props === undefined) cabinet.places[placeId].props = []
    cabinet.places[placeId].props.push(prop)
  }

  const addPropToBox = (prop, boxType) => {
    let box = cabinet.boxes[boxType]
    box.push(prop)
  }

  const removePropFromBox = (propId, boxType) => {
    return spliceProps(cabinet.boxes[boxType], propId)
  }

  const removePropFromPlace = (propId, placeId) => {
    let props = cabinet.places[placeId].props
    if (props === undefined) return // log error
    return spliceProps(props, propId)
  }

  const spliceProps = (props, propId) => {
    for (let i in props) {
      if (props[i].id === propId) {
        let prop = props[i]
        props.splice(i, 1)
        return prop
      }
    }
    return false
  }

  const respond = (msg) => {
    document.dispatchEvent(
      new CustomEvent('chronicle_response', {detail: {msg: msg}}))
  }

  return {
    cabinet: {...cabinet},
    cab: () => { return {...cabinet}},
    props,
    sets,
    player,
    character,
    chest,
    rigging,
    propsPlansByLocation,
    setsPlansById,
    moveProp,
    moveCharacter,
    loadBoxes
  }
}

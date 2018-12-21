/* global defaults: true */
const marshalling = () => {
  /* Marshalling is concerned with the loading, unloading
   * and regulation of data, into itseslf
  */
  let cabinet = {
    debug: false,
    moves: 0,
    sets: {}, // objects from the places file.
    props: {}, // objects from the things file.
    chest: {}, // a storage chest to save things in.
    rigging: {}, // all the data needed by a stage.
    character: {},
    player: {},
    places: {}, // Sets which have been visited, and their props
    boxes: {} // inv and bod props
  }

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
    if (Object.keys(cabinet.props).length < 1
      && Object.keys(v).length > 0) {
      loadProps(v)
    }
    return {...cabinet.props}
  }

  const loadProps = (v) => {
    for( let i in v) {
      v[i].id = i
      //actions().loadActions(v[i])
    }
    cabinet.props = v
  }

  // const loadActions = (prop) => {
  //
  //
  // }

  const sets = (v) => {
    if (Object.keys(cabinet.sets).length < 1
      && Object.keys(v).length > 0) {
      for( let i in v) { v[i].id = i }
      cabinet.sets = v
    }
    return {...cabinet.sets}
  }

  const moved = (to) => {
    if (to === cabinet.character.location || to == '') return
    cabinet.character.location = to
    cabinet.places[to] = setsById(to)
    chest({places: cabinet.places})
    rigging({location: to})
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

  const locations = () => {
    // Creates an array of locations with props.
    // Not a marshalling ativity
    return
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
    //character(newChar)
    chest(newChest)
    rigging(newRig)
    return {...cabinet.character}
  }

  const loadBoxes = () => {
    let inv = propsByLocation('inv')
    let bod = propsByLocation('bod')
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

  const propsByLocation = (location) => {
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

  const setsById = (id) => {
    for (let s in cabinet.sets) {
      if (cabinet.sets[s].id === id) { return cabinet.sets[s]}
    }
    return false
  }

  return {
    cabinet: {...cabinet},
    props,
    sets,
    player,
    character,
    chest,
    rigging,
    propsByLocation,
    setsById,
    //loadActions
  }
}

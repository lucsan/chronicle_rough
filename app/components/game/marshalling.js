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
    character: {}

  }

  const character = (...v) => {
    v.map( i => {
      if (i.name) cabinet.character.name = i.name
      if (i.health) cabinet.character.health = i.health
      if (i.level) cabinet.character.level = i.level
      if (i.location) moved(i.location)
    })
    return {...cabinet.character}
  }

  const props = (v) => {
    if (Object.keys(cabinet.props).length < 1
      && Object.keys(v).length > 0) cabinet.props = v
    return {...cabinet.props}
  }

  const sets = (v) => {
    if (Object.keys(cabinet.sets).length < 1
      && Object.keys(v).length > 0) cabinet.sets = v
    return {...cabinet.sets}
  }

  const moved = (to) => {
    if (to === cabinet.character.location || to == '') return
    cabinet.character.location = to
    chest({location: to})
    rigging({location: to})
  }

  const chest = (...v) => {
    v.map(i => {
      if (i.character) cabinet.chest.character = i.character
      if (i.places) cabinet.chest.places = i.places
      if (i.boxes) cabinet.chest.boxes = i.boxes
      if (i.location) {
        // do something
      }

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
    newRig.character.name = aName

    character(newChar)
    chest(newChest)
    rigging(newRig)

    return {...cabinet.character}
  }

  // const location = (...v) => {
  //   v.map( i => {
  //     if (i.)
  //   })
  // }

  return {
    cabinet: {...cabinet},
    props,
    sets,
    character,
    chest,
    rigging,
    newCharacter,
  }
}

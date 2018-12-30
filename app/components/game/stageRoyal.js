const stageRoyal = (rigging) => {

  const build = () => {
    el(undefined, 'display', 'playerDetails').div('Player: ')
    el(undefined, 'display', 'characterDetails').div('Character: ')
    el(undefined, 'display', 'containers').div()
    el(undefined, 'display', 'respond').div()
    el(undefined, 'display', 'prose').div()
    el(undefined, 'display', 'testArea').div()

    el('containers', 'boxes', 'boxes').div()
    el('containers', 'place', 'place').div()
    el('boxes', 'inventory', 'inv').div()
    el('boxes', 'body', 'bod').div()

  }

  const inputPlayerName = (eventAction) => {
    el('playerDetails', undefined, 'playerForm').div('Player')
    el('playerForm', undefined, 'playerName').input()
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', eventAction)
  }

  const updatePlayer = () => {
    document.getElementById('playerDetails').innerHTML = `Player: ${rigging().player.name}`
  }

  const clearPlayerInput = () => { el().removeElement('playerForm') }

  const inputCharacterName = (eventAction) => {
    el('characterDetails', undefined, 'charForm').div('character')
    el('charForm', undefined, 'charName').input()
    el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', eventAction)
  }

  const clearCharacterInput = () => {el().removeElement('charForm') }

  const updateCharacter = () => {
    document.getElementById('characterDetails').innerHTML = ''
    el('characterDetails', undefined, 'name').div(`character: ${rigging().character.name}`)
    el('characterDetails', undefined, 'health').div(`health: ${rigging().character.health}`)
  }

  const characterMoved = () => {
    let placeId = rigging().character.location
    let place = rigging().places[placeId]
    document.getElementById('place').innerHTML = ''
    el('place', 'title').div(place.title)
    el('place', 'desc', 'placeDesc').div(place.desc)
    el('place', 'environ', 'env').div()
    el('place', 'exits', 'exits').div()
    el('exits', 'title').div('Exits')
    doExits(place.exits, place.exitAction)
    movedPlace()
  }

  const doExits = (exits, exitAction) => {
    for (let e of exits) {
      el('exits', 'exit', e.to).div()
      el(e.to, 'exit').button(e.desc, () => {exitAction(e.to)})
    }
  }

  const movedPlace = () => {
    let placeId = rigging().character.location
    let place = rigging().places[placeId]
    doBox('env', place.title, place.props)
  }

  const updatePlaceBox = () => {
    let placeId = rigging().character.location
    let place = rigging().places[placeId]
    document.getElementById('env').innerHTML = ''
    //el('place', 'env', 'env').div()
    doBox('env', place.title, place.props)
  }

  const updateBoxes = () => {
    let boxes = rigging().boxes
    document.getElementById('boxes').innerHTML = ''
    for (let boxId in boxes) { // each box (inv, bod, hand, head etc)
      el('boxes', boxId, boxId).div()
      let title = boxId
      if (title === 'inv') title = 'Backpack'
      doBox(boxId, title, boxes[boxId])
    }
  }

  const doBox = (boxId, title, propsInBox) => {
    if (boxId !== 'env') { el(boxId, 'title').div(title) }
    doProps(boxId, propsInBox)
  }

  const doProps = (boxId, propsInBox) => {
    for (let prop of propsInBox) {
      //document.getElementById(prop.id).innerHTML = ''
      el(boxId, undefined, prop.id).div()
      el(prop.id, 'propTitle').div(prop.title)
      doActions(prop, boxId)
    }
  }

  const doActions = (prop, boxId) => {
    let acts = prop.actions[boxId]
    for (let i in acts) {
      el(prop.id, 'action', `${i}-${prop.id}`).button(i, acts[i])
    }
  }

  const respond = (msg) => { document.getElementById('respond').innerHTML = msg }

  const propMoved = () => {
    updateBoxes()
    updatePlaceBox()
    //movedPlace()
  }

  return {
    build,
    inputPlayerName,
    clearPlayerInput,
    updatePlayer,
    inputCharacterName,
    clearCharacterInput,
    updateCharacter,
    characterMoved,
    propMoved,
    updateBoxes,
    respond
  }
}

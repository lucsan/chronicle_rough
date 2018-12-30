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
    movedPlace()
  }

  const movedPlace = () => {
    document.getElementById('place').innerHTML = ''
    el('place', 'env', 'env').div()
    let placeId = rigging().character.location
    let place = rigging().places[placeId]
    doBox('env',  place.title, place.props)
  }

  const updateBoxes = () => {
    document.getElementById('boxes').innerHTML = ''
    let boxes = rigging().boxes
    for (let boxId in boxes) { // each box (inv, bod, hand, head etc)
      el('boxes', boxId, boxId).div()
      let title = boxId
      if (title === 'inv') title = 'Backpack'
      doBox(boxId, title, boxes[boxId])
    }
  }

  const doBox = (boxId, title, propsInBox) => {
    //document.getElementById(boxId).innerHTML = ''
    el(boxId, 'title').div(title)
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
    movedPlace()
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

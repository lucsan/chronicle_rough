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

  const updateBoxes = () => {

    let boxes = rigging().boxes
    console.log('staged boxes', boxes)
    for (let boxId in boxes) {
      document.getElementById(boxId).innerHTML = ''
      for (let prop of boxes[boxId]) {
        el(boxId, undefined, prop.id).div(prop.title)
        console.log(prop);

      }
      console.log(boxId, boxes[boxId]);
      //
    }

    //document.getElementById('inv').innerHTML = 'inv'

  }

  const characterMoved = () => {
    document.getElementById('place').innerHTML = ''
    //console.log('char mov', rigging());
    let placeId = rigging().character.location

    let place = rigging().places[placeId]
    console.log('cat at', place);
    el('place', 'title', 'placeTitle').div(place.title)
    for (let prop of place.props) {
      el('place', 'prop', prop.id).div(prop.title)
      for (let i in prop.actions.env) {
        el(prop.id, 'action', i).button(i, prop.actions.env[i])
        console.log(i);
      }
      //console.log(prop.actions.env);
      // for (let i of prop.env.actions) {
      //   console.log(i);
      // }
    }


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
    updateBoxes
  }
}

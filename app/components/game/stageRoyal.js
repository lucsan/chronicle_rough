const stageRoyal = (rigging) => {

  const build = () => {
    el(undefined, 'display', 'playerDetails').div('Player: ')
    el(undefined, 'display', 'characterDetails').div('Character: ')
    el(undefined, 'display', 'containers').div()
    el(undefined, 'display', 'respond').div()
    el(undefined, 'display', 'prose').div()
    el(undefined, 'display', 'testArea').div()

    el('containers', 'boxes', 'boxes').div()
    el('boxes', 'inventory', 'inv').div()
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
    console.log(rigging().boxes)
    document.getElementById('inv').innerHTML = 'inv'

  }

  return {
    build,
    inputPlayerName,
    clearPlayerInput,
    updatePlayer,
    inputCharacterName,
    clearCharacterInput,
    updateCharacter,
    updateBoxes
  }
}

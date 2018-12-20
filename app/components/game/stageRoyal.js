const stageRoyal = (rigging) => {

  const makeDisplays = () => {
    el(undefined, 'display', 'playerDetails').div(`Player: `)
  }

  const inputPlayerName = (nameAction) => {
    el('playerDetails', undefined, 'playerForm').div('Player')
    el('playerForm', undefined, 'playerName').input()
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', nameAction)
  }

  return {
    makeDisplays,
    inputPlayerName
  }
}

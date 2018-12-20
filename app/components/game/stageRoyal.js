const stageRoyal = (rigging) => {

  const build = () => {
    el(undefined, 'display', 'playerDetails').div(`Player: `)
    el(undefined, 'display', 'characterDetails').div(`Character: `)
    el(undefined, 'display', 'containers').div()
    el(undefined, 'display', 'respond').div()
    el(undefined, 'display', 'prose').div()
    el(undefined, 'display', 'testArea').div()
  }

  const inputPlayerName = (nameAction) => {
    el('playerDetails', undefined, 'playerForm').div('Player')
    el('playerForm', undefined, 'playerName').input()
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', nameAction)
  }

  return {
    build,
    inputPlayerName
  }
}

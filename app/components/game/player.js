const player = (marshall, theater) => {


  const name = () => {
    return theater.inputPlayerName(eventAction)
  }

  const eventAction = () => {
    let p = document.getElementById('playerName')
    marshall.player(p.value)
    document.dispatchEvent(new Event('chronicle_player_loaded'))
  }

  const loaded = () => {
    console.info('player loaded');
    theater.clearPlayerInput()
    theater.updatePlayer()
  }
  document.addEventListener('chronicle_player_loaded', loaded)

  const update = () => {
    theater.updatePlayer()
  }

  return {
    name,
    update
  }
}

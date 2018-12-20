const player = (marshall, theater) => {


  const name = () => {
    return theater.inputPlayerName(eventAction)
  }

  const eventAction = () => {
    let p = document.getElementById('playerName')
    marshall.player(p.value)
    document.dispatchEvent(new Event('chronicle_player_loaded'))
    //console.log(p.value);
  }

  const loaded = () => {
    console.log('player loaded');
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

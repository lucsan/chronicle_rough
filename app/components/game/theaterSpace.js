const theaterSpace = (marshall, stage) => {

  const inputPlayerName = () => {
    return stage.inputPlayerName(nameAction)
  }

  const nameAction = () => {
    let p = document.getElementById('playerName')
    marshall.player(p.value)
    document.dispatchEvent(new Event('chronicle_player_loaded'))
    console.log(p.value);
  }

  return {
    inputPlayerName,
    buildStage: () => { stage.build() }
  }
}

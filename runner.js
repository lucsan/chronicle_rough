function application() {
  let marshall = {}
  let theater = {}

  const init = () => {
    autoload().loadFiles()
    document.addEventListener('chronicle_modules_loaded', modulesLoaded)
    document.addEventListener('chronicle_player_loaded', playerLoaded)
  }

  const modulesLoaded = () => {
    console.info('modulesLoaded')
    marshall = marshalling()
    console.info('Marshall created', marshall)
    marshall.newCharacter('bazzo bingbat')
    console.info('Character created', marshall.character())
    marshall.props(propPlans)
    marshall.sets(setsPlans)
    console.info('Loaded sets and props', marshall.sets(), marshall.props())
    let stage = stageRoyal(marshall.rigging())
    theater = theaterSpace(marshall, stage)
    theater.buildStage()
    player(marshall, theater).name()

    // Auto name and fire player
    document.getElementById('playerName').value = 'Play Erone'
    document.getElementById('playerNameOKButton').click()
  }

  const playerLoaded = () => {
    console.log('pl', marshall.cabinet);
    console.log(marshall.player());
    // save player name
    
  }

  return {
    init
  }
}

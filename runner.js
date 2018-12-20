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
    marshall.newCharacter('bazzo')
    console.info('Character created', marshall.character())
    marshall.props(propPlans)
    marshall.sets(setsPlans)
    console.info('Loaded sets and props', marshall.sets(), marshall.props())
    theater = theaterRoyal(marshall.rigging())
    theater.makeDisplays()
    player(marshall, theater).name()

  }

  const playerLoaded = () => {

  }

  return {
    init
  }
}

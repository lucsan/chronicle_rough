function application() {
  let marshall = {}
  let theater = {}

  const init = () => {
    localStorage.clear()
    autoload().loadFiles()
    document.addEventListener('chronicle_modules_loaded', modulesLoaded)
    document.addEventListener('chronicle_player_loaded', playerLoaded)
    document.addEventListener('chronicle_character_loaded', characterLoaded)
  }

  const modulesLoaded = () => {
    console.info('modulesLoaded')
    marshall = marshalling()
    console.info('Marshall created', marshall)
    marshall.props(propsPlans)
    marshall.sets(setsPlans)
    console.info('Loaded sets and props', marshall.sets(), marshall.props())
    let stage = stageRoyal(marshall.rigging)
    theater = theaterSpace(marshall, stage)
    theater.buildStage()
    player(marshall, theater).name()

    // Auto name and fire player
    document.getElementById('playerName').value = 'Play Erone'
    document.getElementById('playerNameOKButton').click()
  }

  const playerLoaded = () => {
    console.log('player', marshall.player());
    character(marshall, theater).name()
    // Auto name and fire character
    document.getElementById('charName').value = 'Charac Tername'
    document.getElementById('charNameOKButton').click()
  }

  const characterLoaded = () => {
    console.log('character', marshall.character());

    marshall.character({location: 'clearing'})
    test()
  }

  const test = () => {

    document.addEventListener('chronicle_action',
      (e) => {
        console.log(e.detail);
        //expect(e.detail.id).toBe('pid')
      }
    )
  }

  return {
    init
  }
}

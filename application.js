function application() {

  const init = () => {
    autoload().loadFiles()
    document.addEventListener('chronicle_modules_loaded', modulesLoaded)
    document.addEventListener('chronicle_player_loaded', playerLoaded)
    document.addEventListener('chronicle_character_loaded', characterLoaded)
  }

  const modulesLoaded = () => {
    marshall = marshalling()
    marshall.props(propsPlans)
    marshall.sets(setsPlans)
    let stage = stageRoyal(marshall.rigging)
    theater = theaterSpace(marshall, stage)
    theater.buildStage()
    player(marshall, theater).name()
  }

  const playerLoaded = () => {
    character(marshall, theater).name()
  }

  const characterLoaded = () => {
    marshall.character({location: 'begining'})
  }

  return {
    init
  }
}

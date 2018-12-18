function application() {
  let marshall = {}

  const init = () => {
    autoload().loadFiles()
    document.addEventListener('chronicle_modules_loaded', modulesLoaded)
  }

  const modulesLoaded = () => {
    console.info('modulesLoaded')
    marshall = marshalling()
    console.info('Marshall created', marshall)
    marshall.newCharacter('bazzo')
    console.info('Character created', marshall.character())

  }

  return {
    init
  }
}

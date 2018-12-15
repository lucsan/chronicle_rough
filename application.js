function application() {

  const init = () => {
    autoload().loadFiles()
    document.addEventListener('chronicle_modules_loaded', modulesLoaded)
  }

  const modulesLoaded = () => {

  }

  return {
    init
  }
}

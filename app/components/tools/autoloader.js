const scriptLoader = (uri, callback) => {
  // Adding the script tag to the head as suggested before
  var head = document.getElementsByTagName('head')[0]
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = uri

  // Then bind the event to the callback function.
  // There are several events for cross browser compatibility.
  script.onreadystatechange = callback
  script.onload = callback

  // Fire the loading
  head.appendChild(script)
}



const autoload = () => {
  let s = {}
  s.fl = []
  s.fc = 0

  const loaded = () => {
    s.fc = s.fc - 1
    if (s.fc === 0) {
      document.dispatchEvent(new Event('chronicle_modules_loaded'))
    }
  }

  const loadFiles = () => {
    const path = ''
    s.fl.push(`${path}app/components/data/config.js`)
    s.fl.push(`${path}app/components/tools/globals.js`)
    s.fl.push(`${path}app/components/tools/emoji.js`)
    s.fl.push(`${path}app/components/tools/textify.js`)
    s.fl.push(`${path}app/components/tools/tools.js`)
    s.fl.push(`${path}app/components/tools/save.js`)
    s.fl.push(`${path}app/components/tools/elementBuilder.js`)
    s.fl.push(`${path}app/components/data/propsPlans.js`)
    s.fl.push(`${path}app/components/data/setsPlans.js`)
    s.fl.push(`${path}app/components/game/defaults.js`)
    s.fl.push(`${path}app/components/game/marshalling.js`)
    s.fl.push(`${path}app/components/game/actions.js`)
    s.fl.push(`${path}app/components/game/constructors/prop.js`)
    s.fl.push(`${path}app/components/game/constructors/set.js`)
    s.fl.push(`${path}app/components/game/player.js`)
    s.fl.push(`${path}app/components/game/character.js`)
    s.fl.push(`${path}app/components/game/theaterSpace.js`)
    s.fl.push(`${path}app/components/game/stageRoyal.js`)
    s.fl.push(`${path}app/components/game/stageHeadless.js`)

    s.fc = s.fl.length
    for (let f of s.fl) {
      scriptLoader(f, loaded)
    }
  }

  return {
    loadFiles: loadFiles,
  }

}

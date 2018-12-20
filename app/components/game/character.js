const character = (marshall, theater) => {

  const name = () => {
    return theater.inputCharacterName(eventAction)
  }

  const eventAction = () => {
    let c = document.getElementById('charName')
    marshall.character({name: c.value})
    document.dispatchEvent(new Event('chronicle_character_loaded'))
  }

  const loaded = () => {
    console.log('character loaded');
    theater.clearCharacterInput()
  }
  document.addEventListener('chronicle_character_loaded', loaded)

  return {
    name
  }
}

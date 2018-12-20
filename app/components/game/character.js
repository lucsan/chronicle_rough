const character = (marshall, theater) => {

  const name = () => {
    return theater.inputCharacterName(eventAction)
  }

  const eventAction = () => {
    let c = document.getElementById('charName')
    marshall.character({name: c.value})
    document.dispatchEvent(new Event('chronicle_character_loaded'))
    // el('characterDetails', undefined, 'charForm').div('character')
    // el('charForm', undefined, 'charName').input()
    // el('charForm', 'buttonClass', 'charNameOKButton' ).button( 'OK', eventAction)
  }

  const loaded = () => {
    console.log('character loaded');
    //el().removeElement('charForm')
  }
  document.addEventListener('chronicle_character_loaded', loaded)

  return {
    name
  }
}

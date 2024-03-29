const stageHeadless = (rigging) => {

  let newPlayerName = 'Headless Horseman'
  let newCharacterName = 'Bill Bobo'

  const playerName = (name) => {
    newPlayerName = name
  }

  const inputPlayerName = () => {
    console.log('Headless player', newPlayerName)
    return newPlayerName
  }

  const characterName = (name) => {
    newCharacterName = name
  }

  const inputCharacterName = () => {
    console.log('Headless char', newCharacterName);
    return newCharacterName
  }

  const build = () => {
    console.log('stage made')
  }

  return {
    build,
    playerName,
    characterName,
    inputPlayerName,
    clearPlayerInput: () => {},
    updatePlayer: () => {},
    inputCharacterName,
    clearCharacterInput: () => {},
    updateCharacter: () => {},
    characterMoved: () => {},
    propMoved: () => {},
    updateBoxes: () => {},
    respond: (msg) => { console.log(`respond - ${msg}`) }
  }
}

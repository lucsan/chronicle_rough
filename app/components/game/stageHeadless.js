const stageHeadless = (rigging) => {

  let newPlayerName = 'Headless Horseman'

  const playerName = (name) => {
    newPlayerName = name
  }

  const inputPlayerName = () => {
    console.log(newPlayerName)
    return newPlayerName
  }

  return {
    makeDisplays: () => { console.log('displays made (There are no displays)') },
    playerName,
    inputPlayerName
  }
}

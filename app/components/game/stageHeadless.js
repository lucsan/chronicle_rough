const stageHeadless = (rigging) => {

  let newPlayerName = 'Headless Horseman'

  const playerName = (name) => {
    newPlayerName = name
  }

  const inputPlayerName = () => {
    console.log(newPlayerName)
    return newPlayerName
  }

  const build = () => {
    console.log('stage made')
  }

  return {
    build,
    playerName,
    inputPlayerName
  }
}

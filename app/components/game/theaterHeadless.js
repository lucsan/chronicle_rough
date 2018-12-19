const theaterHeadless = () => {

  let newPlayerName = 'Headless Horseman'

  const playerName = (name) => {
    newPlayerName = name
  }

  const inputPlayerName = () => {
    console.log(newPlayerName)
    return newPlayerName
  }

  return {
    playerName,
    inputPlayerName
  }
}

const theaterSpace = (stage) => {

  const inputPlayerName = (nameAction) => {
    return stage.inputPlayerName(nameAction)
  }

  return {
    inputPlayerName,
    makeDisplays: () => { stage.makeDisplays() }
  }
}

const theaterSpace = (marshall, stage) => {

  const inputPlayerName = (eventAction) => {
    return stage.inputPlayerName(eventAction)
  }

  const inputCharacterName = (eventAction) => {
    return stage.inputCharacterName(eventAction)
  }

  return {
    inputPlayerName,
    inputCharacterName,
    buildStage: () => { stage.build() }
  }
}

const theaterSpace = (marshall, stage) => {

  const inputPlayerName = (eventAction) => {
    return stage.inputPlayerName(eventAction)
  }

  const clearPlayerInput = () => { stage.clearPlayerInput() }

  const inputCharacterName = (eventAction) => {
    return stage.inputCharacterName(eventAction)
  }

  const clearCharacterInput = () => { stage.clearCharacterInput() }

  return {
    inputPlayerName,
    clearPlayerInput,
    inputCharacterName,
    clearCharacterInput,
    buildStage: () => { stage.build() }
  }
}

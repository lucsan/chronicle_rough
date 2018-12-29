const theaterSpace = (marshall, stage) => {




  const inputPlayerName = (eventAction) => {
    return stage.inputPlayerName(eventAction)
  }

  const clearPlayerInput = () => { stage.clearPlayerInput() }

  const updatePlayer = () => {
    stage.updatePlayer()
  }

  const inputCharacterName = (eventAction) => {
    return stage.inputCharacterName(eventAction)
  }

  const clearCharacterInput = () => { stage.clearCharacterInput() }

  const updateCharacter = () => {
    stage.updateCharacter()
  }

  // const boxesLoaded = () => {
  //   stage.updateBoxes()
  // }

  const updateProps = () => {

  }

  document.addEventListener('chronicle_boxes_loaded', () => {stage.updateBoxes()})

  document.addEventListener('chronicle_character_moved', () => {stage.characterMoved()})

  document.addEventListener('chronicle_prop_moved', () => { stage.propMoved() })

  document.addEventListener('chronicle_response', (e) => { stage.respond(e.detail.msg) })


  return {
    inputPlayerName,
    clearPlayerInput,
    updatePlayer,
    inputCharacterName,
    clearCharacterInput,
    updateCharacter,
    updateProps,
    //characterMoved,
    buildStage: () => { stage.build() }
  }
}

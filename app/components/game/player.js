const player = (marshall, theater) => {

  const newPlayer = () => {
    // get input name
    const name = stage(marshall.rigging(), theater).inputPlayerName()
    return marshall.newPlayer(name)
    // return name
  }

  return {
    newPlayer
  }
}

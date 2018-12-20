const player = (marshall, theater) => {

  const name = () => {
    const name = theater.inputPlayerName()
    return marshall.newPlayer(name)
  }

  return {
    name
  }
}

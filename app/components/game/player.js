const player = (marshall, theater) => {

  const name = () => {
    const name = theater.inputPlayerName()
    return marshall.player(name)
  }

  return {
    name
  }
}

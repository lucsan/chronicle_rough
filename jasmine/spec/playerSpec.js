describe('player', () => {

  let marshall = marshalling()
  let stage = stageHeadless(marshall.rigging())
  let theater = theaterSpace(marshall, stage)


  it('can make a player', () => {
    const name = 'Tess Terrer'
    stage.playerName(name) // bypass theater as only headless has playerName func.
    expect(player(marshall, theater).name()).toBe(name)
  })




})

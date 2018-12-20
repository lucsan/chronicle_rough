describe('player', () => {

  let marshall = marshalling()
  let stage = stageHeadless(marshall.rigging())
  let theater = theaterSpace(stage)


  it('can make a player', () => {
    const name = 'Tess Terrer'
    stage.playerName(name) // bypass theater as only headless has playerName func.
    const p = player(marshall, theater).name()
    expect(p.name).toBe(name)
  })




})

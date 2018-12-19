describe('player', function() {
  let marshall = marshalling()
  let theater = theaterHeadless()

  it('can make a player', function() {
    const name = 'Tess Terrer'
    theater.playerName(name)
    const p = player(marshall, theater).newPlayer()
    expect(p.name).toBe(name)
  })
})

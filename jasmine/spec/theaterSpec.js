describe('theater', () => {

  let marshall = marshalling()
  let theater = theaterSpace(stageHeadless(marshall.rigging()))
  //let theater = theaterSpace(stage)

  it('has a test', () => {
    console.log(marshall);
    console.log(stage);
    console.log(theater);

    expect('').toBe('')
  })
})

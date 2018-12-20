describe('theater', () => {

  let marshall = marshalling()
  let theater = theaterSpace(marshall, stageHeadless(marshall.rigging()))
  //let theater = theaterSpace(stage)

  it('it can make a stage', () => {
    console.log(marshall);
    //console.log(stage);
    console.log(theater);

    theater.buildStage()

    expect('').toBe('')
  })
})

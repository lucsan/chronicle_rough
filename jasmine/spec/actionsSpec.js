describe("actions", () => {

  let marshall

  beforeAll(() => {
    marshall = marshalling()
  })

  it('can load default actions', () => {
    let props = {
      twiggle: {
        artist: 'tester',
        desc: 'a twiggle',
        locs: ['inv', 'bod'],
        pickUp: true
      }

    }
    marshall.props(props)
    actions().loadActions(props.twiggle)
    console.log(props);
    expect(typeof props.twiggle.actions.env.pickUp).toBe('function')
  })
})

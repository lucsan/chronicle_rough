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
        locs: ['inv', 'env'],
        pickUp: true,
        actions: {
          env: {},
          inv: {},
          bod: {}
        }
      }

    }
    marshall.props(props)
    actions(marshall).loadActions(props.twiggle)
    // console.log(props);
    expect(typeof props.twiggle.actions.env.pickUp).toBe('function')
// console.log(props.twiggle.actions.env.pickUp);
//     props.twiggle.actions.env.pickUp('twiggle')
  })

})

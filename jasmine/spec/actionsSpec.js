describe("actions", () => {

  let marshall = {}

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
    expect(typeof props.twiggle.actions.env.pickUp).toBe('function')
  })

  // it('dispatches a pickUp event', () => {
  //
  //   marshall.props(propsPlans)
  //   marshall.sets(setsPlans)
  //   document.addEventListener('chronicle_action',
  //     (e) => {
  //       expect(e.detail.propId).toBe('pid')
  //     }
  //   )
  //   actions().pickUp('pid')
  // })

})

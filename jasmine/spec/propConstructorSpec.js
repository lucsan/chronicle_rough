describe('propConstructor', () => {

  afterEach(function(){

  })

  afterAll(function(){

  })

  const testPlans = () => {
    const plans = {
      default: propPlans['default'],
      testThing: {},
      testItem: { actions: { env: { acto: () => {} } } },
      testProp: {}
    }
    return {...plans}
  }

  it('takes a list of plans and returns a list of props', () => {
    const props = propConstructor().build(testPlans())
    console.log('props', props);
    expect(typeof props.testThing).toBe('object')
  })

  it('will add an id.', () => {
    const props = propConstructor().build(testPlans())
    expect(props.testThing.id).toBe('testThing')
  })

  it('adds default actions bags (env, inv, bod).', () => {
    const props = propConstructor().build(testPlans())
    expect(typeof props.testThing.actions.env).toBe('object')
  })

  it('preserves user declaired (existing) actions', () => {
    const props = propConstructor().build(testPlans())
    expect(typeof props.testItem.actions.env.acto).toBe('function')
  })

  // it('defaults to no pickUp action.', () => {
  //   const props = propConstructor().propsList(testPlans())
  //   expect(props.testThing.actions.env.pickUp).toBe(undefined)
  // })
  //
  // it('Adds a pick up action if pickUp is true.', () => {
  //   let plans = testPlans()
  //   plans.testThing = { pickUp: true }
  //   const props = propConstructor().propsList(plans)
  //   expect(props.testThing.actions.env.pickUp === undefined).toBe(false)
  // })
  //
  // it('dosent add a default pickup if there is one already.', () => {
  //   let plans = testPlans()
  //   plans.testThing = { pickUp: true, actions: { env: { pickUp: () => {} }} }
  //   const props = propConstructor().propsList(plans)
  //   expect(typeof props.testThing.actions.env.pickUp).toBe('function')
  // })
  //
  // it('adds a default hold action.', () => {
  //   let plans = testPlans()
  //   const props = propConstructor().propsList(plans)
  //   expect(typeof props.testThing.actions.inv.hold === undefined).toBe(false)
  // })
  //
  // it('adds a default pack action.', () => {
  //   let plans = testPlans()
  //   const props = propConstructor().propsList(plans)
  //   expect(typeof props.testThing.actions.bod.pack === undefined).toBe(false)
  // })

})

describe('propConstructor', function() {

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

  it('Can take a list of prop plans and return a list of formed props.', function() {
    const props = propConstructor().propsList(testPlans())
    expect(props.testThing.id).toBe('testThing')
  })

  it('adds default actions bags (env, inv, bod).', function() {
    const props = propConstructor().propsList(testPlans())
    expect(typeof props.testThing.actions.env).toBe('object')
  })

  it('preserves user declaired (existing) actions', function() {
    const props = propConstructor().propsList(testPlans())
    expect(typeof props.testItem.actions.env.acto).toBe('function')
  })

  it('defaults to no pickUp action.', () => {
    const props = propConstructor().propsList(testPlans())
    expect(props.testThing.actions.env.pickUp).toBe(undefined)
  })

  it('Adds a pick up action if pickUp is true.', () => {
    let plans = testPlans()
    plans.testThing = { pickUp: true }
    const props = propConstructor().propsList(plans)
    expect(props.testThing.actions.env.pickUp === undefined).toBe(false)
  })

  it('dosent add a default pickup if there is one already.', () => {
    let plans = testPlans()
    plans.testThing = { pickUp: true, actions: { env: { pickUp: () => {} }} }
    const props = propConstructor().propsList(plans)
    expect(typeof props.testThing.actions.env.pickUp).toBe('function')
  })

})

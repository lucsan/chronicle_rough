describe('marshalling', () => {

  let marshall
  // let stage
  // let theater

  beforeAll(() => {
    marshall = marshalling()
    // stage = stageHeadless(marshall.rigging())
    // theater = theaterSpace(marshall, stage)
  })

  afterAll(function(){
    console.groupCollapsed('marshall')
    if (typeof marshall.cabinet == 'object') {
      console.info('cabinet', marshall.cabinet)
    }
    if (typeof marshall.player() == 'object') {
      console.info('player', marshall.player())
    }
    // if (typeof marshall.sets() == 'object') {
    //   console.info('player', marshall.sets())
    // }

    // console.info('character', marshall.character())
    // console.info('chest', marshall.chest())
    // console.info('rigging', marshall.rigging())
    // console.info('props', marshall.props())
    console.groupEnd()
  })

  it('exists', () => {
    expect(typeof marshall).toEqual('object')
  })

  it('has a cabinet', function() {
    let cabinet = marshall.cabinet
    expect(typeof cabinet).toEqual('object')
  })

  it('can load props', function() {
    let props = marshall.props(propPlans)
    expect(typeof props.stick.locs[0]).toEqual('string')
  })

  it('can protect props', function(){
    let props = marshall.props(propPlans)
    props = marshall.props()
    props = marshall.props({'name': 'test'})
    expect(typeof props.stick.locs[0]).toEqual('string')
  })

  it('can load sets', function() {
    let sets = marshall.sets(setsPlans)
    expect(sets.start.exits.length > 0).toEqual(true)
  })

  it('can create a new player', () => {
    marshall.player('Hyronimous Bosch')
    expect(marshall.player().name).toEqual('Hyronimous Bosch')
  })

  it('can create a new character', function(){
    marshall.character('barry')
    expect(marshall.character().name).toEqual('barry')
  })

  it('creates a chest and rigging', function(){
    marshall.character('sally')
    expect(marshall.cabinet.rigging.character.name).toEqual('sally')
  })

  it('can move the character location', function(){
    let location = 'newPlace'
    marshall.character('harry')
    marshall.character({location: location })
    expect(marshall.character().location).toEqual(location)
  })

  it('returns rigging', () => {
    let rigging = marshall.rigging()
    expect(typeof rigging).toBe('object')
  })

  it('can return props by location', () => {
    marshall.props(propPlans)
    let p = marshall.propsByLocation('start')
    expect(p[0].id).toBe('stick')
  })

  it('can return sets by id', () => {
    marshall.sets(setsPlans)
    let s = marshall.setsById('start')
    expect(s.id).toBe('start')
  })

  // it('can load loadActions', () => {
  //   let props = {
  //     twiggle: {
  //       artist: 'tester',
  //       desc: 'a twiggle',
  //       locs: ['inv', 'bod']
  //     }
  //
  //   }
  //   marshall.props(props)
  //
  //
  //   actions().loadActions(props.twiggle)
  //   console.log(props)
  //   expect('a').toBe('b')
  // })

})

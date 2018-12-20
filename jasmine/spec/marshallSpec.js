describe('marshalling', () => {

  let marshall

  beforeAll(function(){
    marshall = marshalling()
  })

  afterAll(function(){
    console.groupCollapsed('marshall')
    if (typeof marshall.cabinet == 'object') {
      console.info('cabinet', marshall.cabinet)
    }
    if (typeof marshall.player() == 'object') {
      console.info('player', marshall.player())
    }
    // console.info('character', marshall.character())
    // console.info('chest', marshall.chest())
    // console.info('rigging', marshall.rigging())
    // console.info('sets', marshall.sets())
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
    const p = marshall.newPlayer('Hyronimous Bosch')
    expect(marshall.player().name).toEqual('Hyronimous Bosch')
  })

  it('can create a new character', function(){
    marshall.newCharacter('barry')
    expect(marshall.cabinet.character.name).toEqual('barry')
  })

  it('creates a chest and rigging', function(){
    marshall.newCharacter('sally')
    expect(marshall.cabinet.rigging.character.name).toEqual('sally')
  })

  it('can move the characters location', function(){
    let location = 'newPlace'
    marshall.newCharacter('harry')
    marshall.character({location: location })
    expect(marshall.cabinet.character.location).toEqual(location)
  })

  it('returns rigging', () => {
    let rigging = marshall.rigging()
    expect(typeof rigging).toEqual('object')
  })

  // it('can marshall props and sets by location', function() {
  //
  // })



})

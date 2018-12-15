describe('marshalling', function() {

  let marshall

  beforeAll(function(){
    marshall = marshalling()
  })

  afterAll(function(){
    console.groupCollapsed('marshall')
    console.log('cabinet', marshall.cabinet)
    console.log('character', marshall.character());
    console.log('chest', marshall.chest());
    console.log('rigging', marshall.rigging());
    console.groupEnd()
  })

  it('exists', function() {
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



  // it('cant be changed', function(){
  //   let m1 = marshall()
  //   m1.cabinet.character = {'name': 'test'}
  //   m2.cabinet.character = {'name': 'test2'}
  //   expect(m1.cabinet.character.name).toEqual('test')
  // })

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
    console.log(marshall.character());
    expect(marshall.cabinet.character.location).toEqual(location)
  })




})

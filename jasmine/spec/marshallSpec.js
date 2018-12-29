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

  // it('can protect props', function(){
  //   let props = marshall.props(propPlans)
  //   console.log('p1',props);
  //   props = marshall.props()
  //   console.log('p2', props);
  //   props = marshall.props({'name': 'test'})
  //   console.log('p3', props);
  //   console.log('stick', props.stick);
  //   expect(typeof props.stick.locs[0]).toEqual('string')
  // })

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
    marshall.sets(setsPlans)
    let p = marshall.propsPlansByLocation('clearing')
    expect(p[0].id).toBe('stick')
  })

  it('can return sets by id', () => {
    marshall.sets(setsPlans)
    let s = marshall.setsPlansById('start')
    expect(s.id).toBe('start')
  })

  it('can move a prop from one box to another', () => {
    let props = {
      twiggle: {
        artist: 'tester',
        desc: 'a twiggle',
        locs: ['noPlace'],
        pickUp: true,
        actions: {
          env: {},
          inv: {},
          bod: {}
        }
      }
    }

    let sets = {
      noPlace: {
        desc: 'test set',
        exits: [{id: 'start'}],
        actions: {
          open: () => {}
        }
      },
      somePlace: {
        desc: 'a test place',
        exits: [{id: 'start'}],
      }
    }
    marshall.props(props)
    marshall.sets(sets)
    //actions(marshall).loadActions(props.twiggle)
    //props.twiggle.actions.env.pickUp('twiggle')
    marshall.loadBoxes()
    marshall.character({location: 'noPlace'})
    marshall.moveProp('twiggle', 'env', 'bod')
    let cabinet = marshall.cabinet
    expect(cabinet.boxes.bod.props.length).toBe(1)
    marshall.moveProp('twiggle', 'bod', 'inv')
    expect(cabinet.boxes.bod.props.length).toBe(0)
    expect(cabinet.boxes.inv.props.length).toBe(1)
        marshall.character({location: 'somePlace'})
    marshall.moveProp('twiggle', 'inv', 'env')
    expect(cabinet.boxes.bod.props.length).toBe(0)
    expect(cabinet.boxes.inv.props.length).toBe(0)
    expect(cabinet.places['somePlace'].props.length).toBe(1)
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

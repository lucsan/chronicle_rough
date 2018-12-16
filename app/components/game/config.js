const defaults = {
  character: {
    name: '',
    health: 100,
    level: 1,
    location: 'start'
  },
  chest: {
    character: [],
    places: [],
    boxes: []
  },
  rigging: {
    character: {},
    places: {},
    boxes: {}
  },
  prop: {

  },
  propAspects: [
    'actions',
    'properties'
  ],
  actionBags: [
    'env',
    'inv',
    'bod'
  ],
  properties: [
    'attack',
    'defense',
    'weight',
    'drops'
  ],
  envActDefault: ['pickUp'],

  actions: {
    env: {
      pickUp: () => {}
    },
    inv: {
      drop: () => {}
    },
    bod: {
      hit: () => {}
    }

  }
}

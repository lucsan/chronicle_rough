const propConstructor = () => {
  let template = {}
  const aspects = ['actions', 'properties']
  const bags = ['env', 'inv', 'bod']

  const propsList = (plans) => {
    template = plans['default']
    let things = {}
    for (let id in plans) {
      let thing = {...template, ...plans[id]}
      thing.id = id
      addAspects(thing)
      addActions(thing)
      pickUpAction(thing)
      holdAction(thing)
      packAction(thing)

      things[id] = thing
    }
    return things
  }

  const pickUpAction = (thing) => {
    if (thing.pickUp === true
    && thing.actions.env.pickUp === undefined) {
      thing.actions.env = { pickUp: 'put pickup action here (move item to bod)' }
    }
  }

  const holdAction = (thing) => {
    thing.actions.inv = { hold: 'move to bod'}
  }

  const packAction = (thing) => {
    thing.actions.bod = { pack: 'move to inv'}
  }

  const addActions = (thing) => {
    bags.map(b => {
      if (thing.actions[b] === undefined) thing.actions[b] = {}
    })
  }

  const addAspects = (thing) => {
    aspects.map(a => {
      if (thing[a] === undefined) thing[a] = {}
    })
  }

  return {
    propsList
  }
}

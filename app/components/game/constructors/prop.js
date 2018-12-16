const propConstructor = () => {
  let template = {}

  const propsList = (plans) => {
    template = plans['default']
    let things = {}
    let bags = ['env', 'inv', 'bod']
    let aspects = ['actions', 'properties']
    for (let id in plans) {
      let thing = {...template, ...plans[id]}
      //console.log(thing);
      thing.id = id

      aspects.map(a => {
        if (thing[a] === undefined) thing[a] = {}
      })
      bags.map(b => {
        if (thing.actions[b] === undefined) thing.actions[b] = {}
      })

      if (thing.pickUp === true
      && thing.actions.env.pickUp === undefined) {
        thing.actions.env = { pickUp: 'put pickup action here' }
      }


      things[id] = thing
    }
    return things
  }

  return {
    propsList
  }
}

const propConstructor = () => {
  let template = {}
  const aspects = defaults.propAspects //['actions', 'properties']
  const bags = defaults.actionBags //['env', 'inv', 'bod']

  const build = (plans) => {
    template = plans['default']
    let things = {}
    for (let id in plans) { things[id] = buildProp(plans[id], id) }
    return things
  }

  const buildProp = (prop, id) => {
    prop = {...template, ...prop}
    prop.id = id
    prop.title = tools().makeTitleFromId(id)
    addAspects(prop)
    addActionBags(prop)
    actions().loadActions(prop)
    return prop
  }

  const addActionBags = (p) => {
    bags.map(b => {
      if (p.actions[b] === undefined) p.actions[b] = {}
    })
  }

  const addAspects = (p) => {
    aspects.map(a => { if (p[a] === undefined) p[a] = {} })
  }

  return {
    build
  }
}

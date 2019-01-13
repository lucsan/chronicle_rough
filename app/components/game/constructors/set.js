const setConstructor = () => {

  const build = (plans) => {
    let scenes = {}
    for (let id in plans) { scenes[id] = buildSet(id, plans) }
    scenesExitsDesc(scenes)
    return scenes
  }

  const buildSet = (id, plans) => {
    let set = plans[id]
    set.id = id
    set.title = camelToTitle(id)
    if (!set.label) set.label = camelToTitle(id)
    return set
  }


  const scenesExitsDesc = (scenes) => {
    for (let sid in scenes) {
      let exits = scenes[sid].exits
      exits.map(e => {
        if (!e.desc) { e.desc = scenes[e.to].label }
      })
    }
  }

  return {
    build
  }
}

const actions = (marshall) => {

  const loadActions = (prop) => {
    // if (prop.actions == undefined) { prop.actions = {} }
    // if (prop.actions.env == undefined) prop.actions.env = {}
    // if (prop.actions.inv == undefined) prop.actions.inv = {}
    // if (prop.actions.bod == undefined) prop.actions.bod = {}

    if (prop.actions.env.pickUp == undefined) loadPickUp(prop)
  }

  const loadPickUp = (prop) => {
    if (!prop.pickUp) return
    let id = prop.id
    prop.actions.env.pickUp = (id) => marshall.moveProp(id, 'env', 'bod')
  }

  const pickUp = (propId) => {
    // move from env to bod
    marshall.moveProp(propId, 'env', 'bod')
  }

  return {
    loadActions,
    //pickUp
  }
}

const actions = () => {

  const loadActions = (prop) => {
    if (prop.actions == undefined) { prop.actions = {} }
    if (prop.actions.env == undefined) prop.actions.env = {}
    if (prop.actions.inv == undefined) prop.actions.inv = {}
    if (prop.actions.bod == undefined) prop.actions.bod = {}

    if (prop.actions.env.pickUp == undefined) loadPickUp(prop.actions.env, prop.pickUp)
  }

  const loadPickUp = (env, canLift) => {
    if (!canLift) return
    env.pickUp = () => {'pickUp action here'}
  }

  const pickUp = (thing) => {

  }

  return {
    loadActions,
    pickUp
  }
}

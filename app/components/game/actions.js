const actions = () => {

  const loadActions = (prop) => {
    // if (prop.actions == undefined) { prop.actions = {} }
    // if (prop.actions.env == undefined) prop.actions.env = {}
    // if (prop.actions.inv == undefined) prop.actions.inv = {}
    // if (prop.actions.bod == undefined) prop.actions.bod = {}

    if (prop.actions.bod.drop == undefined) loadDrop(prop)
    if (prop.actions.env.pickUp == undefined) loadPickUp(prop)
  }

  const loadDrop = (prop) => {
    prop.actions.bod.drop = () => drop(prop.id)
  }

  const loadPickUp = (prop) => {
    if (!prop.pickUp) return
    prop.actions.env.pickUp = () => pickUp(prop.id)//(id) => marshall.moveProp(id, 'env', 'bod')
  }

  // pickUp - move from env to bod
  const pickUp = (propId) => { dispatch(prepDetail('pickUp', propId, 'env', 'bod')) }

  // drop - move from bod to env
  const drop = (propId) => { dispatch(prepDetail('drop', propId, 'bod', 'env')) }


  // ---- custom actions ----
  const kick = (propId) => {
    document.dispatchEvent(new CustomEvent(
      'chronicle_response',
      {detail: {msg: `you kicked ${propId}`}}
    ))
  }


  const dispatch = (detail) => {
    document.dispatchEvent(
      new CustomEvent(
        'chronicle_action',
        {detail: detail}
      )
    )
  }

  const prepDetail = (actionId, propId,from, to) => {
    return {actionId: actionId, propId: propId, from: from, to: to}
  }

  return {
    loadActions,
    kick
  }
}

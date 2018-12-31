const actions = () => {

  const loadActions = (prop) => {

    loadBods(prop)
    if (prop.actions.env.pickUp == undefined) loadPickUp(prop)
    if (prop.actions.inv.grabit == undefined) prop.actions.inv.grabit = () => grabit(prop.id)

  }

  const loadBods = (prop) => {
    if (prop.actions.bod.drop == undefined) loadDrop(prop)
    if (prop.actions.bod.bagit == undefined) prop.actions.bod.bagit = () => bagit(prop.id)
    if (prop.actions.bod.inspect == undefined) prop.actions.bod.inspect = () => inspect(prop)


  }

  const loadDrop = (prop) => { prop.actions.bod.drop = () => drop(prop.id) }

  const loadPickUp = (prop) => {
    if (!prop.pickUp) return
    prop.actions.env.pickUp = () => pickUp(prop.id)//(id) => marshall.moveProp(id, 'env', 'bod')
  }

  const pickUp = (propId) => { dispatch(prepDetail('pickUp', propId, 'env', 'bod')) }

  const drop = (propId) => { dispatch(prepDetail('drop', propId, 'bod', 'env')) }

  const bagit = (propId) => {dispatch(prepDetail('bagit', propId, 'bod', 'inv'))}

  const grabit = (propId) => {dispatch(prepDetail('grabit', propId, 'inv', 'bod'))}

  const inspect = (prop) => { msg(prop.desc) }

  const msg = (msg) => {
    document.dispatchEvent(
      new CustomEvent(
        'chronicle_response',
        {detail: {msg: msg}}
      )
    )
  }

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
    kick,
    msg
  }
}

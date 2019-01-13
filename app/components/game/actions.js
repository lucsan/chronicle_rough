const propActions = () => {

  const loadDefaultActions = (prop) => {

    loadBods(prop)
    loadEnvs(prop)
    if (prop.actions.inv.grabit == undefined) prop.actions.inv.grabit = () => grabit(prop.id)

  }

  const loadEnvs = (prop) => {
    if (prop.actions.env.pickUp == undefined) loadPickUp(prop)
    if (prop.actions.env.look == undefined) prop.actions.env.look = () => inspect(prop)

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

  //const pickUp = (propId) => { dispatch(prepDetail('move', propId, 'env', 'bod')) }
  const pickUp = (propId) => { dispatchMove(propId, 'env', 'bod') }

  const drop = (propId) => { dispatchMove(propId, 'bod', 'env') }

  const bagit = (propId) => { dispatchMove(propId, 'bod', 'inv') }

  const grabit = (propId) => { dispatchMove(propId, 'inv', 'bod') }

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


  const dispatchMove = (propId, from, to) => {
    dispatch({actType: 'move', propId: propId, from: from, to: to})
  }

  const dispatch = (detail) => {
    document.dispatchEvent(
      new CustomEvent(
        'chronicle_prop_action',
        {detail: detail}
      )
    )
  }

  // Open, close, unlock, lock, putIn, takeOut
  // open = look inside if unlocked (or no lock)
  // close = needed?
  // putIn = put an item inside if unlocked (fits?)



  const open = (propId) => {console.log('prop open clicked');}

  const unlock = (propId, requires) => {
    console.log('prop unlock clicked ' + propId + ' ' + requires);
    dispatch({actType: 'open', propId})
  }

  // const prepDetail = (actType, propId, from, to) => {
  //   return {actType: actType, propId: propId, from: from, to: to}
  // }

  return {
    loadDefaultActions,
    kick,
    msg,
    open,
    unlock
  }
}

const setActions = () => {

  loadDefaultActions = (set) => {

  }

  // open?
  // unlock (lock?)
  // enter (board, mount etc)



  const open = (toId) => {}

  const unlock = (toId) => { console.log('set unlocked clicked');}

  const enter = (toId) => {
    console.log('entering ' +toId);
    dispatch({to: toId})
  }

  const dispatch = (detail) => {
    document.dispatchEvent(
      new CustomEvent(
        'chronicle_set_action',
        {detail: detail}
      )
    )
  }

  return {
    open,
    unlock,
    enter
  }

}

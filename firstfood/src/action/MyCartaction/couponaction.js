function selectCoupon(obj) {
  console.log(obj)
  return function(dispatch) {
    dispatch({ type: 'selectcoupon', payload: obj }) 
  }
}

function initCoupon(obj) {
  return function(dispatch) {
    dispatch({ type: 'initcoupon', payload: obj }) 
  }
}

export { selectCoupon, initCoupon }

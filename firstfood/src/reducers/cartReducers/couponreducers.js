function cartcoupon(state = [], { type, payload }) {
  switch (type) {
    case 'selectcoupon':
      console.log(payload)
      console.log([payload])
      return [payload]
    case 'initcoupon':
      return [payload]
    default:
      return state
  }
}

export default cartcoupon

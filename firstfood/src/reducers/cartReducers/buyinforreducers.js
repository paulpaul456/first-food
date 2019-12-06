function buyinfor(state = [], { type, payload }) {
  switch (type) {
    case 'getbuyinfor':
      console.log(payload)
      return payload //初始化
    case 'update':
      let newstate = state.map(e => {
        if (e.id === payload.id) {
          let obj = { ...e, ...payload }
          return obj
        } else {
          return e
        }
      })
      return [...newstate]
    case 'getmember':
      console.log(state)
      console.log(payload)
     let getmemberstate=state.map(e=>{
       e.buyer=payload.name
       e.buyer_mobile=payload.mobile
       e.buyer_email=payload.email
       e.buyer_address=payload.address
       let obj={...e}
       return obj
     })
     console.log(getmemberstate)
    return [...getmemberstate]  

    case 'deletemember':
     let deletememberdata=state.map(e=>{
      e.buyer=payload.name
      e.buyer_mobile=payload.mobile
      e.buyer_email=payload.email
      e.buyer_address=payload.address
      let obj={...e}
      return obj
    })
    return deletememberdata

    case 'equalbuyer':
      console.log(state)
      let equalstate = state.map(e => {
        e.receiver = payload.buyer
        e.receiver_phone = payload.buyer_phone
        e.receiver_mobile = payload.buyer_mobile
        e.receiver_email = payload.buyer_email
        let obj = { ...e }
        return obj
      })
      console.log([...equalstate])
      return [...equalstate]

      case 'deletewithbuyer':
          let deletewithbuyerstate = state.map(e => {
            e.receiver = payload.buyer
            e.receiver_phone = payload.buyer_phone
            e.receiver_mobile = payload.buyer_mobile
            e.receiver_email = payload.buyer_email
            let obj = { ...e }
            return obj
          })
          console.log([...deletewithbuyerstate])
          return [...deletewithbuyerstate]      
      
      default:
      return state
  }
}

export default buyinfor

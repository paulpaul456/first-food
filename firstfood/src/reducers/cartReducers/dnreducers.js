function dn(state = [], { type, payload }) {
  switch (type) {
    case 'dninit':
      return [...payload] //初始化

    case 'dnupdate':
      console.log(payload)
      let newstate = state.map(e => {
        if (e.dn_goods_cart_id === payload.dn_goods_cart_id) {
          //如果為同品項
          let obj = { ...e, ...payload } //則更新該品項屬性的值
          console.log(obj)
          return obj
        } else {
          return e
        }
      })
      console.log(newstate)
      return [...newstate]
    case 'dnselectall':
      let newdata = state.map(e => {
        //將每個項目的checked改為跟全選一樣的狀態再返回出來
        e.checked = payload
        return e
      })
      return [...newdata]

    case 'dndelete':
      let afterdeletedata = state.filter(
        e => e.dn_goods_cart_id != payload.dn_goods_cart_id
      ) //篩選出被刪除以外的資料
      return afterdeletedata

      case 'dnjoinnextbuy':
          let dnjoinnextbuydata=state.filter(
            e => e.dn_goods_cart_id != payload
          )
    
    return dnjoinnextbuydata


    case 'dndeleteAll':
      let afterdeleteAlldata = []
      for (var i = 0; i < payload.length; i++) {
        if (payload[i]['checked'] == false) {
          afterdeleteAlldata.push(payload[i])
        }
      }
      console.log(afterdeleteAlldata)
      return afterdeleteAlldata

    default:
      return state
  }
}

export default dn

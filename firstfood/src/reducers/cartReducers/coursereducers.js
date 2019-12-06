function course(state = [], { type, payload }) {
  switch (type) {
    case 'courseinit':
      return [...payload] //初始化

    case 'courseupdate':
      console.log(payload)
      let newstate = state.map(e => {
        if (e.course_cart_id === payload.course_cart_id) {
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
    case 'courseselectall':
      let newdata = state.map(e => {
        //將每個項目的checked改為跟全選一樣的狀態再返回出來
        e.checked = payload
        return e
      })
      return [...newdata]

    case 'coursedelete':
      let afterdeletedata = state.filter(
        e => e.course_cart_id != payload.course_cart_id
      ) //篩選出被刪除以外的資料
      return afterdeletedata

    case 'coursejoinnextbuy':
          let coursejoinnextbuydata=state.filter(
            e => e.course_cart_id != payload
          )
    
    return coursejoinnextbuydata


    case 'coursedeleteAll':
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

export default course

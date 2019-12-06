function getdata(custermerId) {
  //取得初始資料
  return function(dispatch) {
    setTimeout(() => {
      fetch(`http://localhost:6003/cartsfm/${custermerId}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
        .then(response => {
          return response.json()
        })
        .then(obj => {
          let data = obj
          data = data.map(e => {
            e.checked = false
            return e
          })
          dispatch({ type: 'init', payload: data })
        })
    }, 500)
  }
}

function setdata(e) {
  //更改購物車資料需要連結到SERVER 所以需要同步
  return function(dispatch) {
    dispatch({ type: 'update', payload: e }) //再去更新REDUCERS
  }
}

function deletedata(e) {
  //刪除單筆資料
  return function(dispatch) {
    dispatch({ type: 'delete', payload: e })
  }
}

function deleteAllItem(car) {
  //尚未完成

  return function(dispatch) {
    dispatch({ type: 'deleteAll', payload: car })
  }
}

function selectdata(obj) {
  //選擇OPTION時

  obj.e.checked = obj.checked
  console.log(obj.e)
  let data = obj.e
  console.log(data)
  return function(dispatch) {
    dispatch({ type: 'update', payload: obj }) //再去更新REDUCERS
  }
}

function selectAll(all, car) {
  //全選
  console.log(all)
  let cars = car
  let allchecked = all
  console.log(cars)
  return function(dispatch) {
    dispatch({
      type: 'selectall',
      payload: all,
    })
  }
}

function joinNextBuy(id){
  return function(dispatch) {
    fetch(`http://localhost:6003/fmnextbuy/${id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    .then(
      dispatch({
        type: 'joinnextbuy',
        payload: id,
      })
    )
   
  }
}

export { getdata, setdata, selectdata, selectAll, deletedata, deleteAllItem, joinNextBuy }

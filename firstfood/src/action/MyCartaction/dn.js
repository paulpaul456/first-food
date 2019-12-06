function getdnData(custermerId) {
  //取得初始資料
  return function(dispatch) {
    setTimeout(() => {
      fetch(`http://localhost:6003/cartdn/${custermerId}`, {
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
          dispatch({ type: 'dninit', payload: data })
        })
    }, 500)
  }
}

function dnsetdata(e) {
  //更改購物車資料需要連結到SERVER 所以需要同步
  return function(dispatch) {
    dispatch({ type: 'dnupdate', payload: e }) //再去更新REDUCERS
  }
}

function dndeletedata(e) {
  //刪除單筆資料
  return function(dispatch) {
    dispatch({ type: 'dndelete', payload: e })
  }
}

function dndeleteAllItem(car) {
  //尚未完成

  return function(dispatch) {
    dispatch({ type: 'dndeleteAll', payload: car })
  }
}

function dnselectdata(obj) {
  //選擇OPTION時

  obj.e.checked = obj.checked
  console.log(obj.e)
  let data = obj.e
  console.log(data)
  return function(dispatch) {
    dispatch({ type: 'dnupdate', payload: obj }) //再去更新REDUCERS
  }
}

function dnselectAll(all, dn) {
  //全選
  console.log(all)

  return function(dispatch) {
    dispatch({
      type: 'dnselectall',
      payload: all,
    })
  }
}

function dnJoinNextBuy(id){
  return function(dispatch) {
    fetch(`http://localhost:6003/dnnextbuy/${id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    .then(
      dispatch({
        type: 'dnjoinnextbuy',
        payload: id,
      })
    )
   
  }
}


export {
  getdnData,
  dnsetdata,
  dndeletedata,
  dndeleteAllItem,
  dnselectdata,
  dnselectAll,
  dnJoinNextBuy,
}

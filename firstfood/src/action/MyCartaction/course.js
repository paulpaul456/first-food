function getCourseData(custermerId) {
  //取得初始資料
  return function(dispatch) {
    setTimeout(() => {
      fetch(`http://localhost:6003/cartcourse/${custermerId}`, {
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
          dispatch({ type: 'courseinit', payload: data })
        })
    }, 500)
  }
}

function coursesetdata(e) {
  //更改購物車資料需要連結到SERVER 所以需要同步
  return function(dispatch) {
    dispatch({ type: 'courseupdate', payload: e }) //再去更新REDUCERS
  }
}

function coursedeletedata(e) {
  //刪除單筆資料
  return function(dispatch) {
    dispatch({ type: 'coursedelete', payload: e })
  }
}

function coursedeleteAllItem(car) {
  //尚未完成

  return function(dispatch) {
    dispatch({ type: 'coursedeleteAll', payload: car })
  }
}

function courseselectdata(obj) {
  //選擇OPTION時

  obj.e.checked = obj.checked
  console.log(obj.e)
  let data = obj.e
  console.log(data)
  return function(dispatch) {
    dispatch({ type: 'courseupdate', payload: obj }) //再去更新REDUCERS
  }
}

function courseselectAll(all, course) {
  //全選
  console.log(all)
  let courses = course
  let allchecked = all
  console.log(courses)
  return function(dispatch) {
    dispatch({
      type: 'courseselectall',
      payload: all,
    })
  }
}

function courseJoinNextBuy(id){
  return function(dispatch) {
    fetch(`http://localhost:6003/coursenextbuy/${id}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    .then(
      dispatch({
        type: 'coursejoinnextbuy',
        payload: id,
      })
    )
   
  }
}


export {
  getCourseData,
  coursesetdata,
  coursedeletedata,
  coursedeleteAllItem,
  courseselectdata,
  courseselectAll,
  courseJoinNextBuy,
}

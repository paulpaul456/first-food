// import

import {
  ADD_TODO,
  DEL_TODO,
  LOAD_PRODUCT,
  ADD_LOVE,
  ADD_CART,
  LOAD_PRODUCTBYCUS,
  REMOVE_LOVE,
  REMOVE_FMCART,
  LOAD_COMMENTBYID,
  LOAD_FM_COM_BYID,
  LOAD_ALL_FMGOODS,
  ALL_SELECT_BYMONEYFM,
  LOAD_FARIDPRODUCT,
  LOAD_ORDERMEM,
  LOAD_HOTTFAPRODUCT,
  LOAD_FM_CLASS_RECOMMEND,
} from './actionType'
import {
  getcidcartallnumA,
  // allSelectByMoneyAsync,
} from '../action/checkLoginAction'

export * from './actionType'

// export *
export * from './checkLoginAction'
export * from './fetchMemberDataAction'
export * from './farmerproduct'
export * from './course/coursesAction'
export * from './collection/collection'
export * from './ui/uiAction'
export * from './goods'
export * from './restaurantAction'
export * from './dinnerProductAction'
export * from './reservation/reservationAction'
// Action Creators
export const addTodo = payload => ({ type: ADD_TODO, payload })
export const delTodo = payload => ({ type: DEL_TODO, payload })
export const loadProductByCu = payload => ({ type: LOAD_PRODUCTBYCUS, payload })
export const loadOrderMem = payload => ({ type: LOAD_ORDERMEM, payload })

export const loadOrderMemAsync = (id,time1,time2,sort1) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/orders/all/${id}/${time1}/${time2}/${sort1}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadOrderMem(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const addTodoAsync = payload => {
  return dispatch => {
    setTimeout(() => {
      // 延后發送,模擬異步(副作用)程序
      console.log('delay onItemAdd')
      dispatch(addTodo(payload))
    }, 2000)
  }
}

export const loadProduct = payload => {
  return {
    type: LOAD_PRODUCT,
    payload,
  }
}
export const loadFarIdProduct = payload => {
  return {
    type: LOAD_FARIDPRODUCT,
    payload,
  }
}

export const loadProductAsync = (id,cid) => {
  return async dispatch => {
    try { console.log('cidd')
    console.log(cid)
      const response = await fetch(`http://localhost:6003/api/farmerProducts/filter/${id}/${cid}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }
      console.log('addpayload')
      console.log(payload)
      dispatch(loadProduct(payload))
      

      console.log('loading fm data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadProductByCusAsync = cid => {
  console.log(cid)
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/login/${cid}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadProductByCu(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadProductByIDAsync = (id,cid) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/${id}/${cid}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()
      console.log('1236974')
      console.log(data.fmid[0].class_sid)
      let classfmsid = data.fmid[0].class_sid
      const payload = { data, id: id }

      dispatch(loadFarIdProduct(payload))
      dispatch(loadFMProductRecommendByClassAsync(classfmsid))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

// hothot商品
export const loadhotFmGoods = payload => ({ type: LOAD_HOTTFAPRODUCT, payload })
// goods
export const addLove = payload => ({ type: ADD_LOVE, payload })
export const addCart = payload => ({ type: ADD_CART, payload })
export const removeLove = payload => ({ type: REMOVE_LOVE, payload })
export const removeCart = payload => ({ type: REMOVE_FMCART, payload })
export const loadCommentByID = payload => ({ type: LOAD_COMMENTBYID, payload })
// export const loadCommentByID = dataa => ({ type: LOAD_COMMENTBYID, payload:dataa })
export const loadFmAll = payload => ({ type: LOAD_ALL_FMGOODS, payload })

export const loadhotFmGoodsAsync = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/hot/fmGoods`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadhotFmGoods(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadFmAllAsync = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/all`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadFmAll(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const removeLoveA = (goodsid, customer_id, va) => {
  let params = {
    goodsid: goodsid,
    customer_id: customer_id,
    va: va,
  }
  console.log('tttttttttt')
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/goods/removeLove`,
        {
          method: 'DELETE',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()
      console.log('response123')

      const payloadSecond = data

      dispatch(removeLove(data))
      if (data.affectedRows === 1) {
        alert('移除成功')
      }
      // console.log('data', data)
    } catch (e) {
      console.log(e)
    }
  }
}


export const removeCartA = (goodsid, customer_id, va) => {
  let params = {
    goodsid: goodsid,
    customer_id: customer_id,
    va: va,
  }
  console.log('cartttttttttt')
  console.log(params)
  // console.log(goodsid, customer_id, va)
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        // console.log(goodsid, customer_id, va)
        `http://localhost:6003/api/goods/removeCart`,
        {
          method: 'DELETE',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()
      console.log('res有刪喔喔喔')
      // const payloadSecond = data
     
      console.log(data)
       dispatch(getcidcartallnumA(customer_id))
      dispatch(removeCart(data))
      // dispatch(getCourseData())
      // if (data.affectedRows === 1) {
      //   alert('移除成功')
      // }
      // console.log('data', data)
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadCommentByIDAsync = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/goods/comment/${id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data, id: id }

      dispatch(loadCommentByID(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const addLoveAsync = (goodsid, customer_id, va) => {
  let params = {
    goodsid: goodsid,
    customer_id: customer_id,
    va: va,
  }
  console.log(params)
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/goods/addlove`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      console.log('response')
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }
      console.log('addpayload')
      console.log(payload)

      dispatch(addLove(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const addCartAsync = (goodsid, customer_id, num, va) => {
  let params = {
    goodsid: goodsid,
    customer_id: customer_id,
    num: num,
    va: va,
  }

  console.log(params)
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/goods/addcart`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      console.log('response')
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = {
        data: data,
        goodsid: goodsid,
        customer_id: customer_id,
        num: num,
        va: va,
      }

      dispatch(addCart(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

//測試加減
export const addOrMines = value => {
  value = value + 1
  return {
    type: 'ADD_OR_MINES',
    payload: value,
  }
}

// 農品其他相關產品
export const loadFMProductRecommendByClass = payload => ({ type: LOAD_FM_CLASS_RECOMMEND, payload })

export const loadFMProductRecommendByClassAsync = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/goods/classsidfm/${id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadFMProductRecommendByClass(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

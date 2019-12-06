// import

import {
  LOAD_RESTAURANT,
  LOAD_OPEN_RESTAURANT,
  LOAD_SINGLE_RESTAURANT,
  LOAD_SINGLE_DINNER,
  HANDLE_CLICK_PRODUCT_CLASS,
  TEST,
  HANDLE_CLICK_FARMER_PRODUCT,
  HANDLE_CLICK_SPECIAL,
  HANDLE_CLICK_SPICY,
  ADD_DN_CART,
  READ_DN_CART,
  HANDLE_CHECK_DN,
  DEL_DN_CART,
  ADD_LOVE_DN_CART,
  PREV_PATH,
  ADD_RES_COMMENT,
  READ_RES_COMMENT,
  READ_MORE_COMMENT,
  ADD_DN_COMMENT,
  READ_DN_COMMENT,
  CLICK_RES_COMMENT,
  HANDLE_MAP_SEARCH,
  HANDLE_MAP_DISPLAY,
  SET_DISTANCE,
  SET_CENTER,
} from './actionType'

import swal from '@sweetalert/with-react'

// 餐廳 菜色 代客煮 Action Creators

// 抓現在位置 setCenter
export const setCenter = payload => ({
  type: SET_CENTER,
  payload,
})

// 設定距離
export const setDistance = payload => ({
  type: SET_DISTANCE,
  payload,
})

export const loadRestaurant = payload => ({ type: LOAD_RESTAURANT, payload })
export const loadOpenRestaurant = payload => ({
  type: LOAD_OPEN_RESTAURANT,
  payload,
})
export const test = payload => ({
  type: TEST,
  payload,
})

export const loadSingleRestaurant = payload => ({
  type: LOAD_SINGLE_RESTAURANT,
  payload,
})

export const loadSingleDinner = payload => ({
  type: LOAD_SINGLE_DINNER,
  payload,
})

export const loadSingleDinnerAfterClick = payload => ({
  type: HANDLE_CLICK_PRODUCT_CLASS,
  payload,
})

// 新增點餐菜色
export const addDnCart = payload => {
  return {
    type: ADD_DN_CART,
    payload,
  }
}

// 讀取點餐菜色
export const readDnCart = payload => {
  return {
    type: READ_DN_CART,
    payload,
  }
}

// 取消點餐
export const deleteDnCart = payload => {
  return {
    type: DEL_DN_CART,
    payload,
  }
}

// 點餐改收藏
export const addloveDnCart = payload => {
  return {
    type: ADD_LOVE_DN_CART,
    payload,
  }
}

// 新增餐廳評論
export const addResComment = payload => {
  return {
    type: ADD_RES_COMMENT,
    payload,
  }
}

// 點擊喜歡或討厭餐廳評論
export const clickResComment = payload => {
  return {
    type: CLICK_RES_COMMENT,
    payload,
  }
}

// 讀取餐廳評論
export const readResComment = payload => {
  return {
    type: READ_RES_COMMENT,
    payload,
  }
}

// 新增菜色評論
export const addDnComment = payload => {
  return {
    type: ADD_DN_COMMENT,
    payload,
  }
}

// 讀取菜色評論
export const readDnComment = payload => {
  return {
    type: READ_DN_COMMENT,
    payload,
  }
}

// 看更多餐廳評論
export const clickReadMore = payload => {
  return {
    type: READ_MORE_COMMENT,
    payload,
  }
}

// 處理 RWD 地圖顯示或隱藏
export const handleMapDisplayAsync = (RWD, map_display) => {
  let payload = { RWD: RWD, map_display: map_display }

  return {
    type: HANDLE_MAP_DISPLAY,
    payload,
  }
}

export const loadRestaurantAsync = (
  lat,
  lng,
  distance,
  w,
  cookday,
  foodclass,
  cooktype,
  number1,
  number2,
  vegetarian
) => {
  let params = {
    lat: lat,
    lng: lng,
    distance: distance,
    w: w,
    cookday: cookday,
    foodclass: foodclass,
    cooktype: cooktype,
    number1: number1,
    number2: number2,
    vegetarian: vegetarian,
  }

  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/restaurants/`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = {
        data: data[0],
        weekday: w,
        cookday: cookday,
        NUMBER: data[1].NUMBER,
        foodclass: foodclass,
        cooktype: cooktype,
        number1: number1,
        number2: number2,
        vegetarian: vegetarian,
      }

      dispatch(loadOpenRestaurant(payload))

      console.log('loading AllRes data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadRestaurantForCookAsync = (
  lat,
  lng,
  distance,
  w,
  number,
  name,
  foodclass,
  cooktype,
  number1,
  number2,
  vegetarian
) => {
  let params = {
    lat: lat,
    lng: lng,
    distance: distance,
    w: w,
    cookday: number,
    name: name,
    foodclass: foodclass,
    cooktype: cooktype,
    number1: number1,
    number2: number2,
    vegetarian: vegetarian,
  }

  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/restaurants/n`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      // console.log(data)
      // console.log(w)
      // console.log('number' + number)
      // console.log('name' + name)
      // console.log(foodclass)
      // console.log(cooktype)

      const payload = {
        data: data[0],
        weekday: w,
        cookday: number,
        oldName: name,
        pro_name: data[1].name,
        NUMBER: data[2].NUMBER,
        foodclass: foodclass,
        cooktype: cooktype,
      }
      console.log(payload)

      dispatch(test(payload))

      // const payload = { data }

      // dispatch(loadRestaurant(payload))

      console.log('loading ResforCook data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadSingleRestaurantAsync = (
  id,
  name,
  customer_id,
  small_cat,
  veg_type,
  flavor,
  tag_id
) => {
  let params = {
    res_id: id,
    name: name,
    customer_id: customer_id,
    small_cat: small_cat,
    veg_type: veg_type,
    flavor: flavor,
    tag_id: tag_id,
  }
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/restaurants/r`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = {
        data,
        restaurant_id: id,
        oldName: name,
        small_cat: small_cat,
        veg_type: veg_type,
        flavor: flavor,
        tag_id: tag_id,
      }

      dispatch(loadSingleRestaurant(payload))

      console.log('loading single restaurant data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadSingleDinnerAsync = (
  res_id,
  name = 0,
  dinner_id,
  from_dn_list,
  customer_id,
  addlove
) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/d/${res_id}/${name}/${dinner_id}`,
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

      const payload = { data, oldName: name }

      // console.log(data)
      dispatch(loadSingleDinner(payload))

      console.log(data)
      if (
        (from_dn_list && data[0].dinner_id) ||
        (from_dn_list && data[0].dinner_id && addlove)
      ) {
        console.log('hey')
        let show_word = ''
        if (addlove) {
          show_word = '收藏成功'
        } else {
          show_word = '點餐成功'
        }
        dispatch(
          handleAddCartsBeforeBookAsync(
            customer_id,
            res_id,
            dinner_id,
            data[5].class_sid,
            data[6].sid,
            '無',
            data[0].spicy,
            1,
            () => {
              swal({
                icon: 'success',
                title: show_word,
                timer: 2000,
              })
            },
            addlove
          )
        )
      }

      console.log('loading dinner data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const handleClickAsync = (
  res_id,
  name,
  dinner_id,
  class_sid,
  newName
) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/d/${res_id}/${name}/${dinner_id}/${class_sid}`,
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

      console.log(data)

      const payload = { data, class_sid: class_sid, newName: newName }
      // console.log(data)
      dispatch(loadSingleDinnerAfterClick(payload))

      console.log('loading dinner data after change product class')
    } catch (e) {
      console.log(e)
    }
  }
}

export const handleProductClickAsync = (sid, product, name) => {
  try {
    const payload = { sid: sid, newName: name, newProduct: product }

    return {
      type: HANDLE_CLICK_FARMER_PRODUCT,
      payload,
    }
  } catch (e) {
    console.log(e)
  }
}

export const handleSpecialClickAsync = inputTEXT => {
  try {
    const payload = inputTEXT

    return {
      type: HANDLE_CLICK_SPECIAL,
      payload,
    }
  } catch (e) {
    console.log(e)
  }
}

export const handleSpicyClickAsync = spicy => {
  try {
    const payload = spicy

    return {
      type: HANDLE_CLICK_SPICY,
      payload,
    }
  } catch (e) {
    console.log(e)
  }
}

// 菜色加入購物車（點餐中）
export const handleAddCartsBeforeBookAsync = (
  customer_id,
  res_id,
  dinner_id,
  class_sid,
  sid,
  inputTEXT,
  spicy,
  quantity,
  callback,
  addlove
) => {
  let params = {
    customer_id: customer_id,
    res_id: res_id,
    dinner_id: dinner_id,
    class_sid: class_sid,
    sid: sid,
    inputTEXT: inputTEXT,
    spicy: spicy,
    quantity: quantity,
    addlove: addlove,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        'http://localhost:6003/api/restaurants/addcart',
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      console.log(payload)

      if (payload.affectedRows) {
        dispatch(loadSingleRestaurantAsync(res_id, 0, customer_id))
        dispatch(readCartsBeforeBookAsync(customer_id))
        callback()
      }

      dispatch(addDnCart(payload))

      console.log('post data to dn_cart')
    } catch (e) {
      console.log(e)
    }
  }
}

// 讀取購物車點餐中的菜色
export const readCartsBeforeBookAsync = customer_id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/readcart/${customer_id}`,
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

      const payload = data

      dispatch(readDnCart(payload))

      console.log('post data to dn_cart')
    } catch (e) {
      console.log(e)
    }
  }
}

// 勾選要 批次預約 的點餐中菜色
export const handleCheckAsync = sidAr => {
  try {
    const payload = sidAr

    return {
      type: HANDLE_CHECK_DN,
      payload,
    }
  } catch (e) {
    console.log(e)
  }
}

// 刪除某筆點餐
export const handleCancelClickAsync = (customer_id, sidAr) => {
  let params = {
    customer_id: customer_id,
    sidAr: sidAr,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/deletecart`,
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      dispatch(deleteDnCart(payload))

      console.log('delete data from dn_cart')
    } catch (e) {
      console.log(e)
    }
  }
}

// 單筆點餐加入收藏
export const handleLoveClickAsync = (customer_id, sidAr, callback) => {
  let params = {
    customer_id: customer_id,
    sidAr: sidAr,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/addlovecart`,
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      console.log(payload)

      if (payload.affectedRows) {
        callback()
      }

      dispatch(addloveDnCart(payload))

      console.log('love data in dn_cart')
    } catch (e) {
      console.log(e)
    }
  }
}

// 新增餐廳評論
export const handleResInputChangeAsync = (
  customer_id,
  res_id,
  stars,
  comment,
  callback
) => {
  let params = {
    customer_id: customer_id,
    res_id: res_id,
    stars: stars,
    comment: comment,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/addResComment`,
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      console.log(payload)

      if (payload.affectedRows) {
        callback()
      }

      dispatch(addResComment(payload))

      console.log('add restaurant comment')
    } catch (e) {
      console.log(e)
    }
  }
}

// 點擊喜歡或討厭餐廳評論
export const clickLikeOrNotAsync = (
  customer_id,
  res_comment_id,
  like_or_not,
  res_id,
  count
) => {
  let params = {
    customer_id: customer_id,
    res_comment_id: res_comment_id,
    like_or_not: like_or_not,
    res_id: res_id,
    count: count,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/clickResComment/${count}`,
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data, like_or_not: like_or_not, count: count }

      // console.log(payload)

      dispatch(clickResComment(payload))

      console.log('CLICK restaurant comment')
    } catch (e) {
      console.log(e)
    }
  }
}

// 讀取餐廳評論
export const readResCommentAsync = (res_id, customer_id, count) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/readResComment/${res_id}/${customer_id}/${count}`,
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

      const payload = { data, count: count }

      console.log(payload)

      dispatch(readResComment(payload))

      console.log('read restaurant comment')
    } catch (e) {
      console.log(e)
    }
  }
}

// 新增菜色評論
export const handleDinnerInputChangeAsync = (
  customer_id,
  dinner_id,
  stars,
  comment,
  callback
) => {
  let params = {
    customer_id: customer_id,
    dinner_id: dinner_id,
    stars: stars,
    comment: comment,
  }

  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/addDnComment`,
        {
          method: 'POST',
          body: JSON.stringify(params),
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )
      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      // console.log(payload)

      if (payload.affectedRows) {
        callback()
      }

      dispatch(addDnComment(payload))

      console.log('add DINNER comment')
    } catch (e) {
      console.log(e)
    }
  }
}

// 讀取菜色評論
export const readDinnerCommentAsync = (dinner_id, customer_id) => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/readDnComment/${dinner_id}/${customer_id}`,
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

      const payload = data

      console.log(payload)

      dispatch(readDnComment(payload))

      console.log('read DINNER comment')
    } catch (e) {
      console.log(e)
    }
  }
}

// 處理地圖搜尋
export const handleMapSearchAsync = inputTEXT => {
  try {
    const payload = inputTEXT

    return {
      type: HANDLE_MAP_SEARCH,
      payload,
    }
  } catch (e) {
    console.log(e)
  }
}

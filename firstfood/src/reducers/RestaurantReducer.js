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
  ADD_RES_COMMENT,
  READ_RES_COMMENT,
  CLICK_RES_COMMENT,
  HANDLE_MAP_SEARCH,
  READ_MORE_COMMENT,
  SET_DISTANCE,
  SET_CENTER,
} from '../action/actionType'

const initialState = {
  data: [],
  sd_data: [],
  comment_data: [],
  dn_cart_data: [],
  center: { lat: 0, lng: 0 },
  distance: 0.1,
  clickResComment: 0,
  comment_num: 0,
  weekday: 8,
  cookday: 8,
  NUMBER: 0,
  foodclass: 0,
  cooktype: 0,
  oldName: 0,
  pro_name: '',
  number1: -1,
  vegetarian: '',
  small_cat: '',
  veg_type: '',
  flavor: '',
  tag_id: 0,
  newName: '',
  class_sid: 0,
  newProduct: '',
  sid: 0,
  inputTEXT: '無',
  spicy: 0,
  quantity: 1,
  book: {},
  cancel: [],
  hasRestaurant: '',
  count: 1,
  dn_cart_number: 0,
}

function RestaurantReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CENTER:
      return { ...state, center: action.payload }
    case SET_DISTANCE:
      return { ...state, distance: action.payload }
    case LOAD_RESTAURANT:
      return action.payload
    case LOAD_OPEN_RESTAURANT:
      console.log('LOAD_OPEN')
      // console.log(state)
      console.log(action.payload)

      if (action.payload.oldName) {
        return action.payload
      }
      action.payload.data = action.payload.data.filter(el => {
        if (el.holiday !== action.payload.weekday) {
          return el
        }
      })
      return {
        ...state,
        data: action.payload.data,
        weekday: action.payload.weekday,
        cookday: action.payload.cookday,
        NUMBER: action.payload.NUMBER,
        foodclass: action.payload.foodclass,
        cooktype: action.payload.cooktype,
        number1: action.payload.number1,
        number2: action.payload.number2,
        vegetarian: action.payload.vegetarian,
        oldName: 0,
        pro_name: '',
      }
    case TEST:
      console.log('TEST')
      // console.log(state)
      console.log(action.payload)
      // let newTEST = {}
      action.payload.data = action.payload.data.filter(el => {
        if (el.holiday !== action.payload.weekday) {
          return el
        }
      })
      action.payload.data = action.payload.data.filter(el => {
        if (
          el.cooktime === action.payload.cookday ||
          action.payload.cookday === 8
        ) {
          return el
        }
      })
      // console.log(newTEST)
      return {
        ...state,
        data: action.payload.data,
        NUMBER: action.payload.NUMBER,
        weekday: action.payload.weekday,
        cookday: action.payload.cookday,
        oldName: action.payload.oldName,
        pro_name: action.payload.pro_name,
        foodclass: action.payload.foodclass,
        cooktype: action.payload.cooktype,
      }
    case LOAD_SINGLE_RESTAURANT:
      // console.log(state)
      return {
        ...state,
        data: action.payload.data,
        oldName: action.payload.oldName,
        small_cat: action.payload.small_cat,
        veg_type: action.payload.veg_type,
        flavor: action.payload.flavor,
        tag_id: action.payload.tag_id,
      }
    case LOAD_SINGLE_DINNER:
      console.log(action.payload)
      return {
        ...state,
        sd_data: action.payload.data,
        oldName: action.payload.oldName,
      }
    case HANDLE_CLICK_PRODUCT_CLASS:
      return {
        ...state,
        sd_data: action.payload.data,
        class_sid: action.payload.class_sid,
        newName: action.payload.newName,
      }
    case HANDLE_CLICK_FARMER_PRODUCT:
      return {
        ...state,
        sid: action.payload.sid,
        newProduct: action.payload.newProduct,
      }
    case HANDLE_CLICK_SPECIAL:
      return {
        ...state,
        inputTEXT: action.payload,
      }
    case HANDLE_CLICK_SPICY:
      return {
        ...state,
        spicy: action.payload,
      }
    case READ_DN_CART:
      action.payload.data = action.payload.data.map(el => {
        el = { ...el, isSelected: false }
        return el
      })
      return {
        ...state,
        dn_cart_data: action.payload.data,
        dn_cart_number: action.payload.number,
      }
    case HANDLE_CHECK_DN:
      return {
        ...state,
        book: action.payload,
      }
    case DEL_DN_CART:
      return {
        ...state,
        dn_cart_data: action.payload.data,
        affectedRows: action.payload.affectedRows,
      }
    case ADD_LOVE_DN_CART:
      return {
        ...state,
        dn_cart_data: action.payload.data,
        affectedRows: action.payload.affectedRows,
      }
    case ADD_RES_COMMENT:
      return {
        ...state,
        affectedRows: action.payload.affectedRows,
      }
    case CLICK_RES_COMMENT:
      return {
        ...state,
        clickResComment: action.payload.like_or_not,
        comment_data: action.payload.data,
        count: action.payload.count,
      }
    case READ_RES_COMMENT:
      return {
        ...state,
        comment_data: action.payload.data,
        affectedRows: 0,
      }
    case READ_MORE_COMMENT:
      return {
        ...state,
        count: action.payload,
      }
    case HANDLE_MAP_SEARCH:
      return {
        ...state,
        hasRestaurant: action.payload,
      }
    default:
      return state
  }
}
export default RestaurantReducer

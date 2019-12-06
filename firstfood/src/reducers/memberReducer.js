import { GET_SINGLE_MEMBER_DATA } from '../action/actionType'

const initialState = {
  memberData: [],
  coupon: [],
  address: [],
  upload: '',
  farmerProduct: [],
  courses: [],
  dinnerProduct: [],
  gameUser: [],
}

const newAddress = {}

const memberReducer = (state = initialState, action) => {
  // console.log('memberReducer')
  switch (action.type) {
    case GET_SINGLE_MEMBER_DATA:
      return {
        ...state,
        memberData: action.payload,
      }
    case 'UPDATE_MEMBER_DATA':
      return {
        ...state,
        memberData: action.payload,
      }
    case 'MEMBER_CHANGE_TEXT':
      // console.log(state, action.payload)
      return { ...state, memberData: action.payload }
    case 'GET_COUPON':
      return {
        ...state,
        coupon: action.payload,
      }
    case 'GET_ADDRESS':
      return {
        ...state,
        address: action.payload,
      }
    case 'CHANGE_ADDRESS_TEXT':
      return {
        ...state,
        address: action.payload,
      }
    case 'DELETE_ADDRESS':
      return {
        ...state,
      }
    case 'ADD_ADDRESS':
      return {
        ...state,
        address: [...state.address, newAddress],
      }
    case 'EARN_COUPON':
      return {
        ...state,
      }
    case 'GET_MEMBER_COLLECTION':
      return {
        ...state,
      }
    case 'LOAD_MEMBER_PRODUCT':
      // console.log(action.payload)
      // let farmerProductArray = state.farmerProduct.push(action.payload)
      // console.log(farmerProductArray)
      return {
        ...state,
        farmerProduct: [...state.farmerProduct, action.payload],
      }
    case 'GET_COURSE_COLLECTION':
      return {
        ...state,
      }
    case 'LOAD_COURSE_PRODUCT':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      }
    case 'GET_DINNER_COLLECTION':
      return {
        ...state,
      }
    case 'LOAD_DINNER_PRODUCT':
      return {
        ...state,
        dinnerProduct: action.payload,
      }
    case 'CLEAR_EXCEPT_DINNER':
      return {
        ...state,
        farmerProduct: [],
        courses: [],
      }
    case 'CLEAR_EXCEPT_FARMER':
      return {
        ...state,
        courses: [],
        dinnerProduct: [],
      }
    case 'CLEAR_EXCEPT_COURSES':
      return {
        ...state,
        farmerProduct: [],
        dinnerProduct: [],
      }
    case 'GET_GAME_USER_INFO':
      return {
        ...state,
        gameUser: action.payload,
      }
    case 'UPGRADE_GAME_USER_HP':
      return {
        ...state,
      }
    case 'UPGRADE_GAME_POINT':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default memberReducer

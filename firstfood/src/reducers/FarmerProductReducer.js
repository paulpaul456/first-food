import {
  LOAD_PRODUCT,
  ADD_LOVE,
  ADD_CART,
  REMOVE_LOVE,
  REMOVE_FMCART,
  LOAD_PRODUCTBYCUS,
  LOAD_COMMENTBYID,
  LOAD_ALL_FMGOODS,
  LOAD_FARIDPRODUCT,
  LOAD_HOTTFAPRODUCT,
} from '../action/actionType'

const initialState = {
  fmdata: [],
  fmiddata: [],
  howManyItem: 1,
}

function FarmerProductReducer(state = initialState, action) {
  switch (action.type) {
    // case 'ADD_FARMERPRODUCT':
    //   return [action.payload, ...state]
    // case 'DEL_FARMERPRODUCT':
    //   return state.filter(item => item.id !== action.payload.id)
    case LOAD_PRODUCT:
      // console.log(action.payload)
      // const newFmdata = action.payload.data.filter( )
      return { ...state, fmdata: action.payload.data }
    case LOAD_FARIDPRODUCT:
      // console.log(action.payload)
      return { ...state, fmiddata: action.payload.data }
    case LOAD_HOTTFAPRODUCT:
      // console.log(action.payload)
      return { ...state, hotdata: action.payload.data }
    // case LOAD_PRODUCTBYCUS:
    //   // console.log(action.payload)
    //   return { ...state, data: action.payload.data }
    // case LOAD_COMMENTBYID:
    //   // console.log(action.payload)
    //   return { ...state, data: action.payload.data }
    case ADD_LOVE:
      // console.log(action.payload)
      return { ...state, fmdata: action.payload.data }
    case ADD_CART:
      // console.log(action.payload)
      return { ...state, fmdata: action.payload.data }
    case REMOVE_LOVE:
      // console.log(action.payload)
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
      console.log(action.payload)
      return { ...state, fmdata: action.payload }
    case REMOVE_FMCART:
      return { ...state, fmdata: action.payload }
    case 'ADD_OR_MINES':
      return {
        ...state,
        howManyItem: action.payload,
      }
    //   case LOAD_ALL_FMGOODS:
    //   // console.log(action.payload)
    // return {...state, fmALLdata: action.payload.data}
    default:
      return state
  }
}
export default FarmerProductReducer

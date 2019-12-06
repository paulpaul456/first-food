import { LOAD_CID_CART_NUM, } from '../action/actionType'

const initialState = {
    belldata: [],
 
}

function bellsReducer(state = initialState, action) {
  switch (action.type) {
    // case 'ADD_FARMERPRODUCT':
    //   return [action.payload, ...state]
    // case 'DEL_FARMERPRODUCT':
    //   return state.filter(item => item.id !== action.payload.id)
    case LOAD_CID_CART_NUM:
      console.log('action.payload')
      console.log(action.payload)
    return {...state, belldata: action.payload}
    default:
      return state
  }
}
export default bellsReducer

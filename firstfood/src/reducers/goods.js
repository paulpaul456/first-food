import { ADD_LOVE,LOAD_ALL_FMGOODS,ALL_SELECT_BYMONEYFM,LOAD_ORDERMEM,LOAD_FM_CLASS_RECOMMEND, } from '../action/actionType'

const initialState = {
  ordermemdata: [],
 
}

function GoodsFmReducer(state = initialState, action) {
  switch (action.type) {
    // case 'ADD_FARMERPRODUCT':
    //   return [action.payload, ...state]
    // case 'DEL_FARMERPRODUCT':
    //   return state.filter(item => item.id !== action.payload.id)
    case LOAD_ORDERMEM:
      // console.log(action.payload)
    return {...state, ordermemdata: action.payload.data}
    case LOAD_FM_CLASS_RECOMMEND:
      // console.log(action.payload)
    return {...state, recommendfmdata: action.payload.data}
    case ALL_SELECT_BYMONEYFM:
      // console.log(action.payload)
    return {...state, data: action.payload.data}
    // case LOAD_ALL_FMGOODS:
    //   // console.log(action.payload)
    // return {...state, fmALLdata: action.payload.data}
    default:
      return state
  }
}
export default GoodsFmReducer

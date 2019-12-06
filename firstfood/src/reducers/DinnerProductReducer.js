import {
  LOAD_DINNER,
  LOAD_MAIN_DINNER,
  PREV_PATH,
  ADD_DN_COMMENT,
  READ_DN_COMMENT,
  HANDLE_MAP_DISPLAY,
} from '../action/actionType'

const initialState = {
  prevpath: '',
  comment_data: [],
  RWD: false,
  map_display: true,
}

function DinnerProductReducer(state = initialState, action) {
  //   console.log('DinnerProductReducer', action)
  switch (action.type) {
    case LOAD_DINNER:
      return action.payload
    case LOAD_MAIN_DINNER:
      return action.payload
    case PREV_PATH:
      return {
        ...state,
        prevpath: action.prevpath,
      }
    case ADD_DN_COMMENT:
      return {
        ...state,
        affectedRows: action.payload.affectedRows,
      }
    case READ_DN_COMMENT:
      return {
        ...state,
        comment_data: action.payload,
      }
    case HANDLE_MAP_DISPLAY:
      return {
        ...state,
        RWD: action.payload.RWD,
        map_display: action.payload.map_display,
      }
    default:
      return state
  }
}

export default DinnerProductReducer

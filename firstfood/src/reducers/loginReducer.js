import { CHECK_LOGIN, IS_LOGIN, SHOW_ERROR } from '../action/actionType'

const initialState = {
  member: [],
  isLogin: false,
  // showError: 'none',
  showError: true,
  isLogginActive: false,
  showLoginBox: 'none',
  prevpath: '',
  message: '',
  cart: 0,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      return {
        ...state,
        member: action.payload,
        accountLog: true,
      }
    case IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      }
    case 'MEMBER_LOGOUT':
      return {
        ...state,
        isLogin: false,
        member: [],
      }
    case SHOW_ERROR:
      return {
        ...state,
        showError: false,
      }
    case 'CLOSE_ERROR':
      return {
        ...state,
        showError: true,
      }
    case 'CHANGE_MEMBER_TEXT':
      return {
        ...state,
        member: action.payload,
      }
    case 'MEMBER_REGISTER':
      return {
        ...state,
        message: action.payload,
      }
    case 'SHOW_LOGIN_BOX':
      return {
        ...state,
        showLoginBox: 'block',
      }
    case 'CLOSE_LOGIN_BOX':
      return {
        ...state,
        showLoginBox: 'none',
      }
    case 'INITIAL_MEMBER_CHECK':
      return {
        ...state,
        member: action.payload,
      }
    case 'RE_CHANGE_PASSWORD':
      state.member[0].password = action.payload
      return {
        ...state,
      }
    case 'UPLOAD_PHOTO':
      return {
        ...state,
        // memberData: state.memberData[0].my_file = action.payload,
        member: [
          {
            ...state.member[0],
            my_file: action.payload,
          },
        ],
      }
    case 'ADD_CART':
      return {
        ...state,
        cart: action.payload,
      }
    // case 'GET_GAME_USER_INFO':
    //   return {
    //     ...state,
    //   }
    // case 'APP_LOGIN':
    //   return {
    //     ...state,
    //     isLogginActive: action.payload,
    //   }
    // case 'APP_LOGOUT':
    //   return {
    //     ...state,
    //     isLogginActive: action.payload,
    //   }
    default:
      return state
  }
}

export default loginReducer

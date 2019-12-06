import {
  SCREEN_RESIZE,
  SCREEN_SCROLL,
  SET_ACTIVE_BREAKPOINT,
  MOBILE_SHOW_NAVS,
  RESTAURANT_SHOW_CALENDAR,
  ORDERLIST_SHOW_RESERVATION,
  RESERVATION_SHOW_CALENDAR,
  RESERVATION_SHOW_MAP,
} from '../action/actionType'
import { combineReducers } from 'redux'

const initialWindowState = {
  screenResize: typeof window === 'object' ? window.innerWidth : null,
  screenScroll: typeof window === 'object' ? window.scrollY : null,
  screenBreakpoint:
    typeof window === 'object' ? { name: 'default', size: null } : null,
}
const initialComponentState = {
  mobile: {
    Navs: { isShow: false },
  },
  web: {
    restaurant: {
      calendarIsShow: true,
    },
    orderList: {
      reservationIsShow: false,
    },
    reservation: {
      calendarIsShow: false,
      mapIsShow: false,
    },
  },
}

// window
const windowUi = (state = initialWindowState, action) => {
  switch (action.type) {
    case SCREEN_SCROLL:
      return { ...state, screenScroll: action.payload }
    case SCREEN_RESIZE:
      return { ...state, screenResize: action.payload }
    case SET_ACTIVE_BREAKPOINT:
      return {
        ...state,
        screenBreakpoint: {
          name: action.breakpointName,
          size: action.breakpointSize,
        },
      }
    default:
      return state
  }
}

// component
const componentUi = (state = initialComponentState, action) => {
  switch (action.type) {
    case MOBILE_SHOW_NAVS:
      return { ...state, mobile: mobileUi(state.mobile, action) }
    case RESTAURANT_SHOW_CALENDAR:
    case ORDERLIST_SHOW_RESERVATION:
    case RESERVATION_SHOW_CALENDAR:
    case RESERVATION_SHOW_MAP:
      return { ...state, web: webUi(state.web, action) }
    default:
      return state
  }
}
//// web
const webUi = (state = initialComponentState.web, action) => {
  switch (action.type) {
    case RESTAURANT_SHOW_CALENDAR:
    case RESERVATION_SHOW_CALENDAR:
      return { ...state, [action.title]: { calendarIsShow: action.payload } }
    case RESERVATION_SHOW_MAP:
      return { ...state, [action.title]: { mapIsShow: action.payload } }
    case ORDERLIST_SHOW_RESERVATION:
      return { ...state, [action.title]: { reservationIsShow: action.payload } }
    default:
      return state
  }
}
//// mobile
const mobileUi = (state = initialComponentState.mobile, action) => {
  switch (action.type) {
    case MOBILE_SHOW_NAVS:
      return { ...state, [action.title]: { isShow: action.payload } }
    default:
      return state
  }
}
export default combineReducers({
  windowUi,
  componentUi,
})

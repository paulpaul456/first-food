import { SCREEN_RESIZE, SCREEN_SCROLL, SET_ACTIVE_BREAKPOINT,
  MOBILE_SHOW_NAVS, RESTAURANT_SHOW_CALENDAR,ORDERLIST_SHOW_RESERVATION,
  RESERVATION_SHOW_CALENDAR,RESERVATION_SHOW_MAP } from '../actionType'

// Action Creators
export const screenResize = payload => ({
  type: SCREEN_RESIZE,
  payload,
})

export const screenScroll = payload => ({
  type: SCREEN_SCROLL,
  payload,
})

/*
* @param {string} breakpointName
* @param {number} breakpointSize
* @return {Object} Action object
*/
export const setActiveBreakpoint = (breakpointName, breakpointSize) => ({
  type: SET_ACTIVE_BREAKPOINT,
  breakpointName,
  breakpointSize,
})
//  component - action
//// mobile
export const mobileShowNavs = payload => ({
  type: MOBILE_SHOW_NAVS,
  title: 'Navs',
  payload,
})
//// web
export const restaurantShowCalendar = payload => ({
  type: RESTAURANT_SHOW_CALENDAR,
  title: 'restaurant',
  payload,
})
export const orderListShowReservation = payload => ({
  type: ORDERLIST_SHOW_RESERVATION,
  title: 'orderList',
  payload,
})
export const reservationShowCalendar = payload => ({
  type: RESERVATION_SHOW_CALENDAR,
  title: 'reservation',
  payload,
})
export const reservationShowMap = payload => ({
  type: RESERVATION_SHOW_MAP,
  title: 'reservation',
  payload,
})

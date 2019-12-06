import {
  SHOW_ALL,
  SELECT_TITLE,
  SELECT_SUBTITLE,
  SET_AREA_FILTER,
  SET_DATE_FILTER,
} from '../action/actionType'
import { combineReducers } from 'redux'

const selectedTitle = (state = 'home', action) => {
  switch (action.type) {
    case SELECT_TITLE:
      return action.payload
    default:
      return state
  }
}
const initialCourse = {
  areaFilter: SHOW_ALL,
  dateFilter: SHOW_ALL,
  selectedSubTitle: 'dinner',
}
const courses = (state = initialCourse, action) => {
  switch (action.type) {
    case SET_AREA_FILTER:
      return {
        ...state,
        areaFilter: action.payload,
      }
    case SET_DATE_FILTER:
      return {
        ...state,
        dateFilter: action.payload,
      }
    case SELECT_SUBTITLE:
      return {
        ...state,
        selectedSubTitle: action.payload,
      }
    default:
      return state
  }
}

export default combineReducers({
  selectedTitle: selectedTitle,
  courses: courses,
})

import { combineReducers } from 'redux'
import {
  ADD_TODO,
  DEL_TODO,
  LOAD_TODO,
  LOAD_PRODUCT,
} from '../action/actionType'

import DomainData from './domainData'
import AppState from './appState'
import Ui from './ui'

import FarmerProductReducer from './FarmerProductReducer'
import memberReducer from './memberReducer'
import loginReducer from './loginReducer'
import forumReducer from './forumReducer'
import RestaurantReducer from './RestaurantReducer'
import DinnerProductReducer from './DinnerProductReducer'
import buyinfor from './cartReducers/buyinforreducers'
import car from './cartReducers/car'
import course from './cartReducers/coursereducers'
import dn from './cartReducers/dnreducers'
import cartcoupon from './cartReducers/couponreducers'
import GoodsFmReducer from './goods'
import bells from './bells'
// action
// {type: 'ADD_TODO', payload: {id, title} }
// ADD_TODO
// DEL_TODO
// UPDATE_TODO
//

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state]
    case DEL_TODO:
      return state.filter(item => item.id !== action.payload.id)
    case LOAD_TODO:
      return action.payload.data
    // case LOAD_PRODUCT:
    //   return action.payload
    default:
      return state
  }
}

export default combineReducers({
  domainData: DomainData,
  appState: AppState,
  ui: Ui,
  todos,
  FarmerProductReducer,
  memberReducer,
  loginReducer,
  forumReducer,
  RestaurantReducer,
  DinnerProductReducer,
  buyinfor,
  car,
  course,
  dn,
  cartcoupon,
  GoodsFmReducer,
  bells,
})

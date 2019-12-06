import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import './assets/scss/main/restaurantMain.scss'
import FirstFoodRoute from './route/FirstFoodRoute'
import TodoApp from './test/TodoApp'
import rootReducer from './reducers/index'
import {
  loadProductAsync,
  loadRestaurantAsync,
  initialMemberCheck,
  loadFmAllAsync,
} from './action/index'

// function createStore(reducer, preloadedState, enhancer) {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// store = {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}

// store.dispatch(loadRestaurantAsync())
// store.dispatch(loadRestaurantAsync())
// dispatch記得放
// store.dispatch(loadProductAsync(), loadRestaurantAsync())
// store.dispatch(loadRestaurantAsync())
// store.dispatch(loadProductAsync())

store.dispatch(initialMemberCheck())
// store.dispatch(loadFmAllAsync())

function App() {
  // console.log(store)
  return (
    <Provider store={store}>
      <FirstFoodRoute />
      {/*<TodoApp />*/}
    </Provider>
  )
}

export default App

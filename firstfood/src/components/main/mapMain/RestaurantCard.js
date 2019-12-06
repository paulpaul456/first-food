import React from 'react'
import { relative } from 'path'
import Littlecard from './Littlecard'

import { connect } from 'react-redux'

function RestaurantCard(props) {
  console.log(props)
  let data = props.restaurant
  console.log(props.hasRestaurant)
  let hide = props.hide
  if (data.length === 0) {
    hide = true
  } else {
    hide = false
  }

  let i = 0

  return (
    <>
      {hide || (props.search && props.hasRestaurant === '') ? (
        <div>
          <h1>餐廳招募中</h1>
          <img src="/assets/images/sorry3.svg" alt="" width="100%" />
        </div>
      ) : (
        data.map((val, index) => {
          {
            /* i++ */
          }

          return <Littlecard i={index + 1} oldName={props.oldName} handleCardHover={props.handleCardHover}/>
        })
      )}
    </>
  )
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  // console.log(store)
  if (store.RestaurantReducer.data.length > 0)
    return {
      restaurant: store.RestaurantReducer.data,
      number: store.RestaurantReducer.data.NUMBER,
      weekday: store.RestaurantReducer.weekday,
      isChecked: store.RestaurantReducer.isChecked,
      oldName: store.RestaurantReducer.oldName,
      hasRestaurant: store.RestaurantReducer.hasRestaurant,
    }
  return {
    restaurant: [],
  }
}
export default connect(mapStateToProps)(RestaurantCard)

import React, { useEffect, useState } from 'react'

import ReactLoading from 'react-loading'

import Section1 from '../components/main/dinnerMain/Section1'
import Section2 from '../components/main/dinnerMain/Section2'
import Section3 from '../components/main/dinnerMain/Section3'

import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

import { connect } from 'react-redux'
import { loadSingleDinnerAsync, handleClickAsync } from '../action/index'

class Dinner extends React.Component {
  componentDidMount() {
    // console.log(this.props)
    let restaurant_id = this.props.match.params.id
    let dinner_id = this.props.match.params.dinner_id
    let name = this.props.match.params.name
    let class_sid = this.props.class_sid
    let newName = this.props.newName
    if (class_sid) {
      console.log('換食材後讀菜色資料')
      console.log(class_sid)
      // this.props.dispatch(
      //   handleClickAsync(restaurant_id, name, dinner_id, class_sid, newName)
      // )
    } else {
      console.log('讀預設菜色資料')
      this.props.dispatch(loadSingleDinnerAsync(restaurant_id, name, dinner_id))
    }
  }

  render() {
    // console.log(this.props)
    // console.log('render')
    if (this.props.restaurant.length === 0) {
      return <ReactLoading type={'balls'} color="#000" />
    }

    return (
      <>
        <div id="wrapper" className="position-relative">
          <div className="container">
            <Header />
            <Navbars />
          </div>
          <Section1 />
          <Section2 />
          <Section3 />
          <div className="container">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

// 綁定 props <=> store
const mapStateToProps = store => {
  if (!store.RestaurantReducer.sd_data) return {}
  if (store.RestaurantReducer.class_sid) {
    return {
      restaurant: store.RestaurantReducer.sd_data,
      newName: store.RestaurantReducer.newName,
      class_sid: store.RestaurantReducer.class_sid,
    }
  }
  return {
    restaurant: store.RestaurantReducer.sd_data,
  }
}
export default connect(mapStateToProps)(Dinner)

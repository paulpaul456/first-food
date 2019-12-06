import React, { useEffect, useState } from 'react'

import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

import Section1 from '../components/main/restaurantMain/Section1'
import Section2 from '../components/main/restaurantMain/Section2'
import Section3 from '../components/main/restaurantMain/Section3'

import { connect } from 'react-redux'
import { loadSingleRestaurantAsync } from '../action/index'

class Restaurant extends React.Component {
  componentDidMount() {
    let name = Number(this.props.oldName)
    if (!name) {
      name = 0
    }
    console.log('test')
    let id = Number(this.props.match.params.id)
    this.props.dispatch(loadSingleRestaurantAsync(id, name))
  }


  render() {
    console.log(this.props)
    console.log('render')

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
  if (store.RestaurantReducer.data.length === 0) {
    return {}
  }
  return {
    restaurant: store.RestaurantReducer.data,
    oldName: store.RestaurantReducer.oldName,
    cooktype: store.RestaurantReducer.cooktype,
  }
}
export default connect(mapStateToProps)(Restaurant)

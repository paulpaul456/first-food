import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

import HeaderFooter from './container/HeaderFooter'

import { connect } from 'react-redux'
import { loadSingleDinnerAsync, handleClickAsync } from '../action/index'

import ChangeProductClass from '../components/main/ChooseMain/ChangeProductClass'
import ChangeFarmerProduct from '../components/main/ChooseMain/ChangeFarmerProduct'
import SpecialRequest from '../components/main/ChooseMain/SpecialRequest'
import ChangeSpicy from '../components/main/ChooseMain/ChangeSpicy'

let change = {
  changeProductClass: '選擇食材',
  changeFarmerProduct: '選擇商品',
  specialResquest: '特殊要求',
  changeSpicy: '調整辣度',
}

class Choose extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 400)
    // console.log(this.props)
    let restaurant_id = this.props.match.params.restaurant_id
    let dinner_id = this.props.match.params.dinner_id
    let name = this.props.match.params.name
    let class_sid = this.props.class_sid
    let newName = this.props.newName
    if (class_sid) {
      console.log('換食材後讀菜色資料')
      // console.log(class_sid)
      this.props.dispatch(
        handleClickAsync(restaurant_id, name, dinner_id, class_sid, newName)
      )
    } else {
      console.log('讀預設菜色資料')
      this.props.dispatch(loadSingleDinnerAsync(restaurant_id, name, dinner_id))
    }
  }

  render() {
    let choose = this.props.match.params.choose
    let row = []

    if (!this.props.product_class) return <></>

    // 切換客製化頁面
    if (choose === 'changeProductClass') {
      row = this.props.product_class
      return (
        <>
          <div id="wrapper" className="position-relative">
            <div className="container">
              <Header />
              <Navbars />
            </div>
            <div style={{ margin: '150px 0 0 0'}}>
            <ChangeProductClass row={row} />
            </div>
            <div className="container">
              <Footer />
            </div>
          </div>
        </>
      )
    } else if (choose === 'changeFarmerProduct') {
      row = this.props.farmer_product
      return (
        <>
          <div id="wrapper" className="position-relative">
            <div className="container">
              <Header />
              <Navbars />
            </div>
            <div style={{ margin: '150px 0 0 0'}}>
            <ChangeFarmerProduct row={row} />
            </div>
            <div className="container">
              <Footer />
            </div>
          </div>
        </>
      )
    } else if (choose === 'specialResquest') {
      return (
        <>
          <div id="wrapper" className="position-relative">
            <div className="container">
              <Header />
              <Navbars />
            </div>
            <div style={{ margin: '150px 0 0 0'}}>
              <SpecialRequest />
            </div>
            <div className="container">
              <Footer />
            </div>
          </div>
        </>
      )
    } else if (choose === 'changeSpicy') {
      return (
        <>
          <div id="wrapper" className="position-relative">
            <div className="container">
              <Header />
              <Navbars />
            </div>
            <div style={{ margin: '150px 0 0 0' }}>
              <ChangeSpicy />
            </div>
            <div className="container">
              <Footer />
            </div>
          </div>
        </>
      )
    }
  }
}

// export default Choose

// 綁定 props <=> store
const mapStateToProps = store => {
  if (!store.RestaurantReducer.sd_data) return {}

  if (store.RestaurantReducer.class_sid) {
    return {
      dinner: store.RestaurantReducer.sd_data[0],
      product_class: store.RestaurantReducer.sd_data[1],
      farmer_product: store.RestaurantReducer.sd_data[2],
      restaurant: store.RestaurantReducer.sd_data[3],
      All_product_class: store.RestaurantReducer.sd_data[4],
      class_sid: store.RestaurantReducer.class_sid,
      newName: store.RestaurantReducer.newName,
    }
  }

  return {
    dinner: store.RestaurantReducer.sd_data[0],
    product_class: store.RestaurantReducer.sd_data[1],
    farmer_product: store.RestaurantReducer.sd_data[2],
    restaurant: store.RestaurantReducer.sd_data[3],
    All_product_class: store.RestaurantReducer.sd_data[4],
  }
}
export default connect(mapStateToProps)(Choose)

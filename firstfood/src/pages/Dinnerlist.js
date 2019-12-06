import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import DinnerNav from '../components/main/dinnerMain/DinnerNav'

import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import HeaderFooter from './container/HeaderFooter'

import { connect } from 'react-redux'
import {
  loadSingleRestaurantAsync,
  loadMainDinnerAsync,
  loadSingleDinnerAsync,
  handleAddCartsBeforeBookAsync,
  showLoginBox,
  prev_pathAsync,
} from '../action/index'

import '../assets/scss/main/dinner/dinner_list.scss'

import swal from '@sweetalert/with-react'

let spicy = {
  1: '小辣',
  2: '中辣',
  3: '大辣',
  4: '特辣',
}

class Dinnerlist extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 400)
    let name = Number(this.props.oldName)
    if (!name) {
      name = 0
    }
    let from_dn_list = true
    console.log('test')
    let id = Number(this.props.match.params.id)
    let customer_id = this.props.customer_id
    this.props.dispatch(loadSingleRestaurantAsync(id, name, customer_id))
  }

  componentDidUpdate(prevProps) {
    let name = Number(this.props.oldName)
    if (!name) {
      name = 0
    }
    let id = Number(this.props.match.params.id)
    let customer_id = this.props.customer_id

    if (prevProps.customer_id !== this.props.customer_id) {
      this.props.dispatch(loadSingleRestaurantAsync(id, name, customer_id))
    }
  }

  spicyfunc = number => {
    var row = []
    for (var i = 1; i <= number; i++) {
      row.push(
        <img
          src="/assets/images/dinner/chili.png"
          alt=""
          width="30px"
          height="30px"
        />
      )
    }
    return row
  }

  //失敗的包成 promise
  // handleConciergeBellClick = dinner_id => () => {
  //   console.log('click' + dinner_id)

  //   return function(dispatch) {
  //     let name = 0
  //     let id = 40

  //     return dispatch(loadSingleDinnerAsync(id, name, dinner_id)).then(() => {
  //       console.log('then')
  //       Promise.all([console.log('then')])
  //     })
  //   }
  // }

  handleConciergeBellClick = (dinner_id, addlove) => () => {
    console.log('click' + dinner_id)
    let name = Number(this.props.oldName)
    if (!name) {
      name = 0
    }
    let id = Number(this.props.match.params.id)
    let customer_id = this.props.customer_id
    let from_dn_list = true

    if (customer_id) {
      if (addlove) {
        this.props.dispatch(
          loadSingleDinnerAsync(
            id,
            name,
            dinner_id,
            from_dn_list,
            customer_id,
            addlove
          )
        )
      } else {
        this.props.dispatch(
          loadSingleDinnerAsync(id, name, dinner_id, from_dn_list, customer_id)
        )
      }
    } else {
      swal({
        title: '請登入',
        icon: '/logo.png',
        buttons: true,
        dangerMode: true,
      }).then(willDelete => {
        if (willDelete) {
          // this.props.history.push('/')
          window.scrollTo(0, 0)
          // console.log(this.props.match.url)
          this.props.dispatch(showLoginBox())
          this.props.dispatch(prev_pathAsync(this.props.match.url))
        }
      })
      // let r = window.confirm('請登入')
      // if (r) {
      //   // this.props.history.push('/')
      //   window.scrollTo(0, 0)
      //   // console.log(this.props.match.url)
      //   this.props.dispatch(showLoginBox())
      //   this.props.dispatch(prev_pathAsync(this.props.match.url))
      // }
    }
  }

  render() {
    console.log(this.props)
    if (!this.props.dinners) {
      return <>資料載入中</>
    }
    if (this.props.dinners && this.props.dinners.length === 0)
      return (
        <>
          <div id="wrapper" className="position-relative">
            <div className="container">
              <Header />
              <Navbars />
            </div>
            <div className="container">
              <DinnerNav
                id={this.props.match.params.id}
                name={this.props.match.params.name}
              />
              <h1>菜色發想中</h1>
            </div>
            <div className="container">
              <Footer />
            </div>
          </div>
        </>
      )

    return (
      <>
        <div id="wrapper" className="position-relative">
          <div className="container">
            <Header />
            <Navbars />
          </div>

          <div className="my_dinner_list">
            <div className="container">
              <DinnerNav
                id={this.props.match.params.id}
                name={this.props.match.params.name}
              />
              <div className="d-flex justify-content-center">
                <div className="row justify-content-flex-start">
                  {this.props.dinners &&
                    this.props.dinners.map((item, index) => {
                      /* console.log(JSON.parse(item.dinner_image)) */
                      return (
                        <div key={item.sid} className="my_dinner_card">
                          <NavLink
                            key={item.dinner_id}
                            to={`/dinnerlist/${this.props.restaurant.restaurant_id}/${this.props.match.params.name}/${item.dinner_id}`}
                          >
                            <div className="title_wrap">
                              <figure>
                                <img
                                  src={
                                    '/assets/images/dinner/' +
                                    JSON.parse(item.dinner_image)[0]
                                  }
                                  alt=""
                                />
                              </figure>
                              <p>
                                {item.name}
                                <span
                                  style={{
                                    fontWeight: 'normal',
                                  }}
                                >
                                  {item.veg_type ? item.veg_type : ''}
                                </span>
                                {item.star ? (
                                  <span className="dn_star">
                                    {(item.star / item.com_num).toFixed(1)}
                                    <i
                                      class="fas fa-star"
                                      style={{ color: '#C73E3A' }}
                                    ></i>
                                  </span>
                                ) : (
                                  <span className="dn_star">等待您的評論</span>
                                )}
                              </p>
                            </div>
                          </NavLink>

                          <div className="content_wrap">
                            <div className="spicy">
                              {item.spicy ? this.spicyfunc(item.spicy) : '不辣'}
                            </div>

                            <div className="content">
                              <div>
                                <p style={{ textDecoration: 'line-through' }}>
                                  原價
                                  {item.cook + item.price}
                                </p>
                                <p
                                  style={{
                                    color: '#C73E3A',
                                    fontWeight: '800',
                                  }}
                                >
                                  特價
                                  {item.cook + parseInt(item.price * 0.75)}
                                </p>
                              </div>
                              <div className="i_wrap">
                                <i
                                  className={
                                    item.dn_liked
                                      ? 'fas fa-heart fa-lg active'
                                      : 'fas fa-heart fa-lg'
                                  }
                                  onClick={this.handleConciergeBellClick(
                                    item.dinner_id,
                                    true
                                  )}
                                ></i>
                                <i
                                  className="fas fa-concierge-bell fa-lg"
                                  onClick={this.handleConciergeBellClick(
                                    item.dinner_id
                                  )}
                                ></i>
                              </div>
                            </div>
                            {/* <div>
                              <p>可換食材</p>
                            </div> */}
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

// 經過判斷再綁定
// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  let my_store = {}

  if (store.RestaurantReducer.data.length === 0) {
    return my_store
  }

  my_store = {
    restaurant: store.RestaurantReducer.data[0],
    dinner_number: store.RestaurantReducer.data[1],
    dinners: store.RestaurantReducer.data[2],
    // price: store.RestaurantReducer.data[3],
    oldName: store.RestaurantReducer.oldName,
  }

  if (store.loginReducer.isLogin)
    my_store = {
      ...my_store,
      customer_id: store.loginReducer.member[0].customer_id,
      dinners: store.RestaurantReducer.data[2],
    }

  // if (store.RestaurantReducer.dn_cart_data.length > 0)
  //   my_store = {
  //     ...my_store,
  //     dn_cart_data: store.RestaurantReducer.dn_cart_data,
  //   }

  return my_store
}
export default connect(mapStateToProps)(Dinnerlist)
// export default Dinnerlist

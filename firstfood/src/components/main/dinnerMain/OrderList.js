import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'

import Header from '../../Header'
import Navbars from '../../Navbars'
import Footer from '../../Footer'
import Reservation from '../../../pages/Reservation'
import {
  loadSingleRestaurantAsync,
  orderListShowReservation,
} from '../../../action/index'
import { connect } from 'react-redux'

import {
  loadSingleDinnerAsync,
  handleAddCartsBeforeBookAsync,
  readCartsBeforeBookAsync,
  handleCheckAsync,
  handleCancelClickAsync,
  handleLoveClickAsync,
} from '../../../action/index'
import swal from 'sweetalert'

const spicy = {
  0: '不辣',
  1: '小辣',
  2: '中辣',
  3: '大辣',
  4: '特辣',
}

let book = {
  restaurant_id: 0,
  checked_dn_cart_sid: [],
}

class OrderList extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurant_id: 0,
      cancelAr: [],
    }
  }

  componentDidMount() {
    let customer_id = this.props.customer_id
    console.log(customer_id)
    this.props.dispatch(readCartsBeforeBookAsync(customer_id))
    this.props.dispatch(loadSingleRestaurantAsync(1, 0))
  }

  componentDidUpdate(previousProps) {
    console.log(previousProps)
    console.log(this.props)
    if (previousProps.customer_id !== this.props.customer_id) {
      this.props.dispatch(readCartsBeforeBookAsync(this.props.customer_id))
    }
    if (previousProps.dn_cart_data.length !== this.props.dn_cart_data.length) {
      this.props.dispatch(readCartsBeforeBookAsync(this.props.customer_id))
      book = {
        restaurant_id: 0,
        checked_dn_cart_sid: [],
      }
    }
  }

  handleCheck = (restaurant_id, sid) => e => {
    this.props.dispatch(loadSingleRestaurantAsync(restaurant_id, 0))

    if (!book.restaurant_id && !book.restaurant_id !== restaurant_id) {
      book.restaurant_id = restaurant_id
    }

    if (book.checked_dn_cart_sid.indexOf(sid) === -1) {
      book.checked_dn_cart_sid.push(sid)
      // console.log(book.checked_dn_cart_sid.length)
    } else if (
      book.checked_dn_cart_sid.indexOf(sid) !== -1 &&
      book.restaurant_id !== restaurant_id
    ) {
      book.checked_dn_cart_sid.splice(book.checked_dn_cart_sid.indexOf(sid), 1)
      // console.log(book.checked_dn_cart_sid.length)
    } else {
      book.checked_dn_cart_sid.splice(book.checked_dn_cart_sid.indexOf(sid), 1)
      // console.log(book.checked_dn_cart_sid.length)
      if (book.checked_dn_cart_sid.length === 0) {
        book.restaurant_id = 0
      }
    }
    this.props.dispatch(handleCheckAsync(book))
  }

  // 單筆取消
  handleCancelClick = sid => () => {
    // let customer_id = this.props.customer_id
    let customer_id = 1

    swal({
      title: '確定取消嗎？',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        this.props.dispatch(handleCancelClickAsync(customer_id, sid))
        swal('取消成功！', '您已成功取消此筆點餐', 'success')
      }
    })
  }

  // 批次勾選取消
  // handleCancelChecked = sid => () => {
  //   this.setState({
  //     cancelAr: [...this.state.cancelAr, sid],
  //   })
  // }

  // 單筆收藏
  handleLoveClick = sid => () => {
    // let customer_id = this.props.customer_id
    let customer_id = 1
    this.props.dispatch(
      handleLoveClickAsync(customer_id, sid, () => {
        swal({
          icon: 'success',
          title: '成功加入收藏',
          timer: 2000,
        })
      })
    )
  }

  handleReservation = e => {
    e.preventDefault()
    if (this.props.book instanceof Array) {
      if (this.props.book.length == 0) {
        alert('請勾選')
      } else {
        this.props.dispatch(orderListShowReservation(!this.props.isShow))
      }
    } else {
      alert('請勾選')
    }
  }

  render() {
    // console.log('orderList')
    // console.log(this.props)
    if (!this.props.customer_id) {
      // console.log(this.props)
      return <>請登入</>
    }

    // console.log(this.props.dn_cart_data)

    if (this.props.dn_cart_data.length === 0) {
      // console.log(this.props)
      return (
        <div id="wrapper" className="position-relative">
          <div className="container">
            <Header />
            <Navbars />
          </div>
          <div
            style={{
              width: '60vw',
              height: '60vh',
              margin: 'auto',
              textAlign: 'center',
            }}
          >
            <h1 style={{ margin: '20px 0' }}>您的點餐清單暫無內容</h1>
            <img
              src="/assets/images/sorry3.svg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="container">
            <Footer />
          </div>
        </div>
      )
    }

    // if (this.props.number.NUMBER === 0) {
    //   return <>尚未點餐</>
    // }
    // console.log(this.props)
    return (
      <>
        {/*{this.props.isShow ? <Reservation {...this.props} /> : <></> }*/}
        <Reservation {...this.props} />
        <div id="wrapper" className="position-relative">
          <div className="container">
            <Header />
            <Navbars />
          </div>
          <div className="dn_orderlist">
            <div className="container">
              <div className="dn_orderlist_nav">
                <NavLink key={1} to={''} onClick={this.handleReservation}>
                  批次預約
                </NavLink>
              </div>
              {this.props.dn_cart_data.map(el => {
                return (
                  <div className="dn_card">
                    <div className="row">
                      <div className="col-md-7 left">
                        <div className="d-flex title">
                          <span>菜色</span>
                          <h5>{el.dinner_name}</h5>
                          <span>餐廳名</span>
                          <h5>{el.restaurant_name}</h5>
                        </div>
                        <div className="part1">
                          <span>食材</span>
                          <p>{el.ingredient}</p>
                          <span>食材商品</span>
                          <p>{el.product}</p>
                        </div>
                        <div className="part2">
                          <span>特殊要求</span>
                          <p>{el.special_request}</p>
                          <span>辣度</span>
                          <p>{spicy[el.spicy]}</p>
                          <span>數量</span>
                          <p>{el.quantity}</p>
                        </div>
                      </div>
                      <div className="col-md-5 right">
                        <div>
                          {el.cooktype
                            ? el.cooktype === '內用'
                              ? '預約內用'
                              : '預約外送'
                            : ''}
                          <input
                            type="checkbox"
                            onChange={this.handleCheck(
                              el.restaurant,
                              el.dn_goods_cart_id
                            )}
                            disabled={
                              book.restaurant_id &&
                              book.restaurant_id !== el.restaurant &&
                              book.checked_dn_cart_sid.length !== 0
                                ? 'disabled'
                                : false
                            }
                            value={el.isSelected}
                          />
                        </div>

                        <div
                          className="love"
                          onClick={this.handleLoveClick(el.dn_goods_cart_id)}
                        >
                          <p>加入收藏</p>
                        </div>

                        <div
                          className="cancel"
                          onClick={this.handleCancelClick(el.dn_goods_cart_id)}
                        >
                          <p>取消點餐</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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

const mapStateToProps = store => {
  let my_store = {
    customer_id: 0,
    isShow: store.ui.componentUi.web.orderList.reservationIsShow,
    restaurant: store.RestaurantReducer.data,
  }

  if (store.loginReducer.isLogin)
    my_store = {
      ...my_store,
      customer_id: store.loginReducer.member[0].customer_id,
    }

  if (!store.RestaurantReducer.dn_cart_data)
    my_store = {
      ...my_store,
      dn_cart_data: [],
    }

  if (store.RestaurantReducer.dn_cart_data)
    my_store = {
      ...my_store,
      dn_cart_data: store.RestaurantReducer.dn_cart_data,
      dn_cart_number: store.RestaurantReducer.dn_cart_number,
      customer_id: store.loginReducer.member[0].customer_id,
    }
  if (store.RestaurantReducer.book) {
    if (store.RestaurantReducer.book.checked_dn_cart_sid) {
      my_store = {
        ...my_store,
        book: store.RestaurantReducer.book.checked_dn_cart_sid,
      }
    } else {
      my_store = {
        ...my_store,
        book: store.RestaurantReducer.book,
      }
    }
  }

  return my_store
}
export default connect(mapStateToProps)(OrderList)

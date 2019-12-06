import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { addOrder } from '../../../../../action/MyCartaction/card'
import { getcidcartallnumA } from '../../../../../action/index'

class Cardbottom extends Component {
  constructor() {
    super()
  }
  sendOrder = () => {
    let custermerId = this.props.loginReducer.member[0]['customer_id']
    let pm_event = this.props.cartcoupon[0]['couponevent']
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    let buyinfor = this.props.buyinfor
    let cartcoupon = this.props.cartcoupon[0]
    let coupon = this.props.coupon

    let usecoupon = [] //使用哪張優惠券
    for (var i = 0; i < coupon.length; i++) {
      if (coupon[i]['pm_event'] == cartcoupon['couponevent']) {
        usecoupon.push(coupon[i]['customer_coupon_id'])
      }
    }
    console.log(usecoupon)

    let farmer_product = [] //食材
    let farmer_quantity = []
    for (var i = 0; i < car.length; i++) {
      farmer_product.push(car[i]['farmer_product'])
      farmer_quantity.push(car[i]['quantity'])
    }

    let course_course = [] //課程
    let course_quantity = []
    for (var i = 0; i < course.length; i++) {
      course_course.push(course[i]['course'])
      course_quantity.push(course[i]['quantity'])
    }
    let dn_restaurant_id = [] //代客煮
    let dn_dinner_list = []
    let dn_product_class = []
    let dn_farmer_product = []
    let dn_special_request = []
    let dn_spicy = []
    let dn_quantity = []
    let dn_book_weekday = []
    let dn_book_time = []
    let dn_person = []
    let dn_create_at = []
    for (var i = 0; i < dn.length; i++) {
      dn_restaurant_id.push(dn[i]['restaurant'])
      dn_dinner_list.push(dn[i]['dinner_list'])
      dn_product_class.push(dn[i]['product_class'])
      dn_farmer_product.push(dn[i]['farmer_product'])
      dn_special_request.push(dn[i]['special_request'])
      dn_spicy.push(dn[i]['spicy'])
      dn_quantity.push(dn[i]['quantity'])
      dn_book_weekday.push(dn[i]['book_weekday'])
      dn_book_time.push(dn[i]['book_time'])
      dn_person.push(dn[i]['person'])
    }

    
    let get_method = buyinfor[0]['get_method'] //購物資訊
    let pay_method = buyinfor[0]['pay_method']
    let get_time = buyinfor[0]['get_time']
    let buyer = buyinfor[0]['buyer']
    let buyer_mobile = buyinfor[0]['buyer_mobile']
    let buyer_phone = buyinfor[0]['buyer_phone']
    let buyer_email = buyinfor[0]['buyer_email']
    let buyer_address = buyinfor[0]['buyer_address']
    let receiver = buyinfor[0]['receiver']
    let receiver_phone = buyinfor[0]['receiver_phone']
    let receiver_mobile = buyinfor[0]['receiver_mobile']
    let receiver_email = buyinfor[0]['receiver_email']

    let obj = {
      //訂單送出時的資料
      customer_information: custermerId,
      pm_event: pm_event,
      farmer_product: farmer_product,
      farmer_quantity: farmer_quantity,
      course_course: course_course,
      course_quantity: course_quantity,
      dn_restaurant_id: dn_restaurant_id,
      dn_dinner_list: dn_dinner_list,
      dn_product_class: dn_product_class,
      dn_farmer_product: dn_farmer_product,
      dn_special_request: dn_special_request,
      dn_spicy: dn_spicy,
      dn_quantity: dn_quantity,
      dn_book_weekday: dn_book_weekday,
      dn_book_time: dn_book_time,
      dn_person: dn_person,
      get_method: get_method,
      pay_method: pay_method,
      get_time: get_time,
      buyer: buyer,
      buyer_mobile: buyer_mobile,
      buyer_phone: buyer_phone,
      buyer_email: buyer_email,
      buyer_address: buyer_address,
      receiver: receiver,
      receiver_phone: receiver_phone,
      receiver_mobile: receiver_mobile,
      receiver_email: receiver_email,
      usecoupon: usecoupon,
    }
    // this.props.dispatch(deleteCart(custermerId))用下面的ADDORDER一起做
    this.props.dispatch(addOrder(obj))
    this.props.dispatch(getcidcartallnumA(3))
  }

  render() {
    return (
      <>
        <div className="cardpay-bottom">
          <div className="cardpay-next-or-prev">
            <NavLink to="/lastcheck" className="prev">
              上一步
            </NavLink>
            <NavLink to="/ending" className="next" onClick={this.sendOrder}>
              確認
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    buyinfor: state.buyinfor,
    dn: state.dn,
    loginReducer: state.loginReducer,
    cartcoupon: state.cartcoupon,
    coupon: state.memberReducer.coupon,
  }
}

export default connect(mapstatetoprops)(Cardbottom)

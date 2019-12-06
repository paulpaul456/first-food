import React, { Component } from 'react'
import { connect } from 'react-redux'
import Endingfm from './Endingfm'
import Endingcourse from './Endingcourse'
import Endingdn from './Endingdn'
class Endingbody extends Component {
  constructor() {
    super()
  }

  productCount = () => {
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    let count = 0
    let coursecount = 0
    let dncount = 0
    car.forEach(e => {
      count += Number(e.quantity)
    })
    course.forEach(e => {
      coursecount += Number(e.quantity)
    })
    dn.forEach(e => {
      dncount += Number(e.quantity)
    })
    return count + coursecount + dncount
  }

  totalPrice = () => {
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    let count = 0
    let coursecount = 0
    let dncount = 0
    car.forEach(e => {
      count += (Number(e.quantity) * (Number(e.price) * 100)) / 100
    })
    course.forEach(e => {
      coursecount += (Number(e.quantity) * (Number(e.cost) * 100)) / 100
    })
    dn.forEach(e => {
      dncount +=
        (Number(e.quantity) * (Number(e.product_price + e.tip) * 100)) / 100
    })
    return count + coursecount + dncount
  }

  render() {
    console.log(this.props.car)
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    if (car.length > 0 || course.length > 0 || dn.length > 0) {
      return (
        <>
          <div className="ending-body">
            <p className="ending-body-redp">購物明細</p>
            <div>
              <svg
                className="ending-body-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1110 52"
              >
                <g
                  id="Rectangle_1553"
                  data-name="Rectangle 1553"
                  fill="#707070"
                  stroke="#707070"
                  strokeWidth="1"
                >
                  <rect width="1110" height="52" stroke="none" />
                  <rect x="0.5" y="0.5" width="1109" height="51" fill="none" />
                </g>
                <text
                  id="商品明細"
                  transform="translate(220 35)"
                  fill="#fff"
                  fontSize="22"
                  fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    商品明細
                  </tspan>
                </text>
                <text
                  id="優惠價"
                  transform="translate(710 35)"
                  fill="#fff"
                  fontSize="22"
                  fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    優惠價
                  </tspan>
                </text>
                <text
                  id="數量"
                  transform="translate(865 35)"
                  fill="#fff"
                  fontSize="22"
                  fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    數量
                  </tspan>
                </text>
                <text
                  id="小計"
                  transform="translate(1010 35)"
                  fill="#fff"
                  fontSize="22"
                  fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    小計
                  </tspan>
                </text>
              </svg>
            </div>
            <Endingfm />
            <Endingcourse />
            <Endingdn />

            <div className="ending-body-total">
              <div className="ending-body-total-top">
                <div className="ending-body-total-top-div">
                  共
                  <p className="ending-body-total-top-p">
                    {car.length + course.length + dn.length}
                  </p>
                  項商品, 數量
                  <p className="ending-body-total-top-p">
                    {this.productCount()}
                  </p>
                  個,總金額NT$
                  <p className="ending-body-total-top-p">{this.totalPrice()}</p>
                  元,優惠券折扣金額:
                  <p className="ending-body-total-top-p">
                    {this.props.cartcoupon[0]['couponprice']}元
                  </p>
                </div>
              </div>
              <div className="ending-body-total-bottom">
                <div>
                  <p>
                    本訂單須付款金額 NT${' '}
                    {this.totalPrice() -this.props.cartcoupon[0]['couponprice']>0?this.totalPrice() -this.props.cartcoupon[0]['couponprice']:0}
                    元
                  </p>
                </div>
              </div>
            </div>
            <div className="whitediv"></div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <h1>您尚未購買任何產品</h1>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    dn: state.dn,
    cartcoupon: state.cartcoupon,
  }
}

export default connect(mapstatetoprops)(Endingbody)

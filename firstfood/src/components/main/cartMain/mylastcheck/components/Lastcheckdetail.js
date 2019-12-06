import React, { Component } from 'react'
import { connect } from 'react-redux'
import Lastcheckfm from './Lastcheckfm'
import Lastcheckcourse from './Lastcheckcourse'
import Lastcheckdn from './Lastcheckdn'
class Lastcheckdetail extends Component {
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
    let cartcoupon = this.props.cartcoupon
    if (
      this.props.car.length > 0 ||
      this.props.course.length > 0 ||
      this.props.dn > 0 ||
      this.props.cartcoupon.length > 0
    ) {
      return (
        <>
          <div className="last-check-body-detail">
            <p className="last-check-body-detail-redp">購物明細</p>
            <div>
              <svg
                className="last-check-body-detail-svg"
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
                    商品名
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

            <Lastcheckfm />
            <Lastcheckcourse />
            <Lastcheckdn />

            <div className="last-check-body-detail-total">
              <div className="last-check-body-detail-total-top">
                <div className="last-check-body-detail-total-top-div">
                  共
                  <p className="last-check-body-detail-total-top-p">
                    {car.length + course.length + dn.length}
                  </p>
                  項商品, 數量
                  <p className="last-check-body-detail-total-top-p">
                    {this.productCount()}
                  </p>
                  個, 金額NT$
                  <p className="last-check-body-detail-total-top-p">
                    {this.totalPrice()}
                  </p>
                  <div className="last=check-body-detail-total-top-p-rwd">
                    優惠券折扣金額: <p className="last-check-body-detail-total-top-p">
                    {cartcoupon[0]['couponprice']}
                  </p>
                  元
                  </div>
                
                 
                </div>
              </div>
              <div className="last-check-body-detail-total-bottom">
                <div>
                  <div>
                    本訂單須付款金額 NT${' '}
                    {this.totalPrice() - cartcoupon[0]['couponprice']>0?this.totalPrice() - cartcoupon[0]['couponprice']: 0}元
                  </div>
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
          <h1>您還沒有購買任何商品</h1>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    buyinfor: state.buyinfor,
    dn: state.dn,
    cartcoupon: state.cartcoupon,
  }
}

export default connect(mapstatetoprops)(Lastcheckdetail)

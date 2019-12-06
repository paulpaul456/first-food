import React, { Component } from 'react'
import { connect } from 'react-redux'
class Endinghead extends Component {
  constructor() {
    super()
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
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    if (car.length > 0 || course.length > 0 || dn.length > 0) {
      return (
        <>
          <div className="ending-head">
            <svg
              className="ending-head-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1113 54.263"
            >
              <g
                id="Group_394"
                data-name="Group 394"
                transform="translate(-403.5 -910.143)"
              >
                <path
                  id="Path_167"
                  data-name="Path 167"
                  d="M8557.763,101.888l26.212,25.4-26.212,25.4H8372.654v-50.8Z"
                  transform="translate(-7967.654 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_166"
                  data-name="Path 166"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7782.342 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_165"
                  data-name="Path 165"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7597.109 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_164"
                  data-name="Path 164"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7412.113 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_163"
                  data-name="Path 163"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7226.88 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_162"
                  data-name="Path 162"
                  d="M10566.573,122.906V71.643h-184.591l26.192,25.568-26.192,25.695Z"
                  transform="translate(-9051.573 840)"
                  fill="#ac1515"
                  stroke="#fff"
                  strokeWidth="3"
                />
              </g>
              <text
                id="STEP-1"
                transform="translate(50.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-1
                </tspan>
              </text>
              <text
                id="STEP-2"
                transform="translate(245.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-2
                </tspan>
              </text>
              <text
                id="STEP-3"
                transform="translate(433.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-3
                </tspan>
              </text>
              <text
                id="STEP-4"
                transform="translate(621.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-4
                </tspan>
              </text>
              <text
                id="STEP-5"
                transform="translate(804.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-5
                </tspan>
              </text>
              <text
                id="結束"
                transform="translate(999.5 38.857)"
                fill="#fff"
                fontSize="30"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
              >
                <tspan x="0" y="0">
                  結束
                </tspan>
              </text>
            </svg>
            <p className="ending-head-p1">購物完成</p>

            <p className="ending-head-p2">親愛的{this.props.loginReducer.member[0]['name']}會員您好:</p>

            <div className="ending-head-check">
              <svg
                className="ending-head-svg2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 149.601 149.601"
              >
                <path
                  id="check-circle-solid"
                  d="M157.6,82.8A74.8,74.8,0,1,1,82.8,8,74.8,74.8,0,0,1,157.6,82.8ZM74.148,122.406l55.5-55.5a4.826,4.826,0,0,0,0-6.825l-6.825-6.825a4.826,4.826,0,0,0-6.825,0L70.736,98.52,49.6,77.389a4.826,4.826,0,0,0-6.825,0l-6.825,6.825a4.826,4.826,0,0,0,0,6.825l31.368,31.368a4.826,4.826,0,0,0,6.825,0Z"
                  transform="translate(-8 -8)"
                  fill="#0089a7"
                />
              </svg>
              <div className="ending-head-text">
                謝謝您的訂購，您的訂單編號為:
                <p className="red-text">AET00000000654</p>
              </div>
              <div>
                恭喜您，您的支付已經完成，交易金額為NT${' '}
                <p className="red-text">
                  {this.totalPrice() - this.props.cartcoupon[0]['couponprice']>0?this.totalPrice() - this.props.cartcoupon[0]['couponprice']:0}
                </p>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return <></>
    }
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    dn: state.dn,
    cartcoupon: state.cartcoupon,
    loginReducer: state.loginReducer,
  }
}

export default connect(mapstatetoprops)(Endinghead)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCoupon } from '../../../../../action/MyCartaction/couponaction'
import { initCoupon } from '../../../../../action/MyCartaction/couponaction'
class Couponhead extends Component {
  constructor() {
    super()
  }
  useCoupon = (couponprice, couponevent) => () => {
    console.log(couponprice)
    console.log(couponevent)
    let customer_information = this.props.coupon[0]['customer_information']
    let obj = {
      customer_information: customer_information,
      couponprice: couponprice,
      couponevent: couponevent,
    }
    console.log(obj)
    this.props.dispatch(selectCoupon(obj))
  }
  componentDidMount() {
    let customer_information = this.props.loginReducer.member[0]['customer_id']
    console.log(customer_information)
    let obj = {
      customer_information: customer_information,
      couponprice: 0,
      couponevent: 'none',
    }
    this.props.dispatch(initCoupon(obj))
  }
  render() {
    if (this.props.coupon && this.props.cartcoupon[0]) {
      let coupon_1000_number = 0
      let coupon_500_number = 0
      let coupon_300_number = 0
      let coupon_100_number = 0

      let coupon_1000 = this.props.coupon.map(v => {
        if (v.pm_event === 50) {
          return v.nam
        } else {
          return 0
        }
      })

      let coupon_500 = this.props.coupon.map(v => {
        if (v.pm_event === 51) {
          return v.nam
        } else {
          return 0
        }
      })

      let coupon_300 = this.props.coupon.map(v => {
        if (v.pm_event === 52) {
          return v.nam
        } else {
          return 0
        }
      })

      let coupon_100 = this.props.coupon.map(v => {
        if (v.pm_event === 53) {
          return v.nam
        } else {
          return 0
        }
      })

      for (let i = 0; i < coupon_1000.length; i++) {
        coupon_1000_number = coupon_1000_number + coupon_1000[i]
      }

      for (let i = 0; i < coupon_500.length; i++) {
        coupon_500_number = coupon_500_number + coupon_500[i]
      }

      for (let i = 0; i < coupon_300.length; i++) {
        coupon_300_number = coupon_300_number + coupon_300[i]
      }

      for (let i = 0; i < coupon_100.length; i++) {
        coupon_100_number = coupon_100_number + coupon_100[i]
      }

      console.log(
        coupon_1000_number,
        coupon_500_number,
        coupon_300_number,
        coupon_100_number
      )
      return (
        <>
          <div className="coupon-head">
            <svg
              className="coupon-head-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1113 54.263"
            >
              <g
                id="Group_569"
                data-name="Group 569"
                transform="translate(-403.5 -589.143)"
              >
                <g id="Group_630" data-name="Group 630">
                  <g
                    id="Group_394"
                    data-name="Group 394"
                    transform="translate(0 -321)"
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
                      fill="#ac1515"
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
                      fill="#5f5f5f"
                      stroke="#fff"
                      strokeWidth="3"
                    />
                  </g>
                </g>
                <text
                  id="STEP-1"
                  transform="translate(454 628)"
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
                  transform="translate(649 628)"
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
                  transform="translate(837 628)"
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
                  transform="translate(1025 628)"
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
                  transform="translate(1208 628)"
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
                  transform="translate(1403 628)"
                  fill="#fff"
                  fontSize="30"
                  fontFamily="YuGothicUI-Regular, Yu Gothic UI"
                >
                  <tspan x="0" y="0">
                    結束
                  </tspan>
                </text>
              </g>
            </svg>

            <p className="coupon-head-p1">優惠券</p>

            <div className="coupon-head-p2">
              <p className="coupon-head-p3">選擇使用:</p>
              <div className="coupon-head-p4">
                <p>折抵&emsp;&emsp;&emsp;</p>
                <p className="coupon-head-p5">
                  {this.props.cartcoupon[0]['couponprice']}元
                </p>
              </div>
            </div>

            <div className="coupon-head-list">
              <div
                className="coupon-head-list-red"
                onClick={this.useCoupon(1000, 50)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="129.156"
                  height="129.156"
                  viewBox="0 0 129.156 129.156"
                >
                  <path
                    id="tags-solid"
                    d="M68.5,31.083,39.354,1.934A6.6,6.6,0,0,0,34.685,0H6.6A6.6,6.6,0,0,0,0,6.6V34.685a6.6,6.6,0,0,0,1.934,4.669L31.083,68.5a6.6,6.6,0,0,0,9.339,0L68.5,40.422a6.6,6.6,0,0,0,0-9.339ZM15.408,22.012a6.6,6.6,0,1,1,6.6-6.6A6.6,6.6,0,0,1,15.408,22.012Zm70.7,18.41L58.031,68.5a6.6,6.6,0,0,1-9.339,0l-.05-.05L72.589,44.508a12.382,12.382,0,0,0,0-17.51l-27-27h6.7a6.6,6.6,0,0,1,4.669,1.934L86.112,31.083a6.6,6.6,0,0,1,0,9.339Z"
                    transform="translate(23.866 33.117)"
                    fill="#cf5a5a"
                  />
                  <g
                    id="Ellipse_21"
                    data-name="Ellipse 21"
                    fill="none"
                    stroke="#cf5a5a"
                    strokeWidth="9"
                  >
                    <circle cx="64.578" cy="64.578" r="64.578" stroke="none" />
                    <circle cx="64.578" cy="64.578" r="60.078" fill="none" />
                  </g>
                </svg>
                <div className="coupon-head-list-red-p">
                  <p>1000優惠券</p>
                  <p className="coupon-rwd-p">X{coupon_1000_number}</p>
                </div>
              </div>

              <div
                className="coupon-head-list-blue"
                onClick={this.useCoupon(500, 51)}
              >
                <svg
                  id="Group_242"
                  data-name="Group 242"
                  xmlns="http://www.w3.org/2000/svg"
                  width="129.156"
                  height="129.156"
                  viewBox="0 0 129.156 129.156"
                >
                  <path
                    id="tags-solid"
                    d="M68.5,31.083,39.354,1.934A6.6,6.6,0,0,0,34.685,0H6.6A6.6,6.6,0,0,0,0,6.6V34.685a6.6,6.6,0,0,0,1.934,4.669L31.083,68.5a6.6,6.6,0,0,0,9.339,0L68.5,40.422a6.6,6.6,0,0,0,0-9.339ZM15.408,22.012a6.6,6.6,0,1,1,6.6-6.6A6.6,6.6,0,0,1,15.408,22.012Zm70.7,18.41L58.031,68.5a6.6,6.6,0,0,1-9.339,0l-.05-.05L72.589,44.508a12.382,12.382,0,0,0,0-17.51l-27-27h6.7a6.6,6.6,0,0,1,4.669,1.934L86.112,31.083a6.6,6.6,0,0,1,0,9.339Z"
                    transform="translate(23.866 33.117)"
                    fill="#133072"
                  />
                  <g
                    id="Path_193"
                    data-name="Path 193"
                    transform="translate(0 0)"
                    fill="none"
                  >
                    <path
                      d="M64.578,0A64.578,64.578,0,1,1,0,64.578,64.578,64.578,0,0,1,64.578,0Z"
                      stroke="none"
                    />
                    <path
                      d="M 64.57791900634766 8.999992370605469 C 33.93214416503906 8.999992370605469 8.999992370605469 33.93214416503906 8.999992370605469 64.57791900634766 C 8.999992370605469 95.22369384765625 33.93214416503906 120.1558456420898 64.57791900634766 120.1558456420898 C 95.22369384765625 120.1558456420898 120.1558456420898 95.22369384765625 120.1558456420898 64.57791900634766 C 120.1558456420898 33.93214416503906 95.22369384765625 8.999992370605469 64.57791900634766 8.999992370605469 M 64.57791900634766 0 C 100.2433166503906 0 129.1558380126953 28.91252136230469 129.1558380126953 64.57791900634766 C 129.1558380126953 100.2433166503906 100.2433166503906 129.1558380126953 64.57791900634766 129.1558380126953 C 28.91252136230469 129.1558380126953 0 100.2433166503906 0 64.57791900634766 C 0 28.91252136230469 28.91252136230469 0 64.57791900634766 0 Z"
                      stroke="none"
                      fill="#133072"
                    />
                  </g>
                </svg>

                <div className="coupon-head-list-blue-p">
                  <p>500優惠券</p>
                  <p className="coupon-rwd-p">X{coupon_500_number}</p>
                </div>
              </div>

              <div
                className="coupon-head-list-red"
                onClick={this.useCoupon(300, 52)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="129.156"
                  height="129.156"
                  viewBox="0 0 129.156 129.156"
                >
                  <path
                    id="tags-solid"
                    d="M68.5,31.083,39.354,1.934A6.6,6.6,0,0,0,34.685,0H6.6A6.6,6.6,0,0,0,0,6.6V34.685a6.6,6.6,0,0,0,1.934,4.669L31.083,68.5a6.6,6.6,0,0,0,9.339,0L68.5,40.422a6.6,6.6,0,0,0,0-9.339ZM15.408,22.012a6.6,6.6,0,1,1,6.6-6.6A6.6,6.6,0,0,1,15.408,22.012Zm70.7,18.41L58.031,68.5a6.6,6.6,0,0,1-9.339,0l-.05-.05L72.589,44.508a12.382,12.382,0,0,0,0-17.51l-27-27h6.7a6.6,6.6,0,0,1,4.669,1.934L86.112,31.083a6.6,6.6,0,0,1,0,9.339Z"
                    transform="translate(23.866 33.117)"
                    fill="#cf5a5a"
                  />
                  <g
                    id="Ellipse_21"
                    data-name="Ellipse 21"
                    fill="none"
                    stroke="#cf5a5a"
                    strokeWidth="9"
                  >
                    <circle cx="64.578" cy="64.578" r="64.578" stroke="none" />
                    <circle cx="64.578" cy="64.578" r="60.078" fill="none" />
                  </g>
                </svg>
                <div className="coupon-head-list-red-p">
                  <p>300優惠券</p>
                  <p className="coupon-rwd-p">X{coupon_300_number}</p>
                </div>
              </div>

              <div
                className="coupon-head-list-blue"
                onClick={this.useCoupon(100, 53)}
              >
                <svg
                  id="Group_242"
                  data-name="Group 242"
                  xmlns="http://www.w3.org/2000/svg"
                  width="129.156"
                  height="129.156"
                  viewBox="0 0 129.156 129.156"
                >
                  <path
                    id="tags-solid"
                    d="M68.5,31.083,39.354,1.934A6.6,6.6,0,0,0,34.685,0H6.6A6.6,6.6,0,0,0,0,6.6V34.685a6.6,6.6,0,0,0,1.934,4.669L31.083,68.5a6.6,6.6,0,0,0,9.339,0L68.5,40.422a6.6,6.6,0,0,0,0-9.339ZM15.408,22.012a6.6,6.6,0,1,1,6.6-6.6A6.6,6.6,0,0,1,15.408,22.012Zm70.7,18.41L58.031,68.5a6.6,6.6,0,0,1-9.339,0l-.05-.05L72.589,44.508a12.382,12.382,0,0,0,0-17.51l-27-27h6.7a6.6,6.6,0,0,1,4.669,1.934L86.112,31.083a6.6,6.6,0,0,1,0,9.339Z"
                    transform="translate(23.866 33.117)"
                    fill="#133072"
                  />
                  <g
                    id="Path_193"
                    data-name="Path 193"
                    transform="translate(0 0)"
                    fill="none"
                  >
                    <path
                      d="M64.578,0A64.578,64.578,0,1,1,0,64.578,64.578,64.578,0,0,1,64.578,0Z"
                      stroke="none"
                    />
                    <path
                      d="M 64.57791900634766 8.999992370605469 C 33.93214416503906 8.999992370605469 8.999992370605469 33.93214416503906 8.999992370605469 64.57791900634766 C 8.999992370605469 95.22369384765625 33.93214416503906 120.1558456420898 64.57791900634766 120.1558456420898 C 95.22369384765625 120.1558456420898 120.1558456420898 95.22369384765625 120.1558456420898 64.57791900634766 C 120.1558456420898 33.93214416503906 95.22369384765625 8.999992370605469 64.57791900634766 8.999992370605469 M 64.57791900634766 0 C 100.2433166503906 0 129.1558380126953 28.91252136230469 129.1558380126953 64.57791900634766 C 129.1558380126953 100.2433166503906 100.2433166503906 129.1558380126953 64.57791900634766 129.1558380126953 C 28.91252136230469 129.1558380126953 0 100.2433166503906 0 64.57791900634766 C 0 28.91252136230469 28.91252136230469 0 64.57791900634766 0 Z"
                      stroke="none"
                      fill="#133072"
                    />
                  </g>
                </svg>

                <div className="coupon-head-list-blue-p">
                  <p>100優惠券</p>
                  <p className="coupon-rwd-p">X{coupon_100_number}</p>
                </div>
              </div>
            </div>

            <p className="coupon-head-list-bottom-p">
              一張訂單只能選一張折價券使用,如優惠券折抵超過訂單金額則抵銷該金額
            </p>
          </div>
        </>
      )
    } else {
      return (
        <>
          <h1></h1>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
    buyinfor: state.buyinfor,
    course: state.course,
    dn: state.dn,
    coupon: state.memberReducer.coupon,
    loginReducer: state.loginReducer,
    cartcoupon: state.cartcoupon,
  }
}

export default connect(mapstatetoprops)(Couponhead)

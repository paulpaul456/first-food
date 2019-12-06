import React from 'react'
import Couponhead from './components/Couponhead'
import { connect } from 'react-redux'
import Couponbottom from './components/Couponbottom'
import { getCoupon } from '../../../../action/fetchMemberDataAction'
import '../../../../assets/scss/main/cartstyle/Coupon.scss'
class Coupon extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    let custermerId = this.props.loginReducer.member[0]['customer_id']
    this.props.dispatch(getCoupon(custermerId))
  }
  render() {
    return (
      <>
        <section className="coupon">
          <div className="container">
            <Couponhead />
            <Couponbottom />
          </div>
        </section>
      </>
    )
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
  }
}

export default connect(mapstatetoprops)(Coupon)

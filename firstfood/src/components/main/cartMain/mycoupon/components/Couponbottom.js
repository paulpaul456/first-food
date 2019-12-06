import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Couponbottom extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <div className="coupon-bottom">
          <p className="coupon-bottom-p">(若不使用優惠券，可直接選擇下一步)</p>

          <div className="coupon-next-or-prev">
            <NavLink to="/buyinfor" className="prev">
              上一步
            </NavLink>
            <NavLink to="/Lastcheck" className="next">
              下一步
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default Couponbottom

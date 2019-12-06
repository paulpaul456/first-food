import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Lastcheckbottom extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <div className="last-check-bottom">
          <div className="last-check-next-or-prev">
            <NavLink to="/coupon" className="prev">
              上一步
            </NavLink>
            <NavLink to="/card" className="next">
              送出訂單
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default Lastcheckbottom

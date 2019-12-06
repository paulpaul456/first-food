import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Endingbottom extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <div className="ending-bottom">
          <div className="ending-next-or-prev">
            <NavLink to="/" className="prev">
              返回首頁
            </NavLink>

            <NavLink to="/member" className="next">
              會員專區
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default Endingbottom

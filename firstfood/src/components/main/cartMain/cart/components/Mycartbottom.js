import React, { Component } from 'react'

import { connect } from 'react-redux'

import { NavLink } from 'react-router-dom'

class Mycartbottom extends Component {
  //   handleClick=()=>{this.props.history.push('/Buyinfor')}
  render() {
    console.log(this.props)

    return (
      <>
        <div className="cart-alert container">
          <div className="row">
            <div className="col-md-12">
              <p className="cart-alert-p-red">重要提醒</p>
              <p className="cart-alert-p">
                宅配到府方案，單次實際付款金額未滿490元加收100元處理費
              </p>
              <p className="cart-alert-p">
                宅配到府方案，記得填選收件時段，若未選擇將列為不限時
              </p>
            </div>
          </div>
        </div>

        <div className="checkout">
          
          <NavLink to="/" className="checkout-1">
          繼續購買
          </NavLink>

          <NavLink to="/Buyinfor" className="checkout-2">
            結帳
          </NavLink>
        </div>
      </>
    )
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
  }
}
export default connect(mapstatetoprops)(Mycartbottom)

import React, { Component } from 'react'
import { connect } from 'react-redux'
class Lastcheckdn extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.car)
    let dn = this.props.dn

    if (this.props.dn.length > 0) {
      return (
        <>
          {dn.map(e => {
            return (
              <div
                className="last-check-body-detail-list"
                key={e.dn_goods_cart_id}
              >
                <div className="row">
                  <div className="col-md-7 last-check-body-detail-list-left ">
                    <p className="last-check-body-detail-list-left-1">
                      {e.food_name}
                    </p>
                  </div>
                  <div className="col-md-5 last-check-body-detail-list-right">
                    <p className="last-check-rwd-p1">
                      {e.tip + e.product_price}
                    </p>
                    <p>{e.quantity}</p>
                    <p className="last-check-rwd-p2">
                      {' '}
                      {(e.tip + e.product_price) * e.quantity}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
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
    dn: state.dn,
  }
}

export default connect(mapstatetoprops)(Lastcheckdn)

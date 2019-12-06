import React, { Component } from 'react'
import { connect } from 'react-redux'
class Endingdn extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.dn)
    let dn = this.props.dn

    if (this.props.dn.length > 0) {
      return (
        <>
          {dn.map(e => {
            return (
              <div className="ending-body-list" key={e.dn_goods_cart_id}>
                <div className="row">
                  <div className="col-md-7 ending-body-list-left ">
                    <p className="ending-body-list-left-1">
                      {e.restaurant_name}
                    </p>
                  </div>
                  <div className="col-md-5 ending-body-list-right">
                    <p>{e.tip + e.product_price}</p>
                    <p>{e.quantity}</p>
                    <p>{(e.tip + e.product_price) * e.quantity}</p>
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

export default connect(mapstatetoprops)(Endingdn)

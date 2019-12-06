import React, { Component } from 'react'
import { connect } from 'react-redux'
class Endingfm extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.car)
    let car = this.props.car

    if (this.props.car.length > 0) {
      return (
        <>
          {car.map(e => {
            return (
              <div className="ending-body-list" key={e.fm_goods_cart_id}>
                <div className="row">
                  <div className="col-md-7 ending-body-list-left ">
                    <p className="ending-body-list-left-1">{e.name}</p>
                  </div>
                  <div className="col-md-5 ending-body-list-right">
                    <p>{e.price}</p>
                    <p>{e.quantity}</p>
                    <p>{e.price * e.quantity}</p>
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
  }
}

export default connect(mapstatetoprops)(Endingfm)

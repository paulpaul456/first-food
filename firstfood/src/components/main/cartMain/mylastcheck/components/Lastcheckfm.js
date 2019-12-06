import React, { Component } from 'react'
import { connect } from 'react-redux'
class Lastcheckfm extends Component {
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
              <div
                className="last-check-body-detail-list"
                key={e.fm_goods_cart_id}
              >
                <div className="row">
                  <div className="col-md-7 last-check-body-detail-list-left ">
                    <p className="last-check-body-detail-list-left-1">
                      {e.name}
                    </p>
                  </div>
                  <div className="col-md-5 last-check-body-detail-list-right">
                    <p className="last-check-rwd-p1">{e.price}</p>
                    <p>{e.quantity}</p>
                    <p className="last-check-rwd-p2"> {e.price * e.quantity}</p>
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

export default connect(mapstatetoprops)(Lastcheckfm)

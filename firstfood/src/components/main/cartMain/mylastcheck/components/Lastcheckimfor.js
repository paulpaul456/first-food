import React, { Component } from 'react'
import { connect } from 'react-redux'

class Lastcheckimfor extends Component {
  //注意是"M"
  constructor() {
    super()
  }
  render() {
    console.log(this.props.buyinfor)
    let buyinfor = this.props.buyinfor
    console.log(buyinfor[0])
    if (buyinfor.length > 0) {
      return (
        <>
          <div className="last-check-imf">
            <div className="container">
              <p className="text-red">付款方式與寄送資訊</p>
              <div className="row">
                <div className="col-md-2 col-xs-12 last-check-imf-left">
                  <div>
                    <p>配送方式</p>

                    <p>付款方式</p>
                    <p>收件者</p>
                    <p>連絡電話</p>
                    <p>E-MAIL</p>
                    <p>取貨門市</p>
                    <p>發票類型</p>
                  </div>
                  <div className="last-check-imf-right-rwd">
                    <p>{buyinfor[0]['get_method']}</p>
                    <p>{buyinfor[0]['pay_method']}</p>
                    <p>{buyinfor[0]['receiver']}</p>
                    <p>{buyinfor[0]['receiver_mobile']}</p>
                    <p>{buyinfor[0]['receiver_email']}</p>
                    <p>尉容門市</p>
                    <p>電子發票</p>
                  </div>
                </div>
                <div className="col-md-10 last-check-imf-right">
                  <p>{buyinfor[0]['get_method']}</p>
                  <p>{buyinfor[0]['pay_method']}</p>
                  <p>{buyinfor[0]['receiver']}</p>
                  <p>{buyinfor[0]['receiver_mobile']}</p>
                  <p>{buyinfor[0]['receiver_email']}</p>
                  <p>尉容門市</p>
                  <p>電子發票</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return <></>
    }
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
    buyinfor: state.buyinfor,
  }
}

export default connect(mapstatetoprops)(Lastcheckimfor) //注意是"M"

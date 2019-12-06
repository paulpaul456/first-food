import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux' //CONNECT才能拿到STORE裡面的資料

class Buyinforbottom extends Component {
  constructor() {
    super()
  }
  standard = e => {
    let arr = Object.keys(this.props.buyinfor[0])
    if (arr.length != 12) {
      alert('請填寫完整資訊')
      e.preventDefault()
      return
    }
  }
  render() {
    console.log(this.props.buyinfor[0])
    if (this.props.buyinfor[0]) {
      return (
        //由於第一次RENDER時COMPONENNTDIDMOUNT還沒執行所以還沒拿到資料 必須先判斷 拿到資料才渲染
        <>
          <div className="buy-imf-bottom">
            <div className="buy-imf-alert container">
              <div className="row">
                <div className="col-md-12">
                  <p className="buy-imf-alert-p-red">重要提醒</p>
                  <p className="buy-imf-alert-p">
                    宅配到府方案，單次實際付款金額未滿490元加收100元處理費
                  </p>
                  <p className="buy-imf-alert-p">
                    宅配到府方案，記得填選收件時段，若未選擇將列為不限時
                  </p>
                </div>
              </div>
            </div>

            <div className="next-or-prev">
              <NavLink to="/cart" className="prev">
                上一步
              </NavLink>
              <NavLink onClick={this.standard} to="/coupon" className="next">
                下一步
              </NavLink>
            </div>
          </div>
        </>
      )
    } else {
      //必須要給ELSE不然會抱錯
      return <></>
    }
  }
}

let mapstatetoprops = state => {
  return {
    buyinfor: state.buyinfor,
  }
}

export default connect(mapstatetoprops)(Buyinforbottom)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeText } from '../../../../../action/MyCartaction/buyinforaction'
import {
  equalbuyer,
  getMember,
  deleteMember,
  deleteWithBuyer,
} from '../../../../../action/MyCartaction/buyinforaction'

class Buyinforbody extends Component {
  constructor() {
    super()
  }

  handleChange = obj => e => {
    //TEXT改變時
    console.log(obj)
    let value = e.target.value //取得改變後的VALUE
    let item = e.target.name //取得要改變的項目
    console.log(item)
    this.props.dispatch(changeText(obj, item, value))
  }
  optionHandleChange = obj => e => {
    //選項改變時
    console.log(obj)
    let value = e.target.value
    let item = e.target.name
    console.log(item)
    this.props.dispatch(changeText(obj, item, value))
  }

  equalWithBuyer = obj => event => {
    //同訂購人資料
    console.log(event.target.checked)
    console.log(obj)

    if (event.target.checked == true) {
      this.props.dispatch(equalbuyer(obj))
    } else {
      this.props.dispatch(deleteWithBuyer())
    }
  }
  equalWithMember = member => e => {
    console.log(e.target.checked)
    console.log(member)
    if (e.target.checked == true) {
      this.props.dispatch(getMember(member))
    } else {
      this.props.dispatch(deleteMember())
    }
  }

  render() {
    let member = this.props.member
    let buyinfor = this.props.buyinfor
    console.log(member)

    if (this.props.buyinfor && this.props.buyinfor[0]) {
      //要用判斷式 因為第一次時還沒拿到資料就已經渲染
      return (
        <>
          <div className="buy-imf-body">
            <form name="form-buyinfor">
              <div className="buy-imf-body-list1">
                <div className="container">
                  <p className="buy-imf-body-red-p">收件選擇</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="get_method"
                      value="宅配到府"
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="get_method">
                      宅配到府
                    </label>
                  </div>
                  <div className="form-check buy-imf-body-list1-inp1 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="get_method"
                      value="超商取貨"
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="get_method">
                      超商取貨
                    </label>
                  </div>
                </div>
              </div>

              <div className="buy-imf-body-list1">
                <div className="container">
                  <p className="buy-imf-body-red-p">付費方式</p>
                  <div className="form-check buy-imf-body-list1-inp1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="pay_method"
                      id="withcard"
                      value="線上刷卡"
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="pay_method">
                      線上刷卡
                    </label>
                  </div>
                </div>
              </div>

              <p className="buy-imf-body-card-alert">
                *信用卡僅持卡人本人使用，本公司得就本件交易資料向發卡銀行/收單行即持卡人照會是否屬實，核對無誤後付款才算完成。
              </p>

              <div className="buy-imf-body-list1">
                <div className="container">
                  <p className="buy-imf-body-red-p">配送時段</p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="get_time"
                      id="fortime"
                      value="不限時段"
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="get_time">
                      不限時段
                    </label>
                  </div>
                  <div className="form-check buy-imf-body-list1-inp1 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="get_time"
                      id="fortime"
                      value="早間時段(AM08:00~PM13:00) "
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="get_time">
                      早間時段(AM08:00~PM13:00)
                    </label>
                  </div>
                  <div className="form-check buy-imf-body-list1-inp1 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="get_time"
                      id="fortime"
                      value="晚間時段(PM13:00~PM19:00)"
                      onChange={this.optionHandleChange(buyinfor[0])}
                    />
                    <label className="form-check-label" htmlFor="get_time">
                      晚間時段(PM13:00~PM19:00)
                    </label>
                  </div>
                </div>
              </div>

              <div className="buy-imf-body-list1">
                <div className="container">
                  <p className="buy-imf-body-red-p">訂購人資訊</p>
                  <div className="customer-imf">
                    <a>姓名</a>
                    <input
                      type="text"
                      name="buyer"
                      value={buyinfor[0]['buyer']}
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="customer-imf">
                    <a>手機</a>
                    <input
                      type="text"
                      name="buyer_mobile"
                      value={buyinfor[0]['buyer_mobile']}
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>
                  <div className="customer-imf">
                    <a>市話</a>
                    <input
                      type="text"
                      name="buyer_phone"
                      value={buyinfor[0]['buyer_phone']}
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>
                  <div className="customer-imf">
                    <a>E-mail</a>
                    <input
                      className="email"
                      type="text"
                      value={buyinfor[0]['buyer_email']}
                      name="buyer_email"
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="customer-imf">
                    <a>地址</a>
                    <input
                      className="email"
                      type="text"
                      value={buyinfor[0]['buyer_address']}
                      name="buyer_address"
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="form-check customer-imf-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                      onClick={this.equalWithMember(member)}
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      訂購人資訊使用會員資料
                    </label>
                  </div>
                </div>
              </div>

              <div className="buy-imf-body-list1">
                <div className="container">
                  <p className="buy-imf-body-red-p">收件人資訊</p>

                  <div className="form-check customer-imf-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="samebuyer"
                      onClick={this.equalWithBuyer(buyinfor[0])}
                      value="samebuyer"
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      同訂購人資料
                    </label>
                  </div>

                  <div className="customer-imf">
                    <a>收件人</a>
                    <input
                      className="recieve-people"
                      type="text"
                      value={buyinfor[0]['receiver']}
                      name="receiver"
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="customer-imf">
                    <a>手機</a>
                    <input
                      type="text"
                      name="receiver_mobile"
                      value={buyinfor[0]['receiver_mobile']}
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="customer-imf">
                    <a>市話</a>
                    <input
                      type="text"
                      name="receiver_phone"
                      value={buyinfor[0]['receiver_phone']}
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>

                  <div className="customer-imf">
                    <a>E-mail</a>
                    <input
                      className="email2"
                      type="text"
                      value={buyinfor[0]['receiver_email']}
                      name="receiver_email"
                      onChange={this.handleChange(buyinfor[0])}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      )
    } else {
      return (
        <>
          <h1>加載中...</h1>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    buyinfor: state.buyinfor,
    member: state.loginReducer.member[0],
  }
}

export default connect(mapstatetoprops)(Buyinforbody)

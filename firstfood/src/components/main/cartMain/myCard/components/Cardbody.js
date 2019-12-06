import React, { Component } from 'react'
import { connect } from 'react-redux'
class Cardbody extends Component {
  constructor() {
    super()
  }

  totalPrice = () => {
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    let count = 0
    let coursecount = 0
    let dncount = 0
    car.forEach(e => {
      count += (Number(e.quantity) * (Number(e.price) * 100)) / 100
    })
    course.forEach(e => {
      coursecount += (Number(e.quantity) * (Number(e.cost) * 100)) / 100
    })
    dn.forEach(e => {
      dncount +=
        (Number(e.quantity) * (Number(e.product_price + e.tip) * 100)) / 100
    })
    return count + coursecount + dncount
  }

  date = () => {
    let today = new Date()
    return (
      today.getFullYear() +
      '年' +
      Number(today.getMonth() + 1) +
      '月' +
      today.getDate() +
      '日'
    )
  }
  year = () => {
    let today = new Date()
    return today.getFullYear()
  }

  month = e => {
    if (e.target.value > 12) {
      e.target.value = 12
    } else if (e.target.value < 1) {
      e.target.value = 1
    }
    let today = new Date()
    let cardyear = document.querySelector('#cardyear')
    console.log(cardyear.value)
    if (cardyear.value == today.getFullYear()) {
      e.target.min = Number(today.getMonth() + 1)
      if (e.target.value < Number(today.getMonth() + 1)) {
        e.target.value = Number(today.getMonth() + 1)
      }
    } else {
      e.target.min = 1
    }
  }

  day = e => {
    if (e.target.value > 31) {
      e.target.value = 31
    } else if (e.target.value < 1) {
      e.target.value = 1
    }
    let today = new Date()
    let cardmonth = document.querySelector('#cardmonth')
    let cardyear = document.querySelector('#cardyear')
    console.log(cardmonth.value)
    if (
      cardmonth.value == Number(today.getMonth() + 1) &&
      cardyear.value == today.getFullYear()
    ) {
      e.target.min = Number(today.getDate())
      if (e.target.value < Number(today.getDate())) {
        e.target.value = Number(today.getDate())
      }
    } else {
      e.target.min = 1
    }
  }

  test1 = e => {
    console.log(e.target.id)
    console.log(e.target.value.length)
    console.log(e.target.maxLength)
    let input2 = document.querySelector('#input2')
    if (e.target.value.length == e.target.maxLength) {
      input2.focus()
    }
  }

  test2 = e => {
    console.log(e.target.id)
    console.log(e.target.value.length)
    console.log(e.target.maxLength)
    let input3 = document.querySelector('#input3')
    if (e.target.value.length == e.target.maxLength) {
      input3.focus()
    }
  }

  test3 = e => {
    console.log(e.target.id)
    console.log(e.target.value.length)
    console.log(e.target.maxLength)
    let input4 = document.querySelector('#input4')
    if (e.target.value.length == e.target.maxLength) {
      input4.focus()
    }
  }

  keypress = e => {
    e.preventDefault()
  }

  render() {
    return (
      <>
        <div className="cardpay-body">
          <div className="container">
            <div className="row card-rwd-1">
              <div className="col-md-2 cardpay-body-p ">
                <p>訂單標號:</p>
                <p>交易日期:</p>
                <p>交易金額:</p>
                <p>有效期限:</p>
                <p>信用卡卡號:</p>
                <p>後三碼檢查碼:</p>
              </div>
              <div className="col-md-10">
                <p>ASSD0848455</p>
                <p>{this.date()}</p>
                <p>
                  NT$
                  {this.totalPrice() - this.props.cartcoupon[0]['couponprice'] >
                  0
                    ? this.totalPrice() -
                      this.props.cartcoupon[0]['couponprice']
                    : 0}
                </p>
                <div>
                  <input
                    type="number"
                    id="cardyear"
                    min={this.year()}
                    max="2024"
                    onKeyPress={this.keypress}
                  />
                  &emsp;年&emsp;
                  <input
                    type="number"
                    id="cardmonth"
                    onChange={this.month}
                    onKeyPress={this.keypress}
                  />
                  &emsp;月&emsp;
                  <input
                    type="number"
                    id="cardday"
                    min="1"
                    max="31"
                    onChange={this.day}
                    onKeyPress={this.keypress}
                  />
                  &emsp;日&emsp;
                </div>
                <div className="cardpay-body-cardnum">
                  <input
                    type="text"
                    maxLength="4"
                    id="input1"
                    onKeyUp={this.test1}
                  />
                  &emsp;-&emsp;
                  <input
                    type="text"
                    maxLength="4"
                    id="input2"
                    onKeyUp={this.test2}
                  />
                  &emsp;-&emsp;
                  <input
                    type="text"
                    maxLength="4"
                    id="input3"
                    onKeyUp={this.test3}
                  />
                  &emsp;-&emsp;
                  <input type="text" maxLength="4" id="input4" />
                </div>
                <div className="cardpay-body-3num">
                  <input type="text" maxLength="3" />
                  <p>&emsp;卡片後三碼檢查碼</p>
                </div>
                <div className="card-img">
                  <img src="images/card.png" alt="" />
                </div>
              </div>
            </div>

            <div className="card-rwd-2">
              <p>訂單標號:ASSD0848455</p>
              <p>交易日期:{this.date()}</p>
              <p>
                交易金額:NT$
                {this.totalPrice() - this.props.cartcoupon[0]['couponprice'] > 0
                  ? this.totalPrice() - this.props.cartcoupon[0]['couponprice']
                  : 0}
              </p>
              <div>
                有效期限:
                <br />
                <input type="number" min="2020" max="2024" />
                &emsp;年&emsp;
                <input type="number" min="1" max="12" />
                &emsp;月&emsp;
              </div>
              <div className="cardpay-body-cardnum">
                信用卡卡號:
                <br />
                <input
                  type="text"
                  maxLength="4"
                  id="input1"
                  onKeyUp={this.test1}
                />
                &emsp;-&emsp;
                <input
                  type="text"
                  maxLength="4"
                  id="input2"
                  onKeyUp={this.test2}
                />
                &emsp;-&emsp;
                <input
                  type="text"
                  maxLength="4"
                  id="input3"
                  onKeyUp={this.test3}
                />
                &emsp;-&emsp;
                <input type="text" maxLength="4" id="input4" />
              </div>
              <div className="cardpay-body-3num">
                <a>後三碼檢查碼:</a>
                <input type="text" maxLength="3" />
                <p>&emsp;卡片後三碼檢查碼</p>
              </div>
              <div className="card-img">
                <img src="images/card.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    cartcoupon: state.cartcoupon,
    dn: state.dn,
  }
}

export default connect(mapstatetoprops)(Cardbody)

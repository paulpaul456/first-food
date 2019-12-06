import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  selectAll,
  deleteAllItem,
} from '../../../../../action/MyCartaction/car'
import {
  courseselectAll,
  coursedeleteAllItem,
} from '../../../../../action/MyCartaction/course'
import {
  dnselectAll,
  dndeleteAllItem,
} from '../../../../../action/MyCartaction/dn'

class Mycartfooter extends Component {
  selectall(e) {
    //選擇全部
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    console.log(car)
    let isselectall = e.target.checked
    this.props.dispatch(selectAll(isselectall, car))
    this.props.dispatch(courseselectAll(isselectall, course))
    this.props.dispatch(dnselectAll(isselectall, dn))
  }
  all() {
    return (
      this.props.car.every(e => e.checked) ==
        this.props.course.every(e => e.checked) &&
      this.props.course.every(e => e.checked) ==
        this.props.dn.every(e => e.checked) &&
      this.props.course.every(e => e.checked) == true
    ) //如果每一個E的CHECKED為TRUE 才返回TRUE
  }

  counts() {
    //計算總數量
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    let count = 0
    let coursecount = 0
    let dncount = 0
    car.forEach(e => {
      count += Number(e.quantity)
    })
    course.forEach(e => {
      coursecount += Number(e.quantity)
    })
    dn.forEach(e => {
      dncount += Number(e.quantity)
    })
    return count + coursecount + dncount
  }
  mount() {
    //計算總價
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

  itemcount() {
    //計算有幾"項"產品,不是數量
    let cartproject = this.props.car
    let courseproject = this.props.course
    let dnproject = this.props.dn
    return cartproject.length + courseproject.length + dnproject.length
  }

  deleteAll = () => {
    let car = this.props.car
    let course = this.props.course
    let dn = this.props.dn
    console.log(car)
    confirmAlert({
      title: '提示',
      message: '確定要刪除所選項目嗎?',
      buttons: [
        {
          label: '確定',
          onClick: () => {
            this.props.dispatch(deleteAllItem(car))
            this.props.dispatch(coursedeleteAllItem(course))
            this.props.dispatch(dndeleteAllItem(dn))
          },
        },
        {
          label: '取消',
          onClick: () => {},
        },
      ],
    })
    // this.props.dispatch(deleteAllItem(car))
    // this.props.dispatch(coursedeleteAllItem(course))
    // this.props.dispatch(dndeleteAllItem(dn))
  }
  render() {
    return (
      <>
       <NavLink to="/member/collection" className="checkmycollect">
         查看我的收藏
       </NavLink>
        <div className="cart-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-7 cart-footer-div1">
                <div className="cart-footer-left-0">
                  <input
                    onChange={e => {
                      this.selectall(e)
                    }}
                    type="checkbox"
                    name=""
                    id=""
                    checked={this.all()}
                    className="checkall"
                  />{' '}
                  全部選取
                </div>

                <div className="cart-footer-left-1" onClick={this.deleteAll}>
                  整批刪除
                </div>
              </div>

              <div className="col-md-5">
                <div className="cart-footer-right">
                  <div className="cart-footer-text">
                    共<p className="cart-footer-nt">{this.itemcount()}</p>
                    項產品,數量
                    <p className="cart-footer-nt">{this.counts()}</p>
                    個,金額
                    <p className="cart-footer-nt">{this.mount()}</p>元
                  </div>
                </div>
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
    car: state.car,
    course: state.course,
    dn: state.dn,
  }
}

export default connect(mapstatetoprops)(Mycartfooter)

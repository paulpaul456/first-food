import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getdata } from '../../../../action/MyCartaction/car'
import { getCourseData } from '../../../../action/MyCartaction/course'
import { getdnData } from '../../../../action/MyCartaction/dn'
import Mycartheader from './components/Mycartheader'
import Mycartwrapheader from './components/Mycartwrapheader'
import Mycartfooter from './components/Mycartfooter'
import Mycartbottom from './components/Mycartbottom'
import Mycartitem from './components/Mycartitem'
import Mycourse from './components/Mycourse'
import Mydn from './components/Mydn'
// import '../../style/Mycart.css'
import '../../../../assets/scss/main/cartstyle/Mycart.scss' //路徑一定要最短路徑
import { NavLink } from 'react-router-dom'
import { func } from 'prop-types'

class Mycart extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    let custermerId = this.props.loginReducer.member[0]['customer_id']
    this.props.dispatch(getdata(custermerId))
    this.props.dispatch(getCourseData(custermerId))
    this.props.dispatch(getdnData(custermerId))
  }

  render() {
  
    console.log(this.props.car)
    console.log(this.props.course)
    console.log(this.props.dn)
    console.log(this.props.loginReducer.member[0]['customer_id'])
    if (
      this.props.car.length > 0 ||
      this.props.course.length > 0 ||
      this.props.dn.length > 0
    ) {
      return (
        <>
          <section className="mycart ">
            <Mycartheader />
              
            <div className="container">
              <Mycartwrapheader />

              {this.props.car.map(e => {
                return <Mycartitem e={e} key={e.fm_goods_cart_id} />
              })}
              {this.props.course.map(e => {
                return <Mycourse e={e} key={e.course_cart_id} />
              })}

              {this.props.dn.map(e => {
                return <Mydn e={e} key={e.dn_goods_cart_id} />
              })}

              <Mycartfooter />

              <Mycartbottom />
            </div>
          </section>
        </>
      )
    } else {
      return (
        <>
          <h1>您的購物車還沒有任何商品哦! </h1>
          <NavLink to="/" className="prev">
            點擊返回首頁
          </NavLink>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
    course: state.course,
    dn: state.dn,
    loginReducer: state.loginReducer,
    customer_id: state.loginReducer.member[0],
  }
}

export default connect(mapstatetoprops)(Mycart)

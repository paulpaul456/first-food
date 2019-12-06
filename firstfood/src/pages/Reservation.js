import React, { useState } from 'react'
import Swal from '@sweetalert/with-react'
import ReservationList from '../components/main/reservationMain/ReservationList'
import ReservationButton from '../components/main/reservationMain/ReservationButton'
import ReservationRules from '../components/main/reservationMain/ReservationRules'
import ReservationCalendar from '../components/main/reservationMain/ReservationCalendar'
import { connect } from 'react-redux'
import {
  loadSingleRestaurantAsync,
  orderListShowReservation,
  readCartsBeforeBookAsync,
  updateReservationToCart,
  reservationShowCalendar,
  reservationShowMap,
} from '../action'
import ReservationMap from '../components/main/reservationMain/ReservationMap'

const reservationAlert = () => (Swal({
  icon: 'success',
  text: `加入成功`,
  button: false,
  timer: 2500,
}))

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '請選擇日期',
      time: '11:00~14:00',
      quantity: [],
      person: 1,
      location: '',
      smallDate:'',
      smallLocation: '',
    }
  }

  componentDidMount() {
    // console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let prevQ = []
    if (this.state.quantity.length == 0) {
      this.props.dn_cart_data.forEach(c => prevQ[c.dn_goods_cart_id] = c.quantity)
      this.setState({ quantity: [...prevQ] })
    }
    // console.log('componentDidUpdate')
    // const restaurantData = this.props.restaurant[0]
    // console.log('restaurantData',typeof restaurantData)
    // if(restaurantData.cookhour){
    //   const cookhour = JSON.parse(restaurantData.cookhour)
    //   if(cookhour.some(e=> e==this.state.time) ){
    //     console.log(this.state.time)
    //     console.log('等於')
    //     console.log(cookhour)
    //   }else{
    //     console.log(this.state.time)
    //     console.log('不等於')
    //     console.log(cookhour)
    //   }
    // }

  }

  componentWillUnmount() {
  }

  setQuantity = (operate, itemId, prevQuantity) => {
    let prevQ = []
    if (this.state.quantity.length == 0) {
      this.props.dn_cart_data.forEach(c => prevQ[c.dn_goods_cart_id] = c.quantity)
    } else {
      prevQ = this.state.quantity
    }
    if (operate == 1) {
      if (prevQuantity <= 9) {
        prevQ[itemId] = +prevQ[itemId] + 1
        // console.log('[1]',this.state.quantity)
        // console.log('[1]',prevQ)
        this.setState({ quantity: [...prevQ] })
      }
    }
    if (operate == -1) {
      if (prevQuantity >= 2) {
        prevQ[itemId] = +prevQ[itemId] - 1
        // console.log('[-1]',this.state.quantity)
        // console.log('[-1]',prevQ)
        this.setState({ quantity: [...prevQ] })
      }
    }
  }
  setDate = (date) => {
    this.clearInput('smallDate')
    this.setState({
      date: date,
    }, () => {
      console.log(this.state)
    })
  }
  setTime = (time) => {
    console.log('time', time)
    this.setState({
      time: time,
    }, () => {
      console.log(this.state.time)
    })
  }
  setPerson = (person) => {
    console.log('person', person)
    if (person == 1) {
      if (this.state.person <= 9) {
        this.setState({
          person: +this.state.person + person,
        }, () => {
          console.log(this.state.person)
        })
      }
    }

    if (person == -1) {
      if (this.state.person >= 2) {
        this.setState({
          person: +this.state.person + person,
        }, () => {
          console.log(this.state.person)
        })
      }
    }

  }
  setLocation = (location) => {
    this.clearInput('smallLocation')
    this.setState({
      location: location,
    }, () => {
      console.log('location', this.state.location)
    })
  }
  clearInput = (state)=>{
    this.setState({
      [state]:''
    })
  }
  updateToCart = () => {
    // console.log('加入購物車', this.state)
    const { book, customer_id, dn_cart_data } = this.props
    const { date, time, person, location } = this.state
    let cookType
    dn_cart_data.forEach(c => {
      book.forEach(i => {
          if (i == c.dn_goods_cart_id) {
            cookType = c.cooktype
          }
        },
      )
    })
    if (this.state.date != '請選擇日期') {
      if (cookType == '內用') {
        this.props.updateReservationToCart(customer_id,
          {
            cartId: book,
            bookWeekday: date,
            bookTime: time,
            bookPerson: person,
          }, reservationAlert)
        // this.props.readCartsBeforeBookAsync(customer_id)
        this.props.orderListShowReservation(!this.props.isShow)
      }

      if (cookType == '外送') {
        // console.log('外送')
        if (this.state.location != '') {
          this.props.updateReservationToCart(customer_id,
            {
              cartId: book,
              bookWeekday: date,
              bookTime: time,
              bookPerson: location,
            }, reservationAlert)
          // this.props.readCartsBeforeBookAsync(customer_id)
          this.props.orderListShowReservation(!this.props.isShow)
        } else {
          this.setState({
            smallLocation:'請輸入並選擇地址'
          })
        }
      }
    } else {
      this.setState({
        smallDate:'請選擇日期'
      })
    }


  }

  //渲染
  render() {

    let cookType = '內用'

    // console.log(this.props)
    // console.log('Reservation',this.props)
    if (this.props.book instanceof Array) {
      if (this.props.book.length == 0) {
        // console.log('清單沒東西')
        return (<></>)
      } else {
        // console.log('清單有東西')
        const { book, dn_cart_data } = this.props
        dn_cart_data.forEach(c => {
          book.forEach(i => {
              if (i == c.dn_goods_cart_id) {
                cookType = c.cooktype
              }
            },
          )
        })
      }
    } else {
      // console.log('清單沒東西且沒按過勾選')
      return (<></>)
    }
    // console.log('Reservation',this.props.book)
    // console.log('Reservation',this.props.dn_cart_data)
    return (
      <div className={`reservationContainer ${this.props.isShow ? '' : 'active'}`}>
        <div className="reservationMain">
          <ReservationList {...this.props} setQuantity={this.setQuantity} setPerson={this.setPerson}
                           setTime={this.setTime} setLocation={this.setLocation} date={this.state.date}
                           time={this.state.time} smallDate={this.state.smallDate} smallLocation={this.state.smallLocation}
                           person={this.state.person} quantity={this.state.quantity} />
          <div
            className={`row flex-nowrap  ${cookType == '內用' ? 'justify-content-center' : 'justify-content-between'}`}>
            <div className={`reservationCalendar ${this.props.calendarIsShow ? '' : 'active'}`}
                 style={cookType == '內用' ? { transform: 'translateX(-153%)' } : {}}>
              <ReservationCalendar {...this.props} date={this.state.date} setDate={this.setDate}/>
            </div>
            {cookType == '外送' ?
              <figure className={`reservationMap ${this.props.mapIsShow ? '' : 'active'}`}>
                <ReservationMap/>
              </figure>
              : ''}
          </div>
          <div className="reservationFoot row justify-content-around">
            <div className="col-8 pl-5 row justify-content-start"><ReservationRules/></div>
            <div className="col-4 row justify-content-around align-items-center">
              <ReservationButton onClick={this.updateToCart} text={'加入購物車'} color={'#C73E3A'}/>
              <ReservationButton onClick={() => this.props.orderListShowReservation(!this.props.isShow)}
                                 text={'取消'} color={'#0089A7'}/>
            </div>
          </div>
        </div>
        <div className="backBlock"></div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    isShow: store.ui.componentUi.web.orderList.reservationIsShow,
    calendarIsShow: store.ui.componentUi.web.reservation.calendarIsShow,
    mapIsShow: store.ui.componentUi.web.reservation.mapIsShow,
  }
}
export default connect(mapStateToProps, {
  orderListShowReservation,
  updateReservationToCart,
  readCartsBeforeBookAsync,
  reservationShowCalendar,
  reservationShowMap,
})(Reservation)

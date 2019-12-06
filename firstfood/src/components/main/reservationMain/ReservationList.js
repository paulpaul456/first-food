import React, { useEffect, useState } from 'react'
import { reservationShowCalendar } from '../../../action'
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoBox,
  StandaloneSearchBox,
} from '@react-google-maps/api'

class ReservationList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open:false,
    }
  }
  
 
  
  // { cooktype: "內用"
  //  dinner_name: "煙燻鴨胸義大利麵"
  //  dn_goods_cart_id: 1
  //  ingredient: "鴨肉"
  //  product: "多汁櫻桃鴨胸"
  //  quantity: 1
  //  restaurant: 1
  //  restaurant_name: "義麵屋"
  //  special_request: "無"
  //  spicy: 0 }
  onPlaceChange=(e)=> {
      const {formatted_address}=this.searchBox.getPlaces()[0]
    this.props.setLocation(formatted_address)
    }

  searchInputBlur=(e)=>{
    // console.log('searchInputBlur',e.target.value)
    this.props.setLocation(e.target.value)
  }
  searchInputChange = e => {
    // console.log(e.target.value)
    this.setState({
      searchInput: e.target.value,
    })
  }
  render(){
  const {
    quantity, time, date, setLocation,
    setQuantity, setPerson, person,
    setTime,smallLocation,smallDate, dn_cart_data, book,
    restaurant, calendarIsShow,
    mapIsShow,
    reservationShowCalendar,
    reservationShowMap,
  } = this.props
    const {open} = this.state
    const newData = dn_cart_data.filter(item => book.some(num => num == item.dn_goods_cart_id))
    const restaurantData = restaurant[0]
    const cookhour = JSON.parse(restaurantData.cookhour)
    let cookType
    dn_cart_data.forEach(c => {
      book.forEach(i => {
          if (i == c.dn_goods_cart_id) {
            cookType = c.cooktype
          }
        },
      )
    })
  return (
    <div className={'reservationList'}>
      <h1 className="text-center">選擇日期</h1>
      <h4>點餐列表</h4>
      <div className="tableListHead row justify-content-around">
        <h5>商品</h5>
        {cookType == '內用' ? <h5>人數</h5> : ''}
        <h5>日期</h5>
        <h5>時段</h5>
        {cookType == '外送' ? <h5>地址</h5> : ''}
      </div>
      <div className="tableListBody row justify-content-around align-items-center">
        <div className="col-3 listText">
          {newData.map((item, index) => <p key={index} className="text-center">{item.dinner_name}</p>)}
        </div>
        {cookType == '內用' ?
          <div className="col-3 listNum">
            <div className="numSelect row justify-content-center align-items-center ">
              <p>{person}</p>
              <div className="upDown row flex-column ml-3">
                <i className="fas fa-sort-up" onClick={() => setPerson(1)}/>
                <i className="fas fa-sort-down" onClick={() => setPerson(-1)}/>
              </div>
            </div>
          </div> : ''}
        <div className="dateSelect col-3 text-center position-relative" onClick={() => {
          this.setState({open: false})
          reservationShowMap(!mapIsShow)
          reservationShowCalendar(!calendarIsShow)
        }}>
          <p>{date == '請選擇日期' ? '請選擇日期' : date.getFullYear() + '-' + (+date.getMonth() + 1) + '-' + date.getDate()}</p>
          <label htmlFor="" className="position-absolute text-center" style={{top:'26px',color:'red',transform:'translateX(-50%)'}}>{smallDate}</label>
        </div>
        <div className="timeSelect col-3 text-center position-relative">
          <div onClick={() => {
            // setTime(time)
            this.setState({open: !this.state.open})
            reservationShowCalendar(false)
          }}>
            <p>{time}</p>
          </div>
          <div className={`position-absolute timeSelectDown ${this.state.open ? '' : 'active'}`} style={{ top: `26px` }}
               onClick={() => {
                 reservationShowCalendar(false)
               }}
          >
            {cookhour.filter(value => value != time).map((item, index) => (<div key={index}
                                                                                onClick={() => {
                                                                                  this.setState({open: !this.state.open})
                                                                                  setTime(item)
                                                                                  reservationShowCalendar(false)
                                                                                }}>
                {item}
              </div>),
            )
            }
          </div>
        </div>
        {cookType == '外送' ? <div className="addressSelect col-3 text-center position-relative"
            // onClick={() => {
            // reservationShowCalendar(!calendarIsShow)
            // reservationShowMap(!mapIsShow)}}
          >
            <LoadScript
              id="script-loader"
              googleMapsApiKey="AIzaSyBhMVNfUyclbT1PgoG4RJlBagESlkv0-bM"
              libraries={['places']}>
              <StandaloneSearchBox
                onLoad={ref => (this.searchBox = ref)}
                onPlacesChanged={
                  this.onPlaceChange
                  // setLocation
                  // lat = this.searchBox.getPlaces()[0].geometry.location.lat()
                  // lng = this.searchBox.getPlaces()[0].geometry.location.lng()
                }
              >
                <input
                  type="text"
                  placeholder="請輸入地址"
                  style={{
                    boxSizing: `border-box`,
                    width: `100%`,
                    height: `26px`,
                    padding: `0 12px`,
                    border:`1px solid #c5c5c5`,
                    // borderRadius: `3px`,
                    // boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    backgroundColor:`transparent`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    textAlign:'center',
                    // marginLeft: '-120px',
                  }}
                  // onChange={(result)=>{console.log('result',result)}}
                  onFocus={()=>{
                    reservationShowCalendar(false)
                    this.setState({open: false})
                  }}
                  onBlur={this.searchInputBlur}
                  // value={
                  //   this.state.searchName
                  //     ? this.state.searchName
                  //     : this.state.searchInput
                  // }
                />
              </StandaloneSearchBox>
            </LoadScript>
            <label htmlFor="" className="position-absolute text-center" style={{top:'26px',color:'red',transform:'translateX(-50%)'}}>{smallLocation}</label>
          </div>
          //<div className="addressSelect col-3 text-center" onClick={() => {
          // reservationShowCalendar(!calendarIsShow)
          // reservationShowMap(!mapIsShow)
          // }}>
          //     <p>台北市大安區和平東路</p>
          //  </div>
          : ''}
      </div>
      <div className="tableListLine"></div>
    </div>
  )
}
  
}

export default ReservationList

import React, { Component } from 'react'

import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  InfoBox,
  StandaloneSearchBox,
  Rectangle,
} from '@react-google-maps/api'
import RestaurantNav from './RestaurantNav'
import RestaurantCard from './RestaurantCard'

import { connect } from 'react-redux'
import {
  loadRestaurantAsync,
  loadRestaurantForCookAsync,
  handleMapSearchAsync,
  handleMapDisplayAsync,
  setDistance,
  setCenter,
} from '../../../action/index'
import { thisExpression, conditionalExpression } from '@babel/types'
import { NONAME } from 'dns'

// const ScriptLoaded = require('../../docs/ScriptLoaded').default

const exampleMapStyles = [
  {
    stylers: [
      {
        saturation: -100,
      },
      {
        gamma: 1,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.place_of_worship',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'water',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: 50,
      },
      {
        gamma: 0,
      },
      {
        hue: '#50a5d1',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#333333',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text',
    stylers: [
      {
        weight: 0.5,
      },
      {
        color: '#333333',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.icon',
    stylers: [
      {
        gamma: 1,
      },
      {
        saturation: 50,
      },
    ],
  },
]

let labelIndex = 0

let icon = {
  url: '../../../assets/images/whiteman3.png',
  anchor: { x: 10, y: 100 },
  scaledSize: { width: 30, height: 100 },
  labelOrigin: { x: 15, y: 10 },
  className: 'test',
}

let test = false

let lat = 0
let lng = 0

let hasRestaurant = ''
let array = []
let what = 0

class MyComponents extends Component {
  constructor() {
    super()
    this.state = {
      foodclass: '',
      lat: 0,
      lng: 0,
      distance: 0.1,
      searchInput: '',
      searchName: '',
      search: false,
      hasRestaurant: hasRestaurant,
      focus: false,
      key: 0,
    }
    this.map = React.createRef()
  }

  componentDidMount() {
    console.log('didmount')
    if (window.innerWidth <= 500) {
      this.props.dispatch(handleMapDisplayAsync(true, false))
    }

    // let sizeChange = window.matchMedia('(max-width: 375px)')
    // sizeChange.addListener(this.testFunc)

    navigator.geolocation.getCurrentPosition(this.successHandler)
    //this.handleRenew()
    // console.log(this.state.lat)

    // let w = 8
    // let cookday = 8
    // let foodclass = 0
    // let cooktype = 0

    // console.log(this.props)

    // if (
    //   this.props.name &&
    //   this.props.name !== '中式' &&
    //   this.props.name !== '西式'
    // ) {
    //   let name = this.props.name
    //   console.log('來自小農市集')
    //   this.props.dispatch(
    //     loadRestaurantForCookAsync(w, cookday, name, foodclass, cooktype)
    //   )
    // } else if (this.props.name === '中式' || this.props.name === '西式') {
    //   console.log('來自首頁左右拉')
    //   let foodclass = this.props.name
    //   this.props.dispatch(loadRestaurantAsync(w, cookday, foodclass, cooktype))
    // } else {
    //   console.log('來自美食地圖')
    //   this.props.dispatch(loadRestaurantAsync(w, cookday, foodclass, cooktype))
    // }
  }

  testFunc = e => {
    // console.log(e.matches)
    if (e.matches) {
      this.props.dispatch(handleMapDisplayAsync(true, false))
    } else {
      this.props.dispatch(handleMapDisplayAsync(false, true))
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps)
    // console.log(this.props)
    // if (window.innerWidth < 500) {
    //   this.props.dispatch(handleMapDisplayAsync(true, true))
    // }
    console.log(prevProps)
    console.log(this.props)
    if (prevProps.name !== this.props.name) {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          8,
          8,
          0,
          0,
          -1,
          -1,
          ''
        )
      )
    }
    if (prevProps.center.lat !== this.props.center.lat) {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          8,
          8,
          0,
          this.props.cooktype,
          -1,
          -1,
          ''
        )
      )
    }
    if (prevProps.distance !== this.props.distance) {
      if (this.props.name) {
        this.props.dispatch(
          loadRestaurantForCookAsync(
            this.props.center.lat,
            this.props.center.lng,
            this.props.distance,
            8,
            8,
            this.props.name,
            0,
            0,
            -1,
            -1,
            ''
          )
        )
      } else {
        this.props.dispatch(
          loadRestaurantAsync(
            this.props.center.lat,
            this.props.center.lng,
            this.props.distance,
            8,
            8,
            0,
            this.props.cooktype,
            -1,
            -1,
            ''
          )
        )
      }
    }

    let sizeChange = window.matchMedia('(max-width: 375px)')
    sizeChange.addListener(this.testFunc)
  }

  handleRenew = () => {
    navigator.geolocation.getCurrentPosition(this.successHandler)

    let name = 0
    if (this.props.oldName) {
      name = this.props.oldName
      console.log('近來' + name)
    }
    this.setState({
      searchName: '',
      search: false,
      searchInput: '',
    })

    if (name) {
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          8,
          8,
          name,
          0,
          0,
          -1,
          -1,
          ''
        )
      )
    } else {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          8,
          8,
          0,
          0,
          -1,
          -1,
          ''
        )
      )
    }
  }

  successHandler = position => {
    // console.log(this.props.name)

    this.props.dispatch(
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    )

    let w = 8
    let cookday = 8
    let foodclass = 0
    let cooktype = 0
    let number1 = -1
    let number2 = -1
    let vegetarian = ''

    if (
      this.props.name &&
      this.props.name !== '中式' &&
      this.props.name !== '西式'
    ) {
      let name = this.props.name
      console.log('來自小農市集')
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype
        )
      )
    } else if (this.props.name === '中式' || this.props.name === '西式') {
      console.log('來自首頁左右拉')
      let foodclass = this.props.name
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else {
      console.log('來自美食地圖')
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }

    // lat = position.coords.latitude
    // lng = position.coords.longitude
    // console.log(lat)
  }

  handleMarkerClick = location => event => {
    // console.log(location)
    let infobox = document.getElementsByClassName(location.name)
    console.log(infobox)
    infobox[0].style.visibility = 'visible'
  }

  handleCardHover = key => () => {
    this.setState({
      key: key,
    })
  }

  toggleOpenWeekClick = () => {
    test = !test
    let name = ''

    if (this.props.name !== '西式' && this.props.name !== '中式') {
      name = this.props.oldName
    }

    let foodclass = this.props.foodclass
    let cookday = this.props.cookday
    let w = this.props.weekday
    let cooktype = this.props.cooktype
    // console.log(name)
    // console.log(foodclass)

    let d = new Date()

    if (test && name) {
      console.log('checked')
      w = d.getDay()
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype
        )
      )
    } else if (name) {
      w = 8
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype
        )
      )
    } else if (test) {
      w = d.getDay()
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype
        )
      )
    } else {
      w = 8
      console.log(foodclass)
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype
        )
      )
    }
  }

  toggleCooktimeClick = number => event => {
    // this.props.dispatch(loadRestaurantAsync())
    console.log('選擇代客煮日')
    let w = this.props.weekday
    let name = ''

    if (this.props.name !== '西式' && this.props.name !== '中式') {
      name = this.props.oldName
    }

    let cookday = number
    let cookshow = event.currentTarget.textContent
    let foodclass = this.props.foodclass
    let cooktype = this.props.cooktype
    let number1 = this.props.number1
    let number2 = this.props.number2
    let vegetarian = this.props.vegetarian

    // console.log(cookday)
    // console.log(foodclass)
    // console.log(cookday + cookshow)
    this.setState({
      cookshow: cookshow,
    })

    if (name) {
      // console.log('不該進來')
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }
  }

  handlefoodclassClick = (foodclass, cooktype) => event => {
    event.stopPropagation()

    let w = this.props.weekday
    let cookday = this.props.cookday
    let number1 = this.props.number1
    let number2 = this.props.number2
    let vegetarian = this.props.vegetarian
    let name = ''
    // console.log(this.props)

    // 不是從首頁左右拉來的
    if (
      this.props.oldName ||
      (this.props.name !== '西式' && this.props.name !== '中式')
    ) {
      // console.log('我')
      name = this.props.oldName
    }

    // console.log(foodclass)
    // console.log(cooktype)
    // console.log(name)
    // console.log(event.target.innerHTML)

    // 點擊中式西式
    if (!name && event.target.innerHTML === this.props.foodclass) {
      // console.log('沒食材一')
      let foodclass = 0
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (name && event.target.innerHTML === this.props.foodclass) {
      console.log('有食材一')
      let foodclass = 0
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (
      (!name && event.target.innerHTML === '中式') ||
      (!name && event.target.innerHTML === '西式')
    ) {
      // console.log('沒食材二')
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (
      (name && event.target.innerHTML === '中式') ||
      (name && event.target.innerHTML === '西式')
    ) {
      console.log('有食材二')
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }

    // 點擊取消內用外送
    if (
      !name &&
      this.props.cooktype &&
      event.target.innerHTML === this.props.cooktype
    ) {
      // console.log('沒食材一')
      let cooktype = 0
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (name && event.target.innerHTML === this.props.cooktype) {
      console.log('有食材一')
      let cooktype = 0
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (
      (!name && event.target.innerHTML === '內用') ||
      (!name && event.target.innerHTML === '外送')
    ) {
      // console.log('沒食材二')
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else if (
      (name && event.target.innerHTML === '內用') ||
      (name && event.target.innerHTML === '外送')
    ) {
      console.log('有食材二')
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }
  }

  handlePctClick = (number1, number2) => event => {
    let w = this.props.weekday
    let cookday = this.props.cookday
    let foodclass = this.props.foodclass
    let cooktype = this.props.cooktype
    let name = ''
    let vegetarian = this.props.vegetarian
    // console.log(this.props)

    // 不是從首頁左右拉來的
    if (
      this.props.oldName ||
      (this.props.name !== '西式' && this.props.name !== '中式')
    ) {
      // console.log('我')
      name = this.props.oldName
    }

    if (!name) {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else {
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }
  }

  hanglevegetarianClick = vegetarian => event => {
    let w = this.props.weekday
    let cookday = this.props.cookday
    let foodclass = this.props.foodclass
    let cooktype = this.props.cooktype
    let name = ''
    let number1 = this.props.number1
    let number2 = this.props.number2
    // console.log(this.props)

    // 不是從首頁左右拉來的
    if (
      this.props.oldName ||
      (this.props.name !== '西式' && this.props.name !== '中式')
    ) {
      // console.log('我')
      name = this.props.oldName
    }

    if (!name) {
      this.props.dispatch(
        loadRestaurantAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    } else {
      this.props.dispatch(
        loadRestaurantForCookAsync(
          this.props.center.lat,
          this.props.center.lng,
          this.props.distance,
          w,
          cookday,
          name,
          foodclass,
          cooktype,
          number1,
          number2,
          vegetarian
        )
      )
    }
  }

  testSearchBox = e => {
    // console.log('近來搜尋')
    // console.log(this.searchBox.getPlaces())
    let lat = this.searchBox.getPlaces()[0].geometry.location.lat()
    let lng = this.searchBox.getPlaces()[0].geometry.location.lng()
    // console.log(lat)

    this.props.dispatch(setCenter({ lat: lat, lng: lng }))
    this.setState({
      // searchInput: '',
      search: true,
      searchName: this.searchBox.getPlaces()[0].name,
    })
    if (this.props.cooktype === '外送') {
      this.props.dispatch(setDistance(0.05))
    }
  }

  searchInputChange = e => {
    // console.log(e.target.value)
    this.setState({
      searchInput: e.target.value,
    })
  }

  searchInputFocus = e => {
    array = []
    // console.log(array.length)
    this.setState({
      search: false,
      searchInput: '',
      searchName: '',
      focus: true,
    })
  }

  // searchInputBlur = e => {
  //   this.setState({
  //     searchInput: '',
  //   })
  // }

  handleCloseClick = () => {
    console.log('close')
  }

  handleDistance = distance => () => {
    this.props.dispatch(setDistance(distance))
  }

  render() {
    // console.log(this.props)
    labelIndex = 0

    if (!this.props.restaurant) {
      return <>資料載入中</>
    }

    return (
      <>
        {/* {console.log(this.props)} */}
        <div className="map_wrap">
          <LoadScript
            id="script-loader"
            googleMapsApiKey=""
            libraries={['places']}
          >
            <RestaurantNav
              handlePopularClick={this.handlePopularClick}
              toggleOpenWeekClick={this.toggleOpenWeekClick}
              toggleCooktimeClick={this.toggleCooktimeClick}
              handlefoodclassClick={this.handlefoodclassClick}
              handleRenew={this.handleRenew}
              cookshow={this.state.cookshow}
              handlePctClick={this.handlePctClick}
              hanglevegetarianClick={this.hanglevegetarianClick}
              handleDistance={this.handleDistance}
            />
            <div id="mapwrap">
              <div
                className={
                  this.props.map_display
                    ? this.props.RWD
                      ? 'list map_mode'
                      : 'list'
                    : this.props.RWD
                    ? 'list ball_RWD'
                    : 'list'
                }
              >
                <RestaurantCard
                  search={this.state.search}
                  hasRestaurant={
                    this.state.search ? this.state.hasRestaurant : '未搜尋'
                  }
                  handleCardHover={this.handleCardHover}
                />
              </div>

              <GoogleMap
                id="example_map"
                mapContainerStyle={
                  this.props.map_display
                    ? this.props.RWD
                      ? { width: '100vw' }
                      : {
                          height: '100vh',
                          width: '60vw',
                        }
                    : this.props.RWD
                    ? {
                        width: '0vw',
                      }
                    : {
                        height: '100vh',
                        width: '60vw',
                      }
                }
                zoom={
                  this.state.search && this.props.hasRestaurant
                    ? this.props.distance < 0.1
                      ? this.props.distance == 0.05
                        ? 14
                        : 15
                      : 14
                    : this.props.distance < 0.1
                    ? 15
                    : 13
                }
                center={(() => {
                  console.log(this.state.lat, this.state.lng)
                  return {
                    lat: this.props.center.lat,
                    lng: this.props.center.lng,
                  }
                })()}
                // onCenterChanged={() => {
                //   console.log('center change')
                // }}
                options={{
                  styles: exampleMapStyles,
                }}
                ref={this.map}
                onBoundsChanged={() => {
                  console.log(this.map.current)
                }}
              >
                <StandaloneSearchBox
                  onLoad={ref => (this.searchBox = ref)}
                  onPlacesChanged={
                    // () => console.log(this.searchBox.getPlaces())
                    this.testSearchBox
                    // lat = this.searchBox.getPlaces()[0].geometry.location.lat()
                    // lng = this.searchBox.getPlaces()[0].geometry.location.lng()
                  }
                >
                  <input
                    type="text"
                    placeholder={
                      this.props.cooktype === '外送'
                        ? '請輸入外送地址'
                        : '請輸入餐廳名稱或景點'
                    }
                    style={
                      this.props.RWD
                        ? {
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `200px`,
                            height: `40px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            top: '7%',
                            left: '3%',
                          }
                        : {
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `400px`,
                            height: `50px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            top: '1%',
                            left: '30%',
                            // marginLeft: '-120px',
                          }
                    }
                    onChange={this.searchInputChange}
                    onFocus={this.searchInputFocus}
                    onBlur={this.searchInputBlur}
                    value={this.state.searchInput}
                  />
                </StandaloneSearchBox>
                {this.props.restaurant > 0
                  ? this.props.restaurant.map(el => {
                      if (el.name.search(this.props.hasRestaurant) == -1) {
                        what = 0
                      } else {
                        what = 1
                      }
                    })
                  : ''}

                {what == 0 ? (
                  <Marker
                    key="0"
                    position={{
                      lat: this.props.center.lat,
                      lng: this.props.center.lng,
                    }}
                  ></Marker>
                ) : (
                  ''
                )}

                <MarkerClusterer
                  imagePath=""
                  options={{
                    imagePath: '',
                  }}
                >
                  {clusterer =>
                    this.props.restaurant &&
                    this.props.restaurant.map((location, i) => {
                      if (
                        this.state.search &&
                        /* this.props.hasRestaurant !== location.name &&
                        this.state.searchName.search(location.name) > -1 */
                        this.props.restaurant.length > 0
                      ) {
                        /* console.log('有找到') */
                        this.props.dispatch(
                          handleMapSearchAsync(this.state.searchInput)
                        )
                      } else if (this.state.search) {
                        array.push(location.name)
                        /* console.log('沒找到') */
                        if (array.length === this.props.restaurant.length) {
                          this.props.dispatch(handleMapSearchAsync(''))
                        }
                      }

                      labelIndex++

                      let label = {
                        text: labelIndex.toString(),
                        color: '#C73E3A',
                        fontSize: '12px',
                      }

                      return (
                        <Marker
                          // onLoad={Marker => {
                          //   console.log('Marker: ', Marker)
                          // }}
                          onClick={this.handleMarkerClick(location)}
                          key={i + 1}
                          position={{
                            lat: Number(location.lat),
                            lng: Number(location.lng),
                          }}
                          clusterer={clusterer}
                          label={label}
                          draggable={false}
                          icon={icon}
                          options={{
                            labelAnchor: { x: 100, y: -60 },
                          }}
                          animation={this.state.key == i + 1 ? 2 : null}
                        >
                          <InfoBox
                            onLoad={infoBox => {
                              console.log(infoBox)
                            }}
                            options={{
                              closeBoxMargin: '0px',
                              closeBoxURL: '',
                              enableEventPropagation: true,
                              isHidden:
                                this.state.searchName.search(location.name) !==
                                  -1 ||
                                this.state.searchName.search(
                                  location.address
                                ) !== -1
                                  ? false
                                  : true,
                              boxClass: location.name,
                            }}
                            position={{
                              lat: Number(location.lat),
                              lng: Number(location.lng),
                            }}
                            onCloseClick={() => {
                              console.log('close')
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: 'pink',
                                opacity: 0.8,
                                padding: 12,
                                borderRadius: '5px',
                              }}
                            >
                              <div
                                style={{ fontSize: 16, fontColor: `#08233B` }}
                              >
                                <img
                                  src={`/assets/images/restaurant/${location.my_file}`}
                                  alt=""
                                  width="80px"
                                  height="50px"
                                />
                                {location.name}
                                <br />
                                {location.address}
                              </div>
                            </div>
                          </InfoBox>
                        </Marker>
                      )
                    })
                  }
                </MarkerClusterer>
              </GoogleMap>
            </div>
          </LoadScript>
        </div>
      </>
    )
  }
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  // console.log(store)
  if (store.RestaurantReducer.data.length >= 0)
    return {
      center: store.RestaurantReducer.center,
      distance: store.RestaurantReducer.distance,
      restaurant: store.RestaurantReducer.data,
      number: store.RestaurantReducer.NUMBER,
      cookday: store.RestaurantReducer.cookday,
      weekday: store.RestaurantReducer.weekday,
      foodclass: store.RestaurantReducer.foodclass,
      cooktype: store.RestaurantReducer.cooktype,
      oldName: store.RestaurantReducer.oldName,
      number1: store.RestaurantReducer.number1,
      number2: store.RestaurantReducer.number2,
      vegetarian: store.RestaurantReducer.vegetarian,
      hasRestaurant: store.RestaurantReducer.hasRestaurant,
      RWD: store.DinnerProductReducer.RWD,
      map_display: store.DinnerProductReducer.map_display,
    }

  return {
    center: store.RestaurantReducer.center,
    distance: store.RestaurantReducer.distance,
    restaurant: 0,
    cookday: store.RestaurantReducer.cookday,
    weekday: store.RestaurantReducer.weekday,
    foodclass: store.RestaurantReducer.foodclass,
    cooktype: store.RestaurantReducer.cooktype,
    oldName: store.RestaurantReducer.oldName,
    number1: store.RestaurantReducer.number1,
    number2: store.RestaurantReducer.number2,
    vegetarian: store.RestaurantReducer.vegetarian,
  }
}
export default connect(mapStateToProps)(MyComponents)

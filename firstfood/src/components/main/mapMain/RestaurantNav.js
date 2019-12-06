import React from 'react'

import { connect } from 'react-redux'
import { handleMapDisplayAsync } from '../../../action/index'

import '../../../assets/scss/main/dinner/map.scss'

// let cookdayToggle = false

let week = {
  0: '週日',
  1: '週一',
  2: '週二',
  3: '週三',
  4: '週四',
  5: '週五',
  6: '週六',
}

class RestaurantNav extends React.Component {
  // componentDidMount() {
  //   if (this.props.restaurant.length === 0) {
  //     return <>資料載入中</>
  //   }
  // }
  constructor() {
    super()
    this.state = {
      cookdayToggle: false,
      pctClickToggle: false,
      vegetarianToggle: false,
      clickRWD_select_btn: false,
      clickDistance: false,
    }
  }

  cookdayClick = event => {
    this.setState({
      cookdayToggle: !this.state.cookdayToggle,
    })
    event.stopPropagation()
  }

  pctClick = event => {
    this.setState({
      pctClickToggle: !this.state.pctClickToggle,
    })
    event.stopPropagation()
  }

  vegetarianClick = event => {
    this.setState({
      vegetarianToggle: !this.state.vegetarianToggle,
    })
  }

  clickRWD_select_btn = e => {
    this.setState({
      clickRWD_select_btn: !this.state.clickRWD_select_btn,
    })
  }

  clickRWD_Map_mode = (RWD, map_display) => e => {
    this.props.dispatch(handleMapDisplayAsync(RWD, map_display))
  }

  clickDistance = () => {
    this.setState({
      clickDistance: !this.state.clickDistance,
    })
  }

  render() {
    let number = 0
    if (this.props.number) {
      number = this.props.number
    } else {
      number = this.props.restaurant.length
    }

    return (
      <>
        <div className="my_map_navbar">
          <div
            className={this.props.RWD ? 'for_select' : 'for_select col-md-9'}
          >
            <div
              className="select_total_btn"
              onClick={this.clickRWD_select_btn}
            >
              <p>搜尋篩選</p>
            </div>
            <div
              className={
                this.state.clickRWD_select_btn
                  ? 'RWD_for_select active'
                  : 'RWD_for_select'
              }
            >
              <div
                className={
                  this.state.clickDistance
                    ? 'navbar_wrap distance_wrap'
                    : 'navbar_wrap distance_wrap active'
                }
                onClick={this.clickDistance}
              >
                <p>
                  {this.props.distance > 0.01
                    ? this.props.distance > 0.1
                      ? '全部'
                      : this.props.cooktype === '外送'
                      ? '5 公里內'
                      : this.props.distance == 0.05
                      ? '5 公里內'
                      : '10 公里內'
                    : '1 公里內'}
                </p>
                <div
                  className={
                    this.state.clickDistance
                      ? this.props.cooktype == '外送'
                        ? 'distance_wrap_nav active2'
                        : 'distance_wrap_nav active'
                      : 'distance_wrap_nav'
                  }
                >
                  {this.props.cooktype === '外送' ? (
                    <>
                      <p onClick={this.props.handleDistance(0.05)}>5 公里內</p>
                      <p onClick={this.props.handleDistance(0.01)}>1 公里內</p>
                    </>
                  ) : (
                    <>
                      <p onClick={this.props.handleDistance(1)}>全部</p>
                      <p onClick={this.props.handleDistance(0.1)}>10 公里內</p>
                      <p onClick={this.props.handleDistance(0.05)}>5 公里內</p>
                      <p onClick={this.props.handleDistance(0.01)}>1 公里內</p>
                    </>
                  )}
                </div>
              </div>
              <div className="navbar_wrap open_res">
                <input
                  type="checkbox"
                  id="myopen"
                  onChange={this.props.toggleOpenWeekClick}
                />
                <label htmlFor="myopen" style={{ margin: 0 }}>
                  營業中
                </label>
              </div>
              <div className="cookday navbar_wrap" onClick={this.cookdayClick}>
                <p>
                  {this.props.cookday !== 8
                    ? week[this.props.cookday]
                    : '代客煮用餐日'}
                </p>
                <div
                  className={
                    this.state.cookdayToggle
                      ? 'cookday_navbar active'
                      : 'cookday_navbar'
                  }
                >
                  <p onClick={this.props.toggleCooktimeClick(8)}>不選擇</p>
                  <p onClick={this.props.toggleCooktimeClick(1)}>週一</p>
                  <p onClick={this.props.toggleCooktimeClick(2)}>週二</p>
                  <p onClick={this.props.toggleCooktimeClick(3)}>週三</p>
                  <p onClick={this.props.toggleCooktimeClick(4)}>週四</p>
                  <p onClick={this.props.toggleCooktimeClick(5)}>週五</p>
                  <p onClick={this.props.toggleCooktimeClick(6)}>週六</p>
                  <p onClick={this.props.toggleCooktimeClick(0)}>週日</p>
                </div>
              </div>
              <div className="price navbar_wrap" onClick={this.pctClick}>
                <p>
                  {this.props.number1 > -1 ? (
                    this.props.number1 === 0 ? (
                      '300元以內'
                    ) : this.props.number1 === 301 ? (
                      '300~500'
                    ) : (
                      '500~800'
                    )
                  ) : (
                    <>平均消費 v</>
                  )}
                </p>
                <div
                  className={
                    this.state.pctClickToggle
                      ? 'price_navbar active'
                      : 'price_navbar'
                  }
                >
                  <p onClick={this.props.handlePctClick(-1, -1)}>不選擇</p>
                  <p onClick={this.props.handlePctClick(0, 300)}>300元以內</p>
                  <p onClick={this.props.handlePctClick(301, 500)}>300~500</p>
                  <p onClick={this.props.handlePctClick(501, 800)}>500~800</p>
                </div>
              </div>

              <div className="price navbar_wrap" onClick={this.vegetarianClick}>
                <p>
                  {this.props.vegetarian
                    ? this.props.vegetarian === '葷'
                      ? '葷食'
                      : this.props.vegetarian === '素'
                      ? '素食'
                      : '都有'
                    : '葷素食'}
                </p>
                <div
                  className={
                    this.state.vegetarianToggle
                      ? 'price_navbar active'
                      : 'price_navbar'
                  }
                >
                  <p onClick={this.props.hanglevegetarianClick('')}>不選擇</p>
                  <p onClick={this.props.hanglevegetarianClick('葷')}>葷食</p>
                  <p onClick={this.props.hanglevegetarianClick('素')}>素食</p>
                  <p onClick={this.props.hanglevegetarianClick('都有')}>都有</p>
                </div>
              </div>
              <div className="class_select_wrap">
                <div className="d-flex res_class">
                  <p>分類：</p>
                  <div className="d-flex">
                    <p
                      className={
                        this.props.foodclass === '中式'
                          ? 'foodclass active'
                          : 'foodclass'
                      }
                      onClick={this.props.handlefoodclassClick(
                        '中式',
                        this.props.cooktype
                      )}
                    >
                      中式
                    </p>
                    <p
                      className={
                        this.props.foodclass === '西式'
                          ? 'foodclass active'
                          : 'foodclass'
                      }
                      onClick={this.props.handlefoodclassClick(
                        '西式',
                        this.props.cooktype
                      )}
                    >
                      西式
                    </p>
                  </div>
                </div>

                <div className="d-flex cooktype_class">
                  <p style={{ color: 'black' }}>代客煮形式：</p>
                  <div className="d-flex">
                    <p
                      className={
                        this.props.cooktype === '內用'
                          ? 'cooktype active'
                          : 'cooktype'
                      }
                      onClick={this.props.handlefoodclassClick(
                        this.props.foodclass,
                        '內用'
                      )}
                    >
                      內用
                    </p>
                    <p
                      className={
                        this.props.cooktype === '外送'
                          ? 'cooktype active'
                          : 'cooktype'
                      }
                      onClick={this.props.handlefoodclassClick(
                        this.props.foodclass,
                        '外送'
                      )}
                    >
                      外送
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              this.props.RWD
                ? 'd-flex justify-content-between'
                : 'd-flex justify-content-between col-md-3'
            }
          >
            <div style={{ color: 'black' }} className="d-flex all_res">
              <p
                onClick={this.props.handleRenew}
                className="d-flex align-items-center"
              >
                <i
                  className="fas fa-utensils"
                  style={{ margin: '10px', color: '#C73E3A' }}
                ></i>
                {this.props.oldName ? (
                  `所有可為您料理"${this.props.name}"的餐廳(${number})`
                ) : (
                  <a
                    style={{
                      textDecoration: 'underline',
                      color: 'black',
                      cursor: 'grab',
                      textDecoration: 'none',
                    }}
                    alt=""
                  >
                    <span>所有餐廳({number})</span>
                  </a>
                )}
                {(!this.props.oldName && this.props.weekday !== 8) ||
                (this.props.name && this.props.weekday !== 8)
                  ? `>營業中(${this.props.restaurant.length})`
                  : ''}
                {!this.props.oldName && this.props.cookday !== 8
                  ? `>可服務餐廳(${this.props.restaurant.length})`
                  : ''}
              </p>
            </div>
          </div>
          <div className="RWD_map_mode_btn">
            <div
              className={
                this.props.map_display
                  ? 'RWD_list_mode'
                  : this.props.RWD
                  ? 'RWD_list_mode active'
                  : 'RWD_list_mode'
              }
              onClick={this.clickRWD_Map_mode(true, false)}
            >
              <p>列表</p>
            </div>
            <div
              className={
                this.props.map_display
                  ? this.props.RWD
                    ? 'RWD_map_mode active'
                    : 'RWD_map_mode'
                  : 'RWD_map_mode'
              }
              onClick={this.clickRWD_Map_mode(true, true)}
            >
              <p>地圖</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// export default RestaurantNav

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  // console.log(store)
  if (store.RestaurantReducer.data.length > 0)
    return {
      distance: store.RestaurantReducer.distance,
      restaurant: store.RestaurantReducer.data,
      number: store.RestaurantReducer.NUMBER,
      weekday: store.RestaurantReducer.weekday,
      cookday: store.RestaurantReducer.cookday,
      oldName: store.RestaurantReducer.oldName,
      name: store.RestaurantReducer.pro_name,
      foodclass: store.RestaurantReducer.foodclass,
      cooktype: store.RestaurantReducer.cooktype,
      number1: store.RestaurantReducer.number1,
      vegetarian: store.RestaurantReducer.vegetarian,
      RWD: store.DinnerProductReducer.RWD,
      map_display: store.DinnerProductReducer.map_display,
    }
  return {
    distance: store.RestaurantReducer.distance,
    restaurant: [],
    number: store.RestaurantReducer.NUMBER,
    weekday: store.RestaurantReducer.weekday,
    cookday: store.RestaurantReducer.cookday,
    name: store.RestaurantReducer.pro_name,
    foodclass: store.RestaurantReducer.foodclass,
    cooktype: store.RestaurantReducer.cooktype,
    vegetarian: store.RestaurantReducer.vegetarian,
  }
}
export default connect(mapStateToProps)(RestaurantNav)

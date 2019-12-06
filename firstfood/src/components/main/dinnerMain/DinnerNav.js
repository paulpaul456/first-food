import React from 'react'
import { connect } from 'react-redux'
import {
  loadSingleRestaurantAsync,
  loadMainDinnerAsync,
} from '../../../action/index'

import '../../../assets/scss/main/dinner/map.scss'

class DinnerNav extends React.Component {
  constructor() {
    super()
    this.state = {
      flavorToggle: false,
      dinner_vegetarianToggle: false,
      tagToggle: false,
    }
  }

  MainDinnerfunc = (id, name, small_cat) => {
    name = Number(this.props.name)
    if (!name) {
      name = 0
    }
    if (this.props.small_cat && small_cat === this.props.small_cat) {
      small_cat = ''
    }
    let customer_id = this.props.customer_id
    console.log(id)
    console.log(name)
    this.props.dispatch(
      loadSingleRestaurantAsync(
        id,
        name,
        customer_id,
        small_cat,
        this.props.veg_type,
        this.props.flavor,
        this.props.tag_id
      )
    )
  }

  flavorClick = flavor => event => {
    let id = this.props.restaurant.restaurant_id
    let name = Number(this.props.name)
    let customer_id = this.props.customer_id
    if (!name) {
      name = 0
    }
    event.stopPropagation()

    this.setState({
      flavorToggle: !this.state.flavorToggle,
    })

    if (flavor !== 'click') {
      this.props.dispatch(
        loadSingleRestaurantAsync(
          id,
          name,
          customer_id,
          this.props.small_cat,
          this.props.veg_type,
          flavor,
          this.props.tag_id
        )
      )
    }
  }

  dinner_vegetarianClick = veg_type => event => {
    let id = this.props.restaurant.restaurant_id
    let name = Number(this.props.name)
    let customer_id = this.props.customer_id
    if (!name) {
      name = 0
    }

    event.stopPropagation()
    this.setState({
      dinner_vegetarianToggle: !this.state.dinner_vegetarianToggle,
    })

    if (veg_type !== 'click') {
      this.props.dispatch(
        loadSingleRestaurantAsync(
          id,
          name,
          customer_id,
          this.props.small_cat,
          veg_type,
          this.props.flavor,
          this.props.tag_id
        )
      )
    }
  }

  tagClick = tag_id => event => {
    let id = this.props.restaurant.restaurant_id
    let name = Number(this.props.name)
    let customer_id = this.props.customer_id
    if (!name) {
      name = 0
    }

    event.stopPropagation()
    this.setState({
      tagToggle: !this.state.tagToggle,
    })

    if (tag_id !== 'click') {
      this.props.dispatch(
        loadSingleRestaurantAsync(
          id,
          name,
          customer_id,
          this.props.small_cat,
          this.props.veg_type,
          this.props.flavor,
          tag_id
        )
      )
    }
  }

  render() {
    if (!this.props.restaurant) {
      return <>資料載入中</>
    }

    return (
      <>
        <div className="dinner_nav">
          <h4>
            菜色列表，共 {this.props.dinners ? this.props.dinners.length : ''}
            道菜
            {this.props.pro_name
              ? `，以下顯示可以“ ${this.props.pro_name} ”料理的菜色`
              : ''}
          </h4>
          <div style={{ display: 'flex', color: 'white', textAlign: 'center' }}>
            <div
              className="navbar_wrap"
              onClick={() =>
                // console.log(Number(this.props.id))
                // console.log(this.props.name)
                this.MainDinnerfunc(
                  Number(this.props.id),
                  this.props.name,
                  '主食'
                )
              }
              style={
                this.props.small_cat === '主食'
                  ? { background: 'rgb(224, 214, 203)' }
                  : {}
              }
            >
              <p>主食</p>
            </div>
            <div
              className="navbar_wrap"
              onClick={() =>
                // console.log(Number(this.props.id))
                this.MainDinnerfunc(
                  Number(this.props.id),
                  this.props.name,
                  '主菜'
                )
              }
              style={
                this.props.small_cat === '主菜'
                  ? { background: 'rgb(224, 214, 203)' }
                  : {}
              }
            >
              <p>主菜</p>
            </div>
            <div
              className="navbar_wrap"
              onClick={() =>
                // console.log(Number(this.props.id))
                this.MainDinnerfunc(
                  Number(this.props.id),
                  this.props.name,
                  '湯'
                )
              }
              style={
                this.props.small_cat === '湯'
                  ? { background: 'rgb(224, 214, 203)' }
                  : {}
              }
            >
              <p>湯</p>
            </div>
            <div
              className="navbar_wrap"
              onClick={() =>
                // console.log(Number(this.props.id))
                this.MainDinnerfunc(
                  Number(this.props.id),
                  this.props.name,
                  '甜點'
                )
              }
              style={
                this.props.small_cat === '甜點'
                  ? { background: 'rgb(224, 214, 203)' }
                  : {}
              }
            >
              <p>甜點</p>
            </div>
            <div
              className="flavor navbar_wrap"
              onClick={this.flavorClick('click')}
            >
              <p>{this.props.flavor ? this.props.flavor : '口味'}</p>
              {this.props.restaurant.foodclass === '西式' ? (
                <>
                  <div
                    className={
                      this.state.flavorToggle
                        ? 'flavor_navbar active'
                        : 'flavor_navbar'
                    }
                  >
                    <p onClick={this.flavorClick('')}>全部</p>
                    <p onClick={this.flavorClick('白醬')}>白醬</p>
                    <p onClick={this.flavorClick('紅醬')}>紅醬</p>
                    <p onClick={this.flavorClick('青醬')}>青醬</p>
                    <p onClick={this.flavorClick('香蒜')}>香蒜</p>
                    <p onClick={this.flavorClick('起司')}>起司</p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={
                      this.state.flavorToggle
                        ? 'flavor_navbar active'
                        : 'flavor_navbar'
                    }
                  >
                    <p onClick={this.flavorClick('')}>全部</p>
                    <p onClick={this.flavorClick('熱炒')}>熱炒</p>
                    <p onClick={this.flavorClick('清蒸')}>清蒸</p>
                    <p onClick={this.flavorClick('青醬')}>青醬</p>
                    <p onClick={this.flavorClick('香蒜')}>香蒜</p>
                    <p onClick={this.flavorClick('起司')}>起司</p>
                  </div>
                </>
              )}
            </div>

            {this.props.restaurant.vegetarian === '都有' ? (
              <div
                className="dinner_vegetarian navbar_wrap"
                onClick={this.dinner_vegetarianClick('click')}
              >
                <p>{this.props.veg_type ? this.props.veg_type : '葷素食'}</p>
                <div
                  className={
                    this.state.dinner_vegetarianToggle
                      ? 'dinner_vegetarian_navbar active'
                      : 'dinner_vegetarian_navbar'
                  }
                >
                  <p onClick={this.dinner_vegetarianClick('')}>全部</p>
                  <p onClick={this.dinner_vegetarianClick('全素')}>全素</p>
                  <p onClick={this.dinner_vegetarianClick('蛋奶素')}>蛋奶素</p>
                  <p onClick={this.dinner_vegetarianClick('葷食')}>葷食</p>
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="tag navbar_wrap" onClick={this.tagClick('click')}>
              <p>
                {this.props.tag_id
                  ? this.props.tag_id === 6
                    ? '當季限定'
                    : '獲獎'
                  : '特色餐點'}
              </p>
              <div
                className={
                  this.state.tagToggle ? 'tag_navbar active' : 'tag_navbar'
                }
              >
                <p onClick={this.tagClick(0)}>不選擇</p>
                <p onClick={this.tagClick(6)}>當季限定</p>
                <p onClick={this.tagClick(9)}>獲獎</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  if (store.RestaurantReducer.data.length === 0) {
    return {}
  }
  if (store.loginReducer.isLogin)
    return {
      restaurant: store.RestaurantReducer.data[0],
      dinner_number: store.RestaurantReducer.data[1].NUMBER,
      dinners: store.RestaurantReducer.data[2],
      name: store.RestaurantReducer.oldName,
      pro_name: store.RestaurantReducer.pro_name,
      vegetarian: store.RestaurantReducer.vegetarian,
      small_cat: store.RestaurantReducer.small_cat,
      veg_type: store.RestaurantReducer.veg_type,
      flavor: store.RestaurantReducer.flavor,
      tag_id: store.RestaurantReducer.tag_id,
      customer_id: store.loginReducer.member[0].customer_id,
    }

  return {
    restaurant: store.RestaurantReducer.data[0],
    dinner_number: store.RestaurantReducer.data[1].NUMBER,
    dinners: store.RestaurantReducer.data[2],
    name: store.RestaurantReducer.oldName,
    pro_name: store.RestaurantReducer.pro_name,
    vegetarian: store.RestaurantReducer.vegetarian,
    small_cat: store.RestaurantReducer.small_cat,
    veg_type: store.RestaurantReducer.veg_type,
    flavor: store.RestaurantReducer.flavor,
    tag_id: store.RestaurantReducer.tag_id,
  }
}
export default connect(mapStateToProps)(DinnerNav)
// export default DinnerNav

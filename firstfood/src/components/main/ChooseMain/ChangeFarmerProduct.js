import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { handleProductClickAsync } from '../../../action/index'

let pictureAr = []
let i
let countrightclick = 0

class ChangeFarmerProduct extends React.Component {
  constructor() {
    super()
    this.state = {
      farmer_productAr: [],
      showPic: '',
      name: '',
      price: 0,
      writing: '',
      orien: '',
      right: true,
      left: false,
      move: 0,
    }
  }

  componentDidMount() {
    console.log(JSON.parse(this.props.defaultFarmer_product.picture))
    this.setState({
      farmer_productAr: this.props.farmer_product,
      showPic: JSON.parse(this.props.defaultFarmer_product.picture)[0],
      name: this.props.defaultFarmer_product.name,
      price: this.props.defaultFarmer_product.price,
      writing: this.props.defaultFarmer_product.writing,
    })
  }

  handlePicClick = (sid, name, pic) => e => {
    e.stopPropagation()
    let ind = pictureAr.indexOf(pic)

    this.setState({
      showPic: JSON.parse(this.state.farmer_productAr[ind].picture)[0],
      name: this.state.farmer_productAr[ind].name,
      price: this.state.farmer_productAr[ind].price,
      writing: this.state.farmer_productAr[ind].writing,
    })

    this.props.dispatch(handleProductClickAsync(sid, name, this.props.newName))
  }

  right = orien => e => {
    console.log(orien)
    console.log(this.state.move)
    this.setState({
      orien: orien,
    })

    if (
      orien === 'right' &&
      this.state.move > -170 * (this.state.farmer_productAr.length - 4)
    ) {
      this.setState({
        left: true,
        move: this.state.move - 170,
      })
    } else if (
      orien === 'right' &&
      this.state.move === -170 * (this.state.farmer_productAr.length - 4)
    ) {
      this.setState({
        right: false,
      })
    } else if (orien === 'left' && this.state.move < 0) {
      this.setState({
        move: this.state.move + 170,
        right: true,
      })
    } else if (this.state.move >= 0) {
      this.setState({
        left: false,
      })
    }
  }

  render() {
    pictureAr = []
    i = 0

    console.log(this.props)

    return (
      <>
        <div className="changefarmerproduct">
          <div className="d-flex container">
            <div className="change-left">
              <div className="d-flex">
                <div className="delicious">
                  <img src={`/assets/images/dinner/choose/美味.svg`} alt="" />
                </div>
                <div className="showPic_wrap">
                  <img
                    src={`/assets/images/goods/${this.state.showPic}`}
                    // src={`/assets/images/goods/duck (66).jpg`}
                    alt=""
                  />
                </div>
                <div className="intro_wrap">
                  <h4>{this.state.name}</h4>
                  <p>${this.state.price} / 每人份</p>
                  <p>介紹</p>
                  <p>{this.state.writing}</p>
                </div>
              </div>

              <div className="d-flex">
                <div
                  onClick={this.right('left')}
                  style={this.state.left ? { color: 'red' } : {}}
                  className="fontawe_wrap"
                >
                  <i className="fas fa-chevron-left fa-3x"></i>
                </div>
                <div className="d-flex littlePic-window">
                  <div
                    className="CF-littlePic-wrap d-flex"
                    style={{ transform: `translateX(${this.state.move}px)` }}
                  >
                    {this.state.farmer_productAr.map(el => {
                      {/* console.log(JSON.parse(el.picture)[0]) */}
                      i++
                      pictureAr.push(JSON.parse(el.picture)[0])
                      console.log(pictureAr)
                      return (
                        <>
                          <div key={i} className="littlePic">
                            <div
                              onClick={this.handlePicClick(
                                el.sid,
                                el.name,
                                JSON.parse(el.picture)[0]
                              )}
                            >
                              <img
                                src={`/assets/images/goods/${
                                  JSON.parse(el.picture)[0]
                                }`}
                                alt=""
                              />
                            </div>
                            <p>{el.name}</p>
                          </div>
                        </>
                      )
                    })}
                  </div>
                </div>
                <p
                  onClick={this.right('right')}
                  style={this.state.right ? { color: 'red' } : {}}
                  className="fontawe_wrap"
                >
                  <i className="fas fa-chevron-right fa-3x"></i>
                </p>
              </div>

              {/* {console.log(pictureAr)} */}
            </div>
            <div className="change-right">
              <h2 style={{ writingMode: 'vertical-lr', margin: 0 }}>
                |&emsp;{this.props.dinner.name}&emsp;|
              </h2>

              <div className="navlink">
                <NavLink
                  key={1}
                  to={`/dinnerlist/${this.props.restaurant.restaurant_id}/${this.props.oldName}/${this.props.dinner.dinner_id}`}
                  onClick={this.handleSpicyClick}
                >
                  <div>
                    <p>
                      確認內容
                      <br />
                      回菜色頁面
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// 綁定 props <=> store
const mapStateToProps = store => {
  let my_store = {}

  if (!store.RestaurantReducer.sd_data) return my_store

  my_store = {
    dinner: store.RestaurantReducer.sd_data[0],
    product_class: store.RestaurantReducer.sd_data[1],
    farmer_product: store.RestaurantReducer.sd_data[2],
    restaurant: store.RestaurantReducer.sd_data[3],
    All_product_class: store.RestaurantReducer.sd_data[4],
    defaultProduct_class: store.RestaurantReducer.sd_data[5],
    defaultFarmer_product: store.RestaurantReducer.sd_data[6],
    oldName: store.RestaurantReducer.oldName,
    inputTEXT: store.RestaurantReducer.inputTEXT,
  }

  if (store.RestaurantReducer.newName)
    my_store = {
      ...my_store,
      defaultProduct_class: {
        name: store.RestaurantReducer.newName,
        class_sid: store.RestaurantReducer.class_sid,
      },
      defaultFarmer_product: store.RestaurantReducer.sd_data[6],
    }

  if (store.RestaurantReducer.newProduct)
    my_store = {
      ...my_store,
      defaultFarmer_product: {
        name: store.RestaurantReducer.newProduct,
        sid: store.RestaurantReducer.sid,
      },
    }

  return my_store
}
export default connect(mapStateToProps)(ChangeFarmerProduct)

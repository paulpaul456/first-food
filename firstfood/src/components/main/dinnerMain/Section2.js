import React from 'react'
import { NavLink, withRouter, Redirect } from 'react-router-dom'

import { compose } from 'redux'
import { connect } from 'react-redux'
import {
  loadSingleDinnerAsync,
  handleAddCartsBeforeBookAsync,
  readCartsBeforeBookAsync,
  showLoginBox,
  prev_pathAsync,
} from '../../../action/index'

import swal from '@sweetalert/with-react'

const spicy = {
  0: '不辣',
  1: '小辣',
  2: '中辣',
  3: '大辣',
  4: '特辣',
}

class Section2 extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1,
    }
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.customer_id) {
      this.props.dispatch(readCartsBeforeBookAsync(this.props.customer_id))
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.customer_id !== this.props.customer_id) {
      this.props.dispatch(readCartsBeforeBookAsync(this.props.customer_id))
    }
  }

  handleQuantityClick = Click => e => {
    if (Click === 'plus') {
      this.setState({
        quantity: this.state.quantity + 1,
      })
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      })
    }
  }

  handleAddCartsBeforeBook = () => {
    let customer_id = this.props.customer_id
    let res_id = this.props.restaurant.restaurant_id
    let dinner_id = this.props.dinner.dinner_id
    let class_sid = this.props.class_sid
    let sid = this.props.sid
    let inputTEXT = this.props.inputTEXT
    let spicy = this.props.spicy
    let quantity = this.state.quantity

    if (!class_sid) {
      class_sid = this.props.defaultProduct_class.class_sid
    }
    if (!sid) {
      sid = this.props.defaultFarmer_product.sid
    }
    if (!spicy) {
      spicy = this.props.dinner.spicy
    }

    if (customer_id) {
      this.props.dispatch(
        handleAddCartsBeforeBookAsync(
          customer_id,
          res_id,
          dinner_id,
          class_sid,
          sid,
          inputTEXT,
          spicy,
          quantity,
          () => {
            swal({
              icon: 'success',
              title: '點餐成功',
              timer: 2000,
            })
          }
        )
      )
    } else {
      swal({
        title: '請登入',
        icon: '/logo.png',
        buttons: true,
        dangerMode: true,
      }).then(willDelete => {
        if (willDelete) {
          window.scrollTo(0, 0)
          // console.log(this.props.match.url)
          this.props.dispatch(showLoginBox())
          this.props.dispatch(prev_pathAsync(this.props.match.url))
        }
      })
      // let r = window.confirm('請登入')
      // if (r) {
      //   window.scrollTo(0, 0)
      //   // console.log(this.props.match.url)
      //   this.props.dispatch(showLoginBox())
      //   this.props.dispatch(prev_pathAsync(this.props.match.url))
      // }
    }
  }

  gotoDnOrderList = e => {
    let customer_id = this.props.customer_id
    this.props.dispatch(readCartsBeforeBookAsync(customer_id))
    if (!customer_id) {
      e.preventDefault()
      swal({
        title: '請登入',
        icon: '/logo.png',
        buttons: true,
        dangerMode: true,
      }).then(willDelete => {
        if (willDelete) {
          window.scrollTo(0, 0)
          // console.log(this.props.match.url)
          this.props.dispatch(showLoginBox())
          this.props.dispatch(prev_pathAsync(this.props.match.url))
        }
      })
      // let r = window.confirm('請登入')
      // if (r) {
      //   // this.props.history.push('/')
      //   window.scrollTo(0, 0)
      //   // console.log(this.props.match.url)
      //   this.props.dispatch(showLoginBox())
      //   this.props.dispatch(prev_pathAsync(this.props.match.url))
      // }
    }
  }

  render() {
    if (!this.props.dinner.dinner_id) {
      return <></>
    }
    // console.log(this.props)
    // console.log('customer_id: ' + this.props.customer_id)

    let name = this.props.oldName

    localStorage.setItem(
      'product_class:',
      this.props.defaultProduct_class.class_sid
    )
    localStorage.setItem(
      'farmer_product:',
      this.props.defaultFarmer_product.sid
    )
    localStorage.setItem('inputTEXT:', this.props.inputTEXT)
    localStorage.setItem('spicy:', this.props.spicy)

    return (
      <>
        <div className="my_section2">
          <div className="container my">
            <div className="row my">
              <div className="col-md-8 left">
                <div className="row information">
                  <div className="col-md-8">
                    <p>Dish Information</p>
                    <div className="section2-text1">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <p>
                          <i class="fas fa-dot-circle"></i>
                          預設主食材
                        </p>
                        <NavLink
                          key={1}
                          to={`/dinnerlist/${this.props.restaurant.restaurant_id}/${this.props.oldName}/${this.props.dinner.dinner_id}/changeProductClass`}
                        >
                          <p style={{ color: '#C73E3A' }}>
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            更換食材
                          </p>
                        </NavLink>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <span>
                          &nbsp;{this.props.defaultProduct_class.name}&nbsp;
                        </span>
                      </div>
                    </div>

                    <div className="section2-text2">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <p>
                          <i class="fas fa-dot-circle"></i>
                          預設主食材商品
                        </p>
                        <NavLink
                          key={2}
                          to={`/dinnerlist/${this.props.restaurant.restaurant_id}/0/${this.props.dinner.dinner_id}/changeFarmerProduct`}
                        >
                          <p style={{ color: '#C73E3A' }}>
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            更換商品
                          </p>
                        </NavLink>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        <span>{this.props.defaultFarmer_product.name}</span>
                      </div>
                    </div>

                    <div className="section2-text2">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <p>
                          <i class="fas fa-dot-circle"></i>
                          副食材
                        </p>
                        <NavLink
                          key={3}
                          to={`/dinnerlist/${this.props.restaurant.restaurant_id}/0/${this.props.dinner.dinner_id}/specialResquest`}
                        >
                          <p style={{ color: '#C73E3A' }}>
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            特殊要求
                          </p>
                        </NavLink>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {this.props.dinner.other_ingred
                          ? JSON.parse(this.props.dinner.other_ingred).map(
                              el => {
                                let row = []
                                this.props.All_product_class.forEach(item => {
                                  if (Number(el) === item.class_sid) {
                                    row.push(
                                      <p style={{ margin: '0 5px' }}>
                                        {item.name}
                                      </p>
                                    )
                                  }
                                })
                                return row
                              }
                            )
                          : '無'}
                      </div>
                    </div>

                    {this.props.inputTEXT && this.props.inputTEXT !== '無' ? (
                      <div className="section2-text2">
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <p>
                            <i class="fas fa-dot-circle"></i>
                            特殊要求
                          </p>
                          <NavLink
                            key={3}
                            to={`/dinnerlist/${this.props.restaurant.restaurant_id}/0/${this.props.dinner.dinner_id}/specialResquest`}
                          >
                            <p style={{ color: '#C73E3A' }}>
                              <i class="fas fa-arrow-alt-circle-right"></i>修改
                            </p>
                          </NavLink>
                        </div>

                        <div
                          style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {this.props.inputTEXT}
                        </div>
                      </div>
                    ) : (
                      ''
                    )}

                    <div className="section2-text3">
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <p>
                          <i class="fas fa-dot-circle"></i>
                          辣度
                        </p>
                        <NavLink
                          key={4}
                          to={`/dinnerlist/${this.props.restaurant.restaurant_id}/0/${this.props.dinner.dinner_id}/changeSpicy`}
                        >
                          <p style={{ color: '#C73E3A' }}>
                            <i class="fas fa-arrow-alt-circle-right"></i>
                            調整辣度
                          </p>
                        </NavLink>
                      </div>

                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {this.props.spicy
                          ? spicy[this.props.spicy]
                          : spicy[this.props.dinner.spicy]}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 section2-text4">
                    <div>{this.props.dinner.intro}</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 right">
                <div className="right_up">
                  <div className="section2-right1">
                    <div className="little_img_wrap">
                      <img
                        src={
                          '/assets/images/dinner/' +
                          JSON.parse(this.props.dinner.dinner_image)[0]
                        }
                        alt=""
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div class="love_comment">
                      <div className="love">
                        <i class="fas fa-heart"></i>
                        <p>12</p>
                      </div>

                      <div className="comment">
                        <i class="fas fa-minus-square"></i>
                        <p>
                          {this.props.dinner.com_num
                            ? this.props.dinner.com_num
                            : 0}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p>Shopping Cart</p>
                  <div className="section2-right2">
                    {this.props.dinner.name}
                  </div>
                  <div className="section2-right3">
                    <div className="d-flex price_wrap">
                      <p>價格</p>
                      <p className="price">
                        {this.props.restaurant.cook +
                          parseInt(
                            this.props.defaultFarmer_product.price * 0.75
                          )}
                      </p>
                      {/* <p>{this.props.defaultFarmer_product.price}</p>
                      <p>{this.props.restaurant.cook}</p> */}
                      <p>NT(含稅)</p>
                    </div>
                    <span className="small">(含代客煮服務費及食材費)</span>
                  </div>

                  {/* {this.props.customer_id ? (
                  <> */}
                  <div className="changeQuantity">
                    <i
                      className={
                        this.state.quantity >= 10
                          ? 'fas fa-plus-circle fa-2x disabled'
                          : 'fas fa-plus-circle fa-2x'
                      }
                      onClick={this.handleQuantityClick('plus')}
                    ></i>
                    <input
                      type="text"
                      value={this.state.quantity}
                      style={{ textAlign: 'center' }}
                    />
                    <i
                      className={
                        this.state.quantity <= 1
                          ? 'fas fa-minus-circle fa-2x disabled'
                          : 'fas fa-minus-circle fa-2x'
                      }
                      onClick={this.handleQuantityClick('minus')}
                    ></i>
                  </div>
                  <div className="right4_wrap">
                    <div className="d-flex order_dn">
                      <div
                        onClick={this.handleAddCartsBeforeBook}
                        className="clickmeplz addcarts"
                      >
                        <p>點餐</p>
                      </div>
                      <i class="fas fa-concierge-bell fa-2x"></i>
                      {this.props.customer_id ? (
                        <span>{this.props.dn_cart_number}</span>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="section2-right4">
                      <NavLink
                        key={5}
                        to={'/my_dinner_order'}
                        onClick={this.gotoDnOrderList}
                      >
                        前往點餐清單
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="right_down">
                  <div className="my_oneComment">COMMENTS</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = withRouter(Section2)

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

  // 此法不用
  // if (store.RestaurantReducer.newName) {
  //   my_store.defaultProduct_class = {
  //     name: store.RestaurantReducer.newName,
  //     class_sid: store.RestaurantReducer.class_sid,
  //   }

  //   if (store.RestaurantReducer.newProduct) {
  //     my_store.defaultFarmer_product = {
  //       name: store.RestaurantReducer.newProduct,
  //     }

  //     if (store.RestaurantReducer.inputTEXT) {
  //       my_store.inputTEXT = store.RestaurantReducer.inputTEXT
  //       return { ...my_store }
  //     }
  //     return { ...my_store }
  //   }
  //   return { ...my_store }
  // }

  if (store.loginReducer.isLogin)
    my_store = {
      ...my_store,
      customer_id: store.loginReducer.member[0].customer_id,
    }

  if (store.RestaurantReducer.newName)
    my_store = {
      ...my_store,
      class_sid: store.RestaurantReducer.class_sid,
      defaultProduct_class: {
        name: store.RestaurantReducer.newName,
        class_sid: store.RestaurantReducer.class_sid,
      },
      defaultFarmer_product: store.RestaurantReducer.sd_data[6],
    }

  if (store.RestaurantReducer.newProduct)
    my_store = {
      ...my_store,
      sid: store.RestaurantReducer.sid,
      defaultFarmer_product: {
        sid: store.RestaurantReducer.sid,
        name: store.RestaurantReducer.newProduct,
        price: store.RestaurantReducer.sd_data[6].price,
      },
    }

  if (store.RestaurantReducer.inputTEXT)
    my_store = {
      ...my_store,
      inputTEXT: store.RestaurantReducer.inputTEXT,
    }

  if (store.RestaurantReducer.spicy)
    my_store = {
      ...my_store,
      spicy: store.RestaurantReducer.spicy,
    }

  if (store.RestaurantReducer.dn_cart_data)
    my_store = {
      ...my_store,
      dn_cart_data: store.RestaurantReducer.dn_cart_data,
      dn_cart_number: store.RestaurantReducer.dn_cart_number.NUMBER,
    }

  return my_store
}
export default compose(withRouter, connect(mapStateToProps))(Section2)

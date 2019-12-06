import React from 'react'

import { connect } from 'react-redux'
import { handleClickAsync } from '../../../action/index'

import { NavLink } from 'react-router-dom'

import '../../../../src/assets/scss/main/dinner/dinner.scss'

//let ChangeProductClassclick = false

class ChangeProductClass extends React.Component {
  componentDidMount() {
    console.log(this.props.defaultProduct_class.name)
    this.handleClick(this.props.defaultProduct_class.name)
  }

  handleClick = (class_sid, newName) => event => {
    event.stopPropagation()
    console.log(newName)
    console.log(event.target)
    this.props.dispatch(
      handleClickAsync(
        this.props.restaurant.restaurant_id,
        this.props.oldName,
        this.props.dinner.dinner_id,
        class_sid,
        newName
      )
    )
  }

  render() {
    console.log(this.props)
    return (
      <div className="changeProductClass">
        <div className="container">
          <div className="row">
            <div class="col-md-10">
              <div className="d-flex flex-wrap justify-content-center">
                {this.props.product_class.map((el, index) => {
                  return (
                    <>
                      <div className="product_class_wrap">
                        <div
                          className={
                            (this.props.defaultProduct_class.name === el.name &&
                              !this.props.newName) ||
                            this.props.newName === el.name
                              ? 'product_class pro_active'
                              : 'product_class'
                          }
                          key={index}
                          onClick={this.handleClick(el.class_sid, el.name)}
                        >
                          <p>{el.name}</p>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className="d-flex align-items-center plate_chop">
                <div className="serve_wrap col-md-2">
                  <img src="/assets/images/dinner/choose/上菜.svg" alt="" />
                </div>
                <div className="col-md-6 plate_wrap">
                  <div className="plate">
                    {!this.props.newName ? (
                      <img
                        src={`/assets/images/dinner/choose/${this.props.defaultProduct_class.picture}`}
                        alt=""
                      />
                    ) : (
                      this.props.All_product_class.map(el => {
                        if (el.name === this.props.newName) {
                          return (
                            <>
                              <img
                                src={`/assets/images/dinner/choose/${el.picture}`}
                                alt=""
                                width="100px"
                                height="100px"
                              />
                            </>
                          )
                        } else {
                          return ''
                        }
                      })
                    )}
                  </div>
                </div>

                <div className="col-md-2 d-flex chop_wrap">
                  <img
                    src="/assets/images/dinner/choose/chopsticks.png"
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'contain' }}
                  />
                </div>

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
            <div className="col-md-2">
              <h2 style={{ writingMode: 'vertical-lr', margin: 0 }}>
                |&emsp;{this.props.dinner.name}&emsp;|&emsp;&nbsp;
                {this.props.newName &&
                this.props.newName !== this.props.defaultProduct_class.name
                  ? '換'
                  : ''}
                {this.props.newName
                  ? this.props.newName
                  : this.props.defaultProduct_class.name}
                &nbsp;&emsp;|
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// 綁定 props <=> store
const mapStateToProps = store => {
  if (store.RestaurantReducer.newName)
    return {
      oldName: store.RestaurantReducer.oldName,
      class_sid: store.RestaurantReducer.class_sid,
      newName: store.RestaurantReducer.newName,
      dinner: store.RestaurantReducer.sd_data[0],
      product_class: store.RestaurantReducer.sd_data[1],
      farmer_product: store.RestaurantReducer.sd_data[2],
      restaurant: store.RestaurantReducer.sd_data[3],
      All_product_class: store.RestaurantReducer.sd_data[4],
      defaultProduct_class: {
        class_sid: store.RestaurantReducer.class_sid,
        name: store.RestaurantReducer.newName,
      },
    }
  return {
    oldName: store.RestaurantReducer.oldName,
    class_sid: store.RestaurantReducer.class_sid,
    dinner: store.RestaurantReducer.sd_data[0],
    product_class: store.RestaurantReducer.sd_data[1],
    farmer_product: store.RestaurantReducer.sd_data[2],
    restaurant: store.RestaurantReducer.sd_data[3],
    All_product_class: store.RestaurantReducer.sd_data[4],
    defaultProduct_class: store.RestaurantReducer.sd_data[5],
  }
}
export default connect(mapStateToProps)(ChangeProductClass)

import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { loadSingleDinnerAsync } from '../../../action/index'

import '../../../assets/scss/main/restaurantMain.scss'

class Section1 extends React.Component {
  render() {
    console.log(this.props)
    if (!this.props.dinner.dinner_id) return <></>
    return (
      <>
        <div className="my_section1">
          <div className="container myup">
            <div className="row">
              <div className="col-md-8 my-section1-left">
                <div className="d-flex little-logo">
                  <p>
                    FIRST
                    <br />
                    FOOD
                  </p>
                  <img src="/assets/images/logo.svg" alt=""></img>
                </div>
                <div className="img_wrap">
                  <img
                    className=""
                    src={
                      '/assets/images/dinner/' +
                      JSON.parse(this.props.dinner.dinner_image)[0]
                    }
                    alt=""
                  />
                </div>
                <div className="look-box">
                  <p className="look-box-p1">Gallery</p>
                  <p className="look-box-p2">
                    recommend <br />
                    items
                  </p>
                  <div className="look-box-p3">
                    <i className="fas fa-caret-square-down"></i>
                    <p style={{ display: 'inline-block' }}>燈箱看大圖</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4  my-section1-right">
                <div class="my_up">
                  <div
                    className="d-flex"
                    style={{ height: '100%', justifyContent: 'space-between' }}
                  >
                    <div className="my_vertical1">
                      <i className="fas fa-caret-square-down"></i>
                      <p> {this.props.dinner.name}</p>
                    </div>
                    <div className="my_vertical2">
                      <p>{this.props.dinner.brief_intro}</p>
                    </div>
                    <div className="my_vertical3">
                      <h2>{this.props.dinner.name}</h2>
                      <p className="">{this.props.dinner.vegetarian}</p>
                    </div>
                  </div>
                </div>
                <div className="my_down">
                  <div className="my_vertical4">
                    from {this.props.restaurant.name}
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

// 綁定 props <=> store
const mapStateToProps = store => {
  if (store.RestaurantReducer.sd_data.length === 0) return {}
  return {
    dinner: store.RestaurantReducer.sd_data[0],
    product_class: store.RestaurantReducer.sd_data[1],
    farmer_product: store.RestaurantReducer.sd_data[2],
    restaurant: store.RestaurantReducer.sd_data[3],
  }
}
export default connect(mapStateToProps)(Section1)

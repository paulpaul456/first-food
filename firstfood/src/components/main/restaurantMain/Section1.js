import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

const veg = {
  葷: '提供葷食料理',
  素: '提供素食料理',
  都有: '葷素食皆提供',
}

class Section1 extends React.Component {
  render() {
    console.log(this.props)
    if (!this.props.restaurant_id) return <></>
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
                      '/assets/images/restaurant/' +
                      this.props.restaurant.my_file
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
                      <a href={this.props.restaurant.website}>
                        <p>瀏覽官網</p>
                      </a>
                    </div>
                    <div className="my_vertical2">
                      <p>{this.props.restaurant.intro}</p>
                    </div>
                    <div className="my_vertical3">
                      <h2>{this.props.restaurant.name}</h2>
                      <div className="little">
                        {veg[this.props.restaurant.vegetarian]}
                        <div className="food_class">
                          <i class="fas fa-utensils"></i>
                          <p style={{ margin: '0' }}>
                            {this.props.restaurant.foodclass}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my_down d-flex">
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
  if (store.RestaurantReducer.data.length === 0) {
    return {}
  }
  return {
    restaurant: store.RestaurantReducer.data[0],
    restaurant_id: store.RestaurantReducer.data[0].restaurant_id,
  }
}
export default connect(mapStateToProps)(Section1)

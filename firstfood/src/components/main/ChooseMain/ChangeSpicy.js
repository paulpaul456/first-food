import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { handleSpicyClickAsync } from '../../../action/index'

const spicy = {
  0: '不辣',
  1: '小辣',
  2: '中辣',
  3: '大辣',
  4: '特辣',
}

class ChangeSpicy extends React.Component {
  constructor() {
    super()
    this.state = {
      spicy: 0,
    }
  }

  componentDidMount() {
    this.setState({
      spicy: this.props.dinner.spicy,
    })
  }

  handleChiliClick = number => () => {
    this.setState({
      spicy: number,
    })
  }

  handleSpicyClick = () => {
    // console.log(this.state.spicy)
    this.props.dispatch(handleSpicyClickAsync(this.state.spicy))
  }

  render() {
    return (
      <>
        <div className="changeSpicy">
          <div className="container my">
            <div className="spicy_img_wrap">
              <img src="/assets/images/dinner/choose/辣度.svg" alt="" />
            </div>
            <div className="row my_row">
              <div className="col-md-10 left d-flex">
                <div className="dinner_img_wrap">
                  <div className="tag_wrap">
                    {/* <img src="/assets/images/dinner/choose/紅牌子.svg" alt=""/> */}
                    <h2>{spicy[this.state.spicy]}</h2>
                  </div>
                  <img
                    src={`/assets/images/dinner/${
                      JSON.parse(this.props.dinner.dinner_image)[0]
                    }`}
                    alt=""
                  />
                </div>

                <div className="chili_navlink col-md-6">
                  <div className="d-flex chili_box">
                    <div
                      className={
                        this.state.spicy > 0
                          ? 'chili_wrap'
                          : 'chili_wrap opaque'
                      }
                      onClick={
                        this.state.spicy === 1
                          ? this.handleChiliClick(0)
                          : this.handleChiliClick(1)
                      }
                    >
                      <img src="/assets/images/dinner/chili.png" alt="" />
                    </div>
                    <div
                      className={
                        this.state.spicy > 1
                          ? 'chili_wrap'
                          : 'chili_wrap opaque'
                      }
                      onClick={this.handleChiliClick(2)}
                    >
                      <img src="/assets/images/dinner/chili.png" alt="" />
                    </div>
                    <div
                      className={
                        this.state.spicy > 2
                          ? 'chili_wrap'
                          : 'chili_wrap opaque'
                      }
                      onClick={this.handleChiliClick(3)}
                    >
                      <img src="/assets/images/dinner/chili.png" alt="" />
                    </div>
                    <div
                      className={
                        this.state.spicy > 3
                          ? 'chili_wrap'
                          : 'chili_wrap opaque'
                      }
                      onClick={this.handleChiliClick(4)}
                    >
                      <img src="/assets/images/dinner/chili.png" alt="" />
                    </div>
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
              <div className="col-md-2 right">
                <h2
                  style={{ writingMode: 'vertical-lr', margin: 0, padding: 0 }}
                >
                  |&emsp;{this.props.dinner.name}&emsp;|
                </h2>
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
    restaurant: store.RestaurantReducer.sd_data[3],
    All_product_class: store.RestaurantReducer.sd_data[4],
    defaultProduct_class: store.RestaurantReducer.sd_data[5],
    oldName: store.RestaurantReducer.oldName,
  }

  return my_store
}
export default connect(mapStateToProps)(ChangeSpicy)

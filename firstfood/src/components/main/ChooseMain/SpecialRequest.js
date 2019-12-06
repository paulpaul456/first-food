import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../../../../src/assets/scss/main/dinner/dinner.scss'

import { handleSpecialClickAsync } from '../../../action/index'

class SpecialRequest extends React.Component {
  constructor() {
    super()
    this.state = {
      inputTEXT: '',
    }
  }

  componentDidMount() {
    window.scrollTo(0, 500)
  }

  handleChange = e => {
    this.setState({
      inputTEXT: e.target.value,
    })
  }

  handleSpecialClick = () => {
    // console.log(this.state.inputTEXT)
    this.props.dispatch(handleSpecialClickAsync(this.state.inputTEXT))
  }

  render() {
    // console.log(this.props)
    let p = []
    return (
      <>
        <div className="special">
          <div className="container">
            <div className="img_wrap">
              <img src="/assets/images/dinner/choose/特殊要求.svg" alt="" />
            </div>
            <div className="row">
              <div className="col-md-10 left">
                <div className="d-flex other_ingred">
                  <h5>副食材內容：</h5>
                  {JSON.parse(this.props.dinner.other_ingred).map(el => {
                    this.props.All_product_class.map(val => {
                      if (Number(el) === val.class_sid) {
                        p.push(<p>{val.name}</p>)
                      }
                    })
                  })}
                  {p}
                </div>
                <div>
                  <h5>需求內容：</h5>
                  <input
                    type="textarea"
                    onChange={this.handleChange}
                    defaultValue={
                      this.props.inputTEXT !== '無' ? this.props.inputTEXT : ''
                    }
                  />
                </div>
                <div className="navlink">
                  <NavLink
                    key={1}
                    to={`/dinnerlist/${this.props.restaurant.restaurant_id}/${this.props.oldName}/${this.props.dinner.dinner_id}`}
                    onClick={this.handleSpecialClick}
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
  if (store.RestaurantReducer.inputTEXT)
    return {
      dinner: store.RestaurantReducer.sd_data[0],
      restaurant: store.RestaurantReducer.sd_data[3],
      All_product_class: store.RestaurantReducer.sd_data[4],
      defaultProduct_class: store.RestaurantReducer.sd_data[5],
      oldName: store.RestaurantReducer.oldName,
      inputTEXT: store.RestaurantReducer.inputTEXT,
    }

  return {
    dinner: store.RestaurantReducer.sd_data[0],
    restaurant: store.RestaurantReducer.sd_data[3],
    All_product_class: store.RestaurantReducer.sd_data[4],
    defaultProduct_class: store.RestaurantReducer.sd_data[5],
    oldName: store.RestaurantReducer.oldName,
  }
}
export default connect(mapStateToProps)(SpecialRequest)

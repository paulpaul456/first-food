import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import {
  handleDinnerInputChangeAsync,
  showLoginBox,
  prev_pathAsync,
  readDinnerCommentAsync,
} from '../../../action'

import swal from '@sweetalert/with-react'

class Section3 extends React.Component {
  constructor() {
    super()
    this.state = {
      comment: '',
      affectedRows: 0,
      star: 1,
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(
      readDinnerCommentAsync(
        this.props.dinner.dinner_id,
        this.props.customer_id
      )
    )
  }

  componentDidUpdate(previousProps) {
    // console.log(previousProps)
    // console.log(this.props)
    if (previousProps.customer_id !== this.props.customer_id) {
      this.props.dispatch(
        readDinnerCommentAsync(
          this.props.dinner.dinner_id,
          this.props.customer_id
        )
      )
    }
    if (previousProps.affectedRows !== this.props.affectedRows) {
      this.setState({
        comment: '',
      })
      this.props.dispatch(
        readDinnerCommentAsync(
          this.props.dinner.dinner_id,
          this.props.customer_id
        )
      )
    }
  }

  handleResInputChange = e => {
    // console.log(e.target.value)

    if (!this.props.customer_id) {
      // console.log(this.props)
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
    } else {
      let comment = e.target.value
      // console.log(comment)
      this.setState({
        comment: comment,
        affectedRows: 0,
      })
    }
  }

  handleLeaveComment = e => {
    let customer_id = this.props.customer_id
    let dinner_id = this.props.dinner.dinner_id
    let stars = this.state.star
    this.props.dispatch(
      handleDinnerInputChangeAsync(
        customer_id,
        dinner_id,
        stars,
        this.state.comment,
        () => {
          swal({
            icon: 'success',
            title: '成功新增評論',
            timer: 2000,
          })
        }
      )
    )
  }

  // clickLikeOrNot = (like_or_not) => ()=>{
  //   this.props.dispatch()
  // }

  clickStar = star => () => {
    this.setState({
      star: star,
    })
  }

  render() {
    if (!this.props.dinner) {
      return <>資料載入中</>
    }
    if (!this.props.comment_data) {
      return <>資料載入中</>
    }
    return (
      <div className="my_section3">
        <div className="container section3-cont">
          <div className="row section3-cont">
            <div className="col-md-12">
              <div>
                <div>
                  <div className="my_comments">
                    <div>
                      <p>
                        {this.props.dinner.com_num ? this.props.dinner.com_num : 0}{' '}
                        則評論
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {this.props.comment_data
              ? this.props.comment_data.comment_data.map(el => {
                  return (
                    <div className="col-md-11 d-flex mx-auto per_comment_wrap">
                      <div className="img_wrap">
                        <img
                          src={`http://localhost:6003/images/${el.my_file}`}
                          className="customer_img"
                          alt=""
                        />
                        <p>{el.name}</p>
                      </div>
                      <div className="col-md-9">
                        <div className="wrapp d-flex">
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderLeft: '1px solid #aaa',
                              borderBottom: '1px solid #aaa',
                              alignSelf: 'flex-end',
                            }}
                          ></div>
                          <p style={{ lineHeight: '40px' }}>{el.comment}</p>
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              borderTop: '1px solid #aaa',
                              borderRight: '1px solid #aaa',
                            }}
                          ></div>
                        </div>

                        <div className="d-flex like_dislike_wrap">
                          <i
                            className={
                              el.like_or_not
                                ? el.like_or_not === '已按喜歡'
                                  ? 'fas fa-thumbs-up color'
                                  : 'fas fa-thumbs-up'
                                : 'fas fa-thumbs-up'
                            }
                          >
                            {el.like}
                          </i>
                          <i
                            className={
                              el.like_or_not
                                ? el.like_or_not === '已按討厭'
                                  ? 'fas fa-thumbs-down color'
                                  : 'fas fa-thumbs-down'
                                : 'fas fa-thumbs-down'
                            }
                          >
                            {el.dislike}
                          </i>
                          <p>
                            {el.create_at.slice(0, 10) +
                              ' ' +
                              el.create_at.slice(11, 19)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              : '尚無評論'}

            <div className="col-md-12 mx-auto add_comment">
              <div className="d-flex align-items-center">
                <p>我要評論</p>
                <i
                  className={
                    this.state.star > 0 ? 'fas fa-star active' : 'fas fa-star'
                  }
                  onClick={this.clickStar(1)}
                ></i>
                <i
                  className={
                    this.state.star > 1 ? 'fas fa-star active' : 'fas fa-star'
                  }
                  onClick={this.clickStar(2)}
                ></i>
                <i
                  className={
                    this.state.star > 2 ? 'fas fa-star active' : 'fas fa-star'
                  }
                  onClick={this.clickStar(3)}
                ></i>
                <i
                  className={
                    this.state.star > 3 ? 'fas fa-star active' : 'fas fa-star'
                  }
                  onClick={this.clickStar(4)}
                ></i>
                <i
                  className={
                    this.state.star > 4 ? 'fas fa-star active' : 'fas fa-star'
                  }
                  onClick={this.clickStar(5)}
                ></i>
              </div>

              <input
                type="text"
                onChange={this.handleResInputChange}
                value={this.state.comment}
              />
              <div className="click_comment" onClick={this.handleLeaveComment}>
                送出評論
              </div>
            </div>
          </div>
        </div>
      </div>
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

  if (store.DinnerProductReducer.affectedRows)
    my_store = {
      ...my_store,
      affectedRows: store.DinnerProductReducer.affectedRows,
    }

  if (store.DinnerProductReducer.comment_data.length !== 0)
    my_store = {
      ...my_store,
      comment_data: store.DinnerProductReducer.comment_data,
    }

  return my_store
}
export default withRouter(connect(mapStateToProps)(Section3))

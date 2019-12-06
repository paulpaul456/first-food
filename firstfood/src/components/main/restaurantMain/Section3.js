import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { tsPropertySignature } from '@babel/types'

import { connect } from 'react-redux'

import {
  handleResInputChangeAsync,
  showLoginBox,
  prev_pathAsync,
  readResCommentAsync,
  clickLikeOrNotAsync,
  clickReadMore,
} from '../../../action'

import swal from '@sweetalert/with-react'
import LazyLoad from 'react-lazyload'

class Section3 extends React.Component {
  constructor() {
    super()
    this.state = {
      comment: '',
      affectedRows: 0,
      click: false,
      star: 1,
    }
  }

  componentDidMount() {
    // 拿評論的資料
    // console.log('hihihi')
    let restaurant_id = this.props.restaurant_id
    // console.log(restaurant_id)
    this.props.dispatch(readResCommentAsync(restaurant_id))
  }

  componentDidUpdate(previousProps) {
    console.log(previousProps)
    console.log(this.props)
    if (previousProps.restaurant !== this.props.restaurant) {
      this.props.dispatch(
        readResCommentAsync(
          this.props.restaurant.restaurant_id,
          this.props.customer_id
        )
      )
    }
    if (
      this.props.restaurant &&
      previousProps.customer_id !== this.props.customer_id
    ) {
      this.props.dispatch(
        readResCommentAsync(
          this.props.restaurant.restaurant_id,
          this.props.customer_id,
          this.props.count
        )
      )
    }
    if (previousProps.affectedRows !== this.props.affectedRows) {
      this.setState({
        comment: '',
      })
      this.props.dispatch(
        readResCommentAsync(
          this.props.restaurant.restaurant_id,
          this.props.customer_id,
          this.props.count
        )
      )
    }
    if (
      previousProps.clickResComment &&
      previousProps.clickResComment !== this.props.clickResComment
    ) {
      this.props.dispatch(
        readResCommentAsync(
          this.props.restaurant.restaurant_id,
          this.props.customer_id,
          this.props.count
        )
      )
    }

    if (this.props.restaurant && previousProps.count !== this.props.count) {
      // console.log('拿更多評論')
      this.props.dispatch(
        readResCommentAsync(
          this.props.restaurant.restaurant_id,
          this.props.customer_id,
          this.props.count
        )
      )
    }
  }

  componentWillUnmount() {
    // console.log('willUnmount')
    this.props.dispatch(clickReadMore(1))
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
      let stars = 5
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
    let restaurant_id = this.props.restaurant.restaurant_id
    let stars = this.state.star
    this.props.dispatch(
      handleResInputChangeAsync(
        customer_id,
        restaurant_id,
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
    this.setState({
      star: 1,
    })
  }

  clickLikeOrNot = (
    customer_id,
    res_comment_id,
    like_or_not
    // alreadyClick_or_not
  ) => () => {
    if (!customer_id) {
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
      // console.log('來囉:' + like_or_not)
      this.props.dispatch(
        clickLikeOrNotAsync(
          customer_id,
          res_comment_id,
          like_or_not,
          this.props.restaurant.restaurant_id,
          this.props.count
        )
      )
    }
  }

  ClickReadMoreComments = () => {
    let count = Number(this.props.count) + 1
    let customer_id = this.props.customer_id

    if (!customer_id) {
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
      this.props.dispatch(clickReadMore(count))
    }
  }

  clickStar = star => () => {
    this.setState({
      star: star,
    })
  }

  render() {
    if (!this.props.restaurant) {
      return <>資料載入中</>
    }
    // console.log(this.props)
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
                        {this.props.comment_data
                          ? this.props.comment_data.number.number
                          : ''}
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
                    <LazyLoad height={200}>
                      <div className="col-md-11 d-flex mx-auto per_comment_wrap">
                        <div className="img_wrap col-md-2">
                          <img
                            className="customer_img"
                            src={`http://localhost:6003/images/${el.my_file}`}
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
                            <p>{el.comment}</p>
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
                              onClick={this.clickLikeOrNot(
                                this.props.customer_id,
                                el.res_comment_id,
                                // true
                                el.like_or_not === '已按喜歡'
                                  ? 5
                                  : el.like_or_not === '已按討厭'
                                  ? 3
                                  : 1
                              )}
                            >
                              {el.like ? el.like : 0}
                            </i>
                            <i
                              className={
                                el.like_or_not
                                  ? el.like_or_not === '已按討厭'
                                    ? 'fas fa-thumbs-down color'
                                    : 'fas fa-thumbs-down'
                                  : 'fas fa-thumbs-down'
                              }
                              onClick={this.clickLikeOrNot(
                                this.props.customer_id,
                                el.res_comment_id,
                                // false,
                                el.like_or_not === '已按討厭'
                                  ? 6
                                  : el.like_or_not === '已按喜歡'
                                  ? 4
                                  : 2
                              )}
                            >
                              {el.dislike ? el.dislike : 0}
                            </i>
                            <p>
                              {el.create_at.slice(0, 10) +
                                ' ' +
                                el.create_at.slice(11, 19)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </LazyLoad>
                  )
                })
              : '尚無評論'}

            {this.props.comment_data ? (
              this.props.comment_data.number.number >= this.props.count * 3 ? (
                <div className="col-md-12 mx-auto read_comment">
                  <div
                    className="read_more_comment clickmeplz"
                    onClick={this.ClickReadMoreComments}
                  >
                    看更多評論
                  </div>
                </div>
              ) : (
                ''
              )
            ) : (
              ''
            )}

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
              <div
                className="click_comment clickmeplz"
                onClick={this.handleLeaveComment}
              >
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
  // let my_store = { comment_data: store.RestaurantReducer.comment_data }

  // if (store.RestaurantReducer.data.length === 0) {
  //   return my_store
  // }

  let my_store = {
    restaurant: store.RestaurantReducer.data[0],
    oldName: store.RestaurantReducer.oldName,
    cooktype: store.RestaurantReducer.cooktype,
  }

  if (store.RestaurantReducer.data.length !== 0)
    my_store = {
      ...my_store,
      restaurant: store.RestaurantReducer.data[0],
    }

  if (store.loginReducer.isLogin)
    my_store = {
      ...my_store,
      customer_id: store.loginReducer.member[0].customer_id,
    }

  if (store.RestaurantReducer.affectedRows)
    my_store = {
      ...my_store,
      affectedRows: store.RestaurantReducer.affectedRows,
    }

  if (store.RestaurantReducer.comment_data.length !== 0)
    my_store = {
      ...my_store,
      comment_data: store.RestaurantReducer.comment_data,
      clickResComment: store.RestaurantReducer.clickResComment,
      count: store.RestaurantReducer.count,
    }

  return my_store
}
export default withRouter(connect(mapStateToProps)(Section3))

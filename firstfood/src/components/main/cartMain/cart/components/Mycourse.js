import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import { connect } from 'react-redux'
import {
  coursesetdata,
  courseselectdata,
  coursedeletedata,
  courseJoinNextBuy,
} from '../../../../../action/MyCartaction/course'

class Mycourse extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }
  select(event, e) {
    // this.props.dispatch(setdata({ checked: event.target.checked, id }))
    this.props.dispatch(
      courseselectdata({ checked: event.target.checked, e: e })
    )

    let checkCss = event.target.parentNode.parentNode.parentNode.parentNode
    if (event.target.checked == true) {
      checkCss.classList.add('check')
    } else {
      checkCss.classList.remove('check')
    }
  }
  addone(e) {
    e.quantity++
    this.props.dispatch(coursesetdata(e))
  }
  reduceone(e) {
    if (e.quantity > 0) {
      e.quantity--
      this.props.dispatch(coursesetdata(e))
      return false
    }
  }
  deleteitem(e) {
    confirmAlert({
      title: '提示',
      message: '確定要刪除此項目嗎?',
      buttons: [
        {
          label: '確定',
          onClick: () => this.props.dispatch(coursedeletedata(e)),
        },
        {
          label: '取消',
          onClick: () => {},
        },
      ],
    })
  }

  nextbuy = id => () => {
    console.log(id)
    confirmAlert({
      title: '提示',
      message: '確定要將此項目入收藏嗎?',
      buttons: [
        {
          label: '確定',
          onClick: () => this.props.dispatch(courseJoinNextBuy(id)),
        },
        {
          label: '取消',
          onClick: () => {},
        },
      ],
    })
  }

  render() {
    let e = this.props.e
    console.log(e)
    return (
      <>
        <div className="section1-cart">
          <div className="container section1-cart-list" key={e.course_cart_id}>
            <div className="row">
              <div className="col-md-7 section1-cart-list-left mt-3">
                <input
                  className="section1-cart-list-left-input"
                  onChange={event => this.select(event, e)}
                  checked={e.checked}
                  type="checkbox"
                />
                <div className="section1-cart-list-left-1">
                  <div className="section1-cart-list-left-image">
                    <img
                      className="section1-cart-list-left-img"
                      src={'/assets/images/courses/' + e.my_file}
                      alt=""
                    />
                  </div>
                  <div className="product-category">{e.course_name}</div>
                </div>
                <div className="section1-cart-list-left-4p">
                  <p>教室:{e.name}</p>
                  <p>
                    <br /> 日期:{e.course_date.substr(0, 10)}
                    <br /> 時段:{e.course_time}
                    <br /> 電話:{e.phone}
                    <br /> 地址:{e.address}
                  </p>

                  <p className="section1-cart-list-left-p">
                    {e.created_at.substr(0, 10)} 預約
                  </p>
                  <p>中秋天良好個秋檔期全館79折</p>
                </div>
              </div>

              <div className="section1-cart-list-left-4p-rwd">
                <p>教室:{e.name}</p>
                <p>
                  <br /> 日期:{e.course_date.substr(0, 10)}
                  <br /> 時段:{e.course_time}
                  <br /> 電話:{e.phone}
                  <br /> 地址:{e.address}
                </p>

                <p className="section1-cart-list-left-p">
                  {e.created_at.substr(0, 10)} 預約
                </p>
                <p>中秋天良好個秋檔期全館79折</p>
              </div>

              <div className="col-md-5 ">
                <div className="section1-cart-list-right">
                  <div className="section1-cart-list-right-p1">
                    <p className="cart-rwd-p">單價:</p>
                    {e.cost}
                  </div>
                  <div>
                    <p className="cart-rwd-p">總價:</p>{' '}
                    {(e.cost * 100 * e.quantity) / 100}
                  </div>
                  <div>
                    <p className="cart-rwd-p">庫存:</p> 有
                  </div>
                  <div>
                    <div>
                      <svg
                        onClick={this.reduceone.bind(this, e)}
                        className="decrement"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g
                          id="Group_119"
                          data-name="Group 119"
                          transform="translate(0 0.224)"
                        >
                          <g
                            id="Ellipse_13"
                            data-name="Ellipse 13"
                            transform="translate(0 -0.224)"
                            stroke="#000"
                            strokeWidth="1"
                          >
                            <circle cx="10" cy="10" r="10" stroke="none" />
                            <circle cx="10" cy="10" r="9.5" fill="none" />
                          </g>
                          <g
                            id="Group_118"
                            data-name="Group 118"
                            transform="translate(3.734 8.714)"
                          >
                            <g
                              id="Rectangle_1464"
                              data-name="Rectangle 1464"
                              transform="translate(0.266 0.062)"
                              fill="#6a8372"
                              stroke="#fff"
                              strokeWidth="1"
                            >
                              <rect
                                width="12"
                                height="2"
                                rx="1"
                                stroke="none"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width="11"
                                height="1"
                                rx="0.5"
                                fill="none"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>

                      <input
                        value={e.quantity}
                        onChange={() => {}}
                        className="item-count-inp"
                        type="text"
                      />

                      <svg
                        onClick={this.addone.bind(this, e)}
                        className="increment"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <g
                          id="Group_161"
                          data-name="Group 161"
                          transform="translate(0.338 0.224)"
                        >
                          <g
                            id="Path_115"
                            data-name="Path 115"
                            transform="translate(-0.338 -0.224)"
                          >
                            <path
                              d="M 10 19.5 C 4.761680126190186 19.5 0.5 15.23832035064697 0.5 10 C 0.5 4.761680126190186 4.761680126190186 0.5 10 0.5 C 15.23832035064697 0.5 19.5 4.761680126190186 19.5 10 C 19.5 15.23832035064697 15.23832035064697 19.5 10 19.5 Z"
                              stroke="none"
                            />
                            <path
                              d="M 10 1 C 5.037380218505859 1 1 5.037380218505859 1 10 C 1 14.96261978149414 5.037380218505859 19 10 19 C 14.96261978149414 19 19 14.96261978149414 19 10 C 19 5.037380218505859 14.96261978149414 1 10 1 M 10 0 C 15.52285003662109 0 20 4.477149963378906 20 10 C 20 15.52285003662109 15.52285003662109 20 10 20 C 4.477149963378906 20 0 15.52285003662109 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
                              stroke="none"
                            />
                          </g>
                          <g
                            id="Group_118"
                            data-name="Group 118"
                            transform="translate(3.734 8.714)"
                          >
                            <g
                              id="Rectangle_1464"
                              data-name="Rectangle 1464"
                              transform="translate(-0.073 0.062)"
                              stroke="#fff"
                              strokeWidth="1"
                            >
                              <rect
                                width="13"
                                height="2"
                                rx="1"
                                stroke="none"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width="12"
                                height="1"
                                rx="0.5"
                                fill="none"
                              />
                            </g>
                          </g>
                          <g
                            id="Group_162"
                            data-name="Group 162"
                            transform="translate(10.17 3.734) rotate(90)"
                          >
                            <g
                              id="Rectangle_1464-2"
                              data-name="Rectangle 1464"
                              transform="translate(0.042 -0.492)"
                              stroke="#fff"
                              strokeWidth="1"
                            >
                              <rect
                                width="12"
                                height="2"
                                rx="1"
                                stroke="none"
                              />
                              <rect
                                x="0.5"
                                y="0.5"
                                width="11"
                                height="1"
                                rx="0.5"
                                fill="none"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>

                    <div
                      className="section1-cart-list-right-nextbuy"
                      onClick={this.nextbuy(e.course_cart_id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="38"
                        viewBox="0 0 122 38"
                      >
                        <g
                          id="Group_383"
                          data-name="Group 383"
                          transform="translate(-0.41 0.358)"
                        >
                          <rect
                            id="Rectangle_1467"
                            data-name="Rectangle 1467"
                            width="122"
                            height="38"
                            transform="translate(0.41 -0.358)"
                            fill="#ac1515"
                          />
                          <text
                            id="下次購物"
                            transform="translate(44.41 23.642)"
                            fill="#fff"
                            fontSize="11"
                            fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                            fontWeight="700"
                          >
                            <tspan x="-22" y="0">
                              下次購物
                            </tspan>
                          </text>
                          <path
                            id="shopping-cart-solid"
                            d="M19.583,11.173,21.336,3.46a.89.89,0,0,0-.868-1.087H5.9L5.564.712A.89.89,0,0,0,4.692,0H.89A.89.89,0,0,0,0,.89v.593a.89.89,0,0,0,.89.89H3.481l2.6,12.735a2.077,2.077,0,1,0,2.486.318h7.774A2.076,2.076,0,1,0,18.7,15.04l.2-.9a.89.89,0,0,0-.868-1.087H8.088l-.243-1.187h10.87A.89.89,0,0,0,19.583,11.173Z"
                            transform="translate(84.693 8.985)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>

                    <div
                      onClick={this.deleteitem.bind(this, e)}
                      className="section1-cart-list-right-delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="38"
                        viewBox="0 0 122 38"
                      >
                        <g
                          id="Group_412"
                          data-name="Group 412"
                          transform="translate(-1342 -2059)"
                        >
                          <g
                            id="Group_390"
                            data-name="Group 390"
                            transform="translate(1341.59 2059.358)"
                          >
                            <rect
                              id="Rectangle_1467"
                              data-name="Rectangle 1467"
                              width="122"
                              height="38"
                              transform="translate(0.41 -0.358)"
                              fill="#ac1515"
                            />
                            <text
                              id="刪除"
                              transform="translate(44.41 23.642)"
                              fill="#fff"
                              fontSize="11"
                              fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                              fontWeight="700"
                            >
                              <tspan x="-11" y="0">
                                刪除
                              </tspan>
                            </text>
                          </g>
                          <path
                            id="trash-alt-solid"
                            d="M1.463,21.214a2.195,2.195,0,0,0,2.195,2.195H16.825a2.195,2.195,0,0,0,2.195-2.195V5.852H1.463ZM13.9,9.509a.732.732,0,1,1,1.463,0V19.751a.732.732,0,1,1-1.463,0Zm-4.389,0a.732.732,0,1,1,1.463,0V19.751a.732.732,0,1,1-1.463,0Zm-4.389,0a.732.732,0,1,1,1.463,0V19.751a.732.732,0,1,1-1.463,0Zm14.63-8.047H14.264l-.43-.855A1.1,1.1,0,0,0,12.852,0H7.626a1.084,1.084,0,0,0-.978.608l-.43.855H.732A.732.732,0,0,0,0,2.194V3.657a.732.732,0,0,0,.732.732H19.751a.732.732,0,0,0,.732-.732V2.194A.732.732,0,0,0,19.751,1.463Z"
                            transform="translate(1429.518 2068.092)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </div>
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

let mapstatetoprops = state => {
  return {
    car: state.car,
    course: state.course,
  }
}

export default connect(mapstatetoprops)(Mycourse)

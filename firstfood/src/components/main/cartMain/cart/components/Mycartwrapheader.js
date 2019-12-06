import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectAll } from '../../../../../action/MyCartaction/car'

class Mycartwrapheader extends Component {
  selectall(e) {
    let isselectall = e.target.checked
    this.props.dispatch(selectAll(isselectall)) //dispatch到action那邊 會先找小括弧裡面的值
  }
  all() {
    return this.props.car.every(e => e.checked) //每個項目的CHECK都是TURE的話 則返回TRUE
  }
  render() {
    return (
      <>
        <div className="section1-div3">
          <svg
            className="section1-div3-svg1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 324.739 80.192"
          >
            <g
              id="Group_430"
              data-name="Group 430"
              transform="translate(-403.5 -903.37)"
            >
              <path
                id="Path_167"
                data-name="Path 167"
                d="M8653.91,101.888l39.828,38.6-39.828,38.6H8372.654V101.888Z"
                transform="translate(-7967.654 802.982)"
                fill="#ac1515"
                stroke="#fff"
                strokeWidth="3"
              />
              <text
                id="購物明細"
                transform="translate(455 960)"
                fill="#fff"
                fontSize="41"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  購物明細
                </tspan>
              </text>
            </g>
          </svg>
        </div>
        <div>
    <p className="section1-div3-p1">親愛的{this.props.loginReducer.member[0]['name']}會員您好:</p>
        </div>

        <div>
          <svg
            className="section1-svg2"
            xmlns="http://www.w3.org/2000/svg"
            width="1110"
            height="38"
            viewBox="0 0 1110 38"
          >
            <g
              id="Group_382"
              data-name="Group 382"
              transform="translate(-405 -1006)"
            >
              <g id="Group_381" data-name="Group 381">
                <text
                  id="商品明細"
                  transform="translate(775 1033)"
                  fill="#fff"
                  fontSize="23"
                  fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                  fontWeight="700"
                >
                  <tspan x="0" y="0">
                    商品明細
                  </tspan>
                </text>
              </g>
              <rect
                id="Rectangle_1529"
                data-name="Rectangle 1529"
                width="1110"
                height="38"
                transform="translate(405 1006)"
                fill="#5f5f5f"
              />

              <text
                id="商品明細-2"
                data-name="商品明細"
                transform="translate(755 1033)"
                fill="#fff"
                fontSize="23"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  商品明細
                </tspan>
              </text>
              <text
                id="單價"
                transform="translate(1085 1033)"
                fill="#fff"
                fontSize="23"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  單價
                </tspan>
              </text>
              <text
                id="庫存"
                transform="translate(1260 1033)"
                fill="#fff"
                fontSize="23"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  庫存
                </tspan>
              </text>
              <text
                id="總計"
                transform="translate(1175 1033)"
                fill="#fff"
                fontSize="23"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  總計
                </tspan>
              </text>
              <text
                id="變更明細"
                transform="translate(1360 1033)"
                fill="#fff"
                fontSize="23"
                fontFamily="YuGothicUI-Bold, Yu Gothic UI"
                fontWeight="700"
              >
                <tspan x="0" y="0">
                  變更明細
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </>
    )
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
    course: state.course,
    loginReducer: state.loginReducer,
  }
}

export default connect(mapstatetoprops)(Mycartwrapheader)

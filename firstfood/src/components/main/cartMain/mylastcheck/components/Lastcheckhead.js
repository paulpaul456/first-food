import React, { Component } from 'react'
import {connect} from 'react-redux'
class Lastcheckhead extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <div className="last-check-head">
          <svg
            className="last-check-head-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1113 54.263"
          >
            <g
              id="Group_569"
              data-name="Group 569"
              transform="translate(-403.5 -589.143)"
            >
              <g
                id="Group_394"
                data-name="Group 394"
                transform="translate(0 -321)"
              >
                <path
                  id="Path_167"
                  data-name="Path 167"
                  d="M8557.763,101.888l26.212,25.4-26.212,25.4H8372.654v-50.8Z"
                  transform="translate(-7967.654 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_166"
                  data-name="Path 166"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7782.342 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_165"
                  data-name="Path 165"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7597.109 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_164"
                  data-name="Path 164"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7412.113 809.944)"
                  fill="#ac1515"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_163"
                  data-name="Path 163"
                  d="M8557.686,101.888l26.212,25.132-26.212,25.942H8372.307l26.482-25.942-26.482-25.132Z"
                  transform="translate(-7226.88 809.944)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
                <path
                  id="Path_162"
                  data-name="Path 162"
                  d="M10566.573,122.906V71.643h-184.591l26.192,25.568-26.192,25.695Z"
                  transform="translate(-9051.573 840)"
                  fill="#5f5f5f"
                  stroke="#fff"
                  strokeWidth="3"
                />
              </g>
              <text
                id="STEP-1"
                transform="translate(454 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-1
                </tspan>
              </text>
              <text
                id="STEP-2"
                transform="translate(649 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-2
                </tspan>
              </text>
              <text
                id="STEP-3"
                transform="translate(837 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-3
                </tspan>
              </text>
              <text
                id="STEP-4"
                transform="translate(1025 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-4
                </tspan>
              </text>
              <text
                id="STEP-5"
                transform="translate(1208 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="SegoeUI, Segoe UI"
              >
                <tspan x="0" y="0">
                  STEP-5
                </tspan>
              </text>
              <text
                id="結束"
                transform="translate(1403 628)"
                fill="#fff"
                fontSize="30"
                fontFamily="YuGothicUI-Regular, Yu Gothic UI"
              >
                <tspan x="0" y="0">
                  結束
                </tspan>
              </text>
            </g>
          </svg>

          <p className="last-check-head-p1">最後確認</p>

          <p className="last-check-head-p2">親愛的{this.props.loginReducer.member[0]['name']}會員您好:</p>
        </div>
      </>
    )
  }
}

let mapstatetoprops = state => {
  return {
    car: state.car,
    course: state.course,
    dn: state.dn,
    loginReducer: state.loginReducer,
    customer_id: state.loginReducer.member[0]
  }
}
export default connect(mapstatetoprops)(Lastcheckhead)

 

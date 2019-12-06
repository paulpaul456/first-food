import React from 'react'
import Logo from '../../../assets/images/logo2.svg'
import { NavLink } from 'react-router-dom'

class CoursesTitle extends React.Component {
  //初始建構
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}
  render() {
    const { type, id } = this.props.match.params
    return (
      <>
        <div className="coursesTitle d-flex">
          <NavLink to={'/'} className="col-6 col-md-6 col-lg-6 row">
            <div className="">
              <span>
                FIRST
                <br />
                FOOD
              </span>
            </div>
            <img src={Logo} alt="" />
          </NavLink>
          <NavLink to={'/courses'} className="coursesName col-3 col-md-2 col-lg-2">
            課程
          </NavLink>
          <div
            className="coursesIntro col-3 col-md-4 col-lg-4 d-flex"
            style={type || id ? { borderLeft: '1px solid #707070' } : {}}
          >
            <span>
              {type == 'dinner'
                ? '正餐'
                : type == 'dessert'
                ? '甜點'
                : id
                ? '細節頁'
                : ''}
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default CoursesTitle

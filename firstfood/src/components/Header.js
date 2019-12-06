import React from 'react'
import logo from '../assets/images/logo.svg'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MediaQueries from '../window/mediaQueries/MediaQueries'
import { breakpointIsGreaterThan } from '../window/mediaQueries/Helper'

import {
  showLoginBox,
  memberLogout,
  closeError,
  clearidcartzs,
} from '../action/checkLoginAction'
import swal from '@sweetalert/with-react'

let keywordType = {
  course: '課程',
  farmer_product: '食材',
  dinner_list: '菜色',
  restaurant: '餐廳',
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      total: '',
      keyword: [],
      search: false,
    }
  }

  // //進行登入
  // authenticate = callback => {
  //   this.props.dispatch(
  //     { type: 'APP_LOGIN', payload: { isLogginActive: true } },
  //     () => setTimeout(callback, 300)
  //   )
  // }

  // //進行登出
  // signout = callback => {
  //   this.props.dispatch(
  //     { type: 'APP_LOGOUT', payload: { isLogginActive: false } },
  //     () => setTimeout(callback, 300)
  //   )
  // }
  handleLogin = () => {
    this.props.dispatch(showLoginBox())
  }

  handleLogout = () => {
    console.log('登出')
    this.props.dispatch(memberLogout())
    this.props.dispatch(closeError())
    this.props.dispatch(clearidcartzs())
    this.props.history.push('/')
    swal({
      icon: 'success',
      // text: 'You clicked the button!',
      title: '登出成功!',
      timer: 2000,
    })
  }
  handleSearchClick = async (e, bool = false) => {
    // e.stopPropagation()
    this.setState({
      search: bool,
    })
  }

  handleInputChange = async (e) => {
    // console.log(e.target.value)
    let keyword = e.target.value
    try {
      const response = await fetch(
        `http://localhost:6003/api/search/${keyword}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        },
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      if (payload && payload.data) {
        console.log('有東西')
        console.log(payload.data)
        this.setState({
          keyword: payload.data,
        })
      }
    } catch (e) {
      console.log(e)
    }
    if (keyword == []) {
      this.setState({
        keyword: [],
      })
    }
  }
  handleRouter = async (name, type) => {
    // console.log(this.props)
    try {
      const response = await fetch(
        `http://localhost:6003/api/search/`,
        {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            name,
            type,
          }),
        },
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data
      console.log(payload)
      this.routerPush(payload.type, payload.data[0])
    } catch (e) {
      console.log(e)
    }
  }
  routerPush = (type, data) => {
    console.log(type, data)
    this.setState({ search: false })
    switch (type) {
      case 'course':
        return this.props.history.push(`/coursesContent/${data.course_id}`)
        break
      case 'farmer_product':
        return this.props.history.push(`/product/good/${data.sid}`)
        break
      case 'dinner_list':
        return this.props.history.push(`/dinnerlist/${data.restaurant_id}/0/${data.dinner_id}`)
        break
      case 'restaurant':
        return this.props.history.push(`/restaurant/${data.restaurant_id}/0`)
        break
      default:
        break
    }
  }

  render() {
    // console.log('belllll',this.props.bell)
    return (
      <>
        <MediaQueries>
          {breakpointIsGreaterThan(769, this.props.breakpoint.size) && (
            <header id="header" className="position-relative row">
              <div id="logo" className="col-6 col-sm-6 col-md-6 col-lg-7 p-0">
                <NavLink key={1} to={'/'}>
                  <img src={logo} alt=""/>
                  <br/>
                  <span>FIRST FOOD ONLINESHOP</span>
                </NavLink>
              </div>

              <div className="middleLine"></div>
              <div className="middleLine"></div>

              <div
                id="memberNav"
                className="d-inline-block row col-4 col-sm-5 col-md-4 col-lg-3"
              >
                {this.props.isLogin ? (
                  <>
                    <NavLink exact key={2} to={'/member'}>
                      / 會員中心{' '}
                    </NavLink>
                    {/* <NavLink exact key={21} to={'/member'}>
                    / 登出{' '}
                  </NavLink> */}
                    <a
                      style={{ cursor: 'pointer' }}
                      onClick={this.handleLogout}
                    >
                      / 登出
                    </a>
                  </>
                ) : (
                  <>
                    {/* <NavLink exact key={3} to={'/member/login'}>
                    / 會員{' '}
                  </NavLink> */}
                    <a style={{ cursor: 'pointer' }} onClick={this.handleLogin}>
                      / 會員
                    </a>
                  </>
                )}

                <NavLink key={4} to={'/cart'} className="navCart">
                  / 購物車
                  {/*{console.log('this.props.bell')}*/}
                  {/*{console.log(this.props.bell)}*/}
                  <div
                    className={
                      this.props.bell instanceof Array ? '' : 'headCart'
                    }
                  >
                    {this.props.bell}
                  </div>
                  {/* <div className={ this.props.bell.length==0 ? "" : "headCart"}>{this.props.bell}</div> */}
                  {/* <div className={(this.props.bell===[])?" ":"headCart"}>+{this.props.bell}</div> */}
                  {/* <div className="headCart">+{this.props.bell}</div> */}
                </NavLink>
                {/* <NavLink key={5} to={'/test'}>
                / Q&A{' '}
              </NavLink> */}
              </div>
              <div className="col-2 col-sm-1 col-md-2 col-lg-2 p-0">
                <div id="searchIcon" className="position-relative text-center"
                     onClick={(e) => this.handleSearchClick(e, !this.state.search)}>
                  <div className="searchBlock position-absolute"></div>
                  <i className="fas fa-search fa-lg"></i>
                  <div className="searchBlock position-absolute"></div>
                </div>
              </div>
              <div className={`col-6 ml-auto searchInput position-relative ${this.state.search ? 'active' : ''}`}>
                <input type="text" placeholder={'搜尋餐廳、菜色、食材、課程'} style={{ width: '100%' }}
                       onChange={this.handleInputChange}/>
                <div className={this.state.keyword.length > 0 ? 'keyword' : ''}>
                  {this.state.keyword.map((item, index) => (
                    <div key={index} className={'row justify-content-between keywordText align-items-center p-2'}
                         onClick={() => this.handleRouter(item.name, item.type)}>
                      <p>{item.name}</p> <p style={{ color: '#c5c5c5' }}>{keywordType[item.type]}</p>
                    </div>

                  ))}
                </div>

              </div>
            </header>
          )}
        </MediaQueries>
      </>
    )
  }
}

const mapStateToProps = store => ({
  breakpoint: store.ui.windowUi.screenBreakpoint,
  isLogin: store.loginReducer.isLogin,
  bell: store.bells.belldata,
})

export default withRouter(connect(mapStateToProps)(Header))

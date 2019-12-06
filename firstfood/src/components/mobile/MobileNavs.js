import React from 'react'
import { connect } from 'react-redux'
import { closeError, memberLogout, mobileShowNavs, showLoginBox } from '../../action'
import { NavLink, withRouter } from 'react-router-dom'
import swal from '@sweetalert/with-react'

const NavLinkItems = {
  首頁: '/',
  代客煮: '/',
  市集: '/product',
  課程: '/courses',
  討論區: '/forum',
  美食地圖: '/map',
}
const MobileNavs = props => {
  const handleLogin = () => {
    props.dispatch(showLoginBox())
    props.dispatch(mobileShowNavs(!isShow))
  }

  const handleLogout = () => {
    props.dispatch(memberLogout())
    props.dispatch(closeError())
    props.history.push('/')
    swal({
      icon: 'success',
      // text: 'You clicked the button!',
      title: '登出成功!',
      timer: 2000,
    })
    props.dispatch(mobileShowNavs(!isShow))
  }
  const { isShow } = (props.mobileUi)
  const keys = Object.keys(NavLinkItems)
  return (
    <>
          <div className={`mobileNavsBox ${isShow ? 'active' : ''}`}
               onClick={() => {
                 props.dispatch(mobileShowNavs(!isShow))
               }}
          ></div>
          <div className={`mobileNavs ${isShow ? 'active' : ''}`}>
            <br/><br/>
            {keys.map((key, ind) => (
                <div key={ind}>
                  <NavLink to={NavLinkItems[key]} className={'d-block text-center navbarItem'}
                           onClick={() => {
                             props.dispatch(mobileShowNavs(!isShow))
                           }}>
                    <h4>{key}</h4>
                  </NavLink>
                  <div className='navsLine'></div>
                </div>
              ),
            )}
            {props.isLogin ? (
              <>
                <div style={{ cursor: 'pointer' }} className={'text-center navbarItem p-5'} onClick={handleLogout}>
                   登出
                </div>
              </>
            ) : (
              <>
                <div style={{ cursor: 'pointer' }} className={'row justify-content-center navbarItem p-5'} onClick={handleLogin}>
                <span>登入 </span>   / <span> 註冊</span>
                </div>
              </>
            )}
          </div>
    </>
  )
}

const mapStateToProps = store => {
  const { ui } = store
  const { mobile } = ui['componentUi'] || {
    mobile: {
      Navs: { isShow: false },
    },
  }
  return {
    mobileUi: mobile.Navs,
    isLogin: store.loginReducer.isLogin,
  }
}
export default withRouter(connect(mapStateToProps)(MobileNavs))

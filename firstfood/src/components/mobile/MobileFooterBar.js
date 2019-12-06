import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { showLoginBox } from '../../action'

const MobileFootBar = props => {
  const handleLogin = e => {
    if (!props.isLogin) {
      e.preventDefault()
      props.dispatch(showLoginBox())
    }
  }
  return (
    <>
      <div className="footbar d-flex justify-content-around align-items-center overflow-hidden">
        <NavLink
          to={'/member'}
          key={1}
          className="position-relative"
          onClick={handleLogin}
        >
          <i className="fas fa-user-alt fa-3x btn"></i>
          {/* <div className="reddot">
            <div className="num">99+</div>
            {' '}
          </div> */}
        </NavLink>
        <NavLink
          to={'/cart'}
          key={2}
          className="position-relative"
          onClick={handleLogin}
        >
          <i className="fas fa-shopping-cart fa-3x btn"></i>
          {console.log('propssssssssss')}
          {console.log(props.bell)}
          {/* {(!props.bell instanceof Array) ?<div>123456
          </div>: <div>999999999</div>} */}
        
          {/* <div className={!props.bell.length == 0 ? '' : 'reddot'}>
            {props.bell}
            <div className={ (!props.bell instanceof Array) ? "" : "num"}>{props.bell}</div>
          </div> */}
        </NavLink>
        <NavLink
          to={'/member/collection'}
          key={3}
          className="position-relative"
          onClick={handleLogin}
        >
          <i className="fas fa-heart fa-3x btn"></i>
          {/* <div className="reddot">
            <div className="num">9</div>
          </div> */}
        </NavLink>
        <NavLink to={'/map'} key={4} className="position-relative">
          <i className="fas fa-map-marked-alt fa-3x btn"></i>
          {/* <div className="reddot">
            <div className="num">9</div>
          </div> */}
        </NavLink>
      </div>
    </>
  )
}

const mapStateToProps = store => ({
  isLogin: store.loginReducer.isLogin,
  bell: store.bells.belldata,
})

export default connect(mapStateToProps)(MobileFootBar)

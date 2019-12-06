import React from 'react'
import { connect } from 'react-redux'
import MediaQueries from '../window/mediaQueries/MediaQueries'
import {breakpointIsGreaterThan} from '../window/mediaQueries/Helper'

import { NavLink } from 'react-router-dom'

const Navbars = props => {
  return (
    <>
      <MediaQueries>
        { breakpointIsGreaterThan(769,props.breakpoint.size) &&
        <div id="navbar" className="row">
          <NavLink key={1} to={'/'} className={'col-2 text-center navbarItem'}>
            <div className="navbarBlock" style={{ marginLeft: '-1px' }}></div>
            首頁
          </NavLink>
          <NavLink
            key={2}
            to={'/'}
            className={'col-2 text-center navbarItem'}
          >
            <div className="navbarBlock"></div>
            代客煮
          </NavLink>
          <NavLink
            key={3}
            to={'/product'}
            className={'col-2 text-center navbarItem'}
          >
            <div className="navbarBlock"></div>
            市集
          </NavLink>
          <NavLink
            key={4}
            to={'/courses'}
            className={'col-2 text-center navbarItem'}
          >
            <div className="navbarBlock"></div>
            課程
          </NavLink>
          <NavLink
            key={5}
            to={'/forum'}
            className={'col-2 text-center navbarItem'}
          >
            <div className="navbarBlock"></div>
            討論區
          </NavLink>
          <NavLink
            key={6}
            to={'/map/'}
            className={'col-2 text-center navbarItem'}
          >
            <div className="navbarBlock" style={{ marginRight: '-1px' }}></div>
            美食地圖
          </NavLink>
        </div> }
      </MediaQueries>
    </>
  )
}

const mapStateToProps = store => {
  return {
    breakpoint: store.ui.windowUi.screenBreakpoint
  }
}
export default connect(mapStateToProps)(Navbars)

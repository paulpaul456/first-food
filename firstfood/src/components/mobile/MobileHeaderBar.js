import React from 'react'
import { NavLink } from 'react-router-dom'
import logoText from '../../assets/images/logotext.svg'
import { connect } from 'react-redux'
import { mobileShowNavs } from '../../action'

const MobileHeaderBar = props => {
  const { isShow } = (props.mobileUi)

  return (
    <>
      <div className="mobileHeaderBar d-flex justify-content-between align-items-center">
        <NavLink key={1} to={'/'} className="ml-5">
          <img src={logoText} alt="" height="50px"/>
        </NavLink>
        <div className="row align-items-center ml-1 mr-4">
          <div>
            <i className="mobileSearch fas fa-search fa-2x mr-4"></i>
          </div>
          <div className={`mobileHamburger ${isShow ? 'active' : ''}`}
               onClick={() => {
                 // setActive(!active)
                 props.dispatch(mobileShowNavs(!isShow))
               }}>
            <div className="hamburgerBox">
              <div className="headBox"></div>
              <div className="hamburgerLine firstLine"></div>
              <div className="hamburgerLine secondLine"></div>
              <div className="hamburgerLine thirdLine"></div>
            </div>
            {/*<img src={hambuger} alt="" height="50px" className="rightmove" />*/}
          </div>
        </div>
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
  }
}
export default connect(mapStateToProps)(MobileHeaderBar)

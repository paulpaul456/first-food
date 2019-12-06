import React from 'react'
import MobileHeaderBar from './MobileHeaderBar'
import MobileFooterBar from './MobileFooterBar'
import MobileNavbars from './MobileNavs'
import MediaQueries from '../../window/mediaQueries/MediaQueries'
import { breakpointIsGreaterThan } from '../../window/mediaQueries/Helper'
import { connect } from 'react-redux'

const Mobile = props => {

  return (
    <>
      {!breakpointIsGreaterThan(769, props.breakpoint.size) &&
      <MediaQueries>
        <br/>
        <br/>
        <br/>
        <br/>
        <MobileNavbars/>
        < MobileHeaderBar/>
        < MobileFooterBar/>
      </MediaQueries>
      }
    </>
  )
}
const mapStateToProps = store => {
  const { ui } = store
  return {
    breakpoint: ui.windowUi.screenBreakpoint,
  }
}

export default connect(mapStateToProps)(Mobile)

import React from 'react'
import { connect } from 'react-redux'

const TitleLogoOnlyName = props => {
  if (props && props.member && props.member[0]) {
    return (
      <>
        <div className="logobutton">
          <div className="d-flex justify-content-start ">
            <div className="d-flex mt-2">
              <div className="sm-x">
                <div>您好:</div>
                <div>{props.member[0].nickname}</div>
              </div>
              <div className="col-1 sm-x">
                <img src="/assets/images/logo.svg" alt="" width="48px" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
})

export default connect(mapStateToProps)(TitleLogoOnlyName)

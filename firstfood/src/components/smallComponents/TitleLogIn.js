import React from 'react'

const TitleLogo = props => {
  return (
    <>
      <div className="d-flex">
        <div>
          <div>?'您好:':'First'</div>
          <div>?{}'會員':'Food'</div>
        </div>
        <div className="col-1">
          <img src="./assets/images/logo.svg" alt="" />
        </div>
      </div>
    </>
  )
}
export default TitleLogo

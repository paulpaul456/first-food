import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { loadRestaurantAsync } from '../../../action/index'

import ReactCompare from 'react-compare-image'
import C1 from '../../../assets/images/compare1.jpg'
import C2 from '../../../assets/images/compare2.jpg'

const HomeCompare = props => {
  const handleChange = e => {
    if (e > 0.95) {
      props.history.push('./map/西式')
    } else if (e < 0.05) {
      props.history.push('./map/中式')
    }
  }

  return (
    <>
      <div id="compare" className="">
        <div className="container">
          <div className="row justify-content-between">
            <h5>
              代客煮 <i className="fas fa-utensils"></i>
            </h5>
            <h5>First Food</h5>
          </div>
        </div>
        <div id="titleLine"></div>
        <div className="container">
          <ReactCompare
            sliderLineColor={'#C5C5C5'}
            onSliderPositionChange={handleChange}
            leftImageLabel={'中式'}
            rightImageLabel={'西式'}
            hover={false}
            leftImage={C1}
            rightImage={C2}
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(HomeCompare)

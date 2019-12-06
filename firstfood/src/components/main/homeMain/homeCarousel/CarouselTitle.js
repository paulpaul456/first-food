import React from 'react'
import Logo from '../../../../assets/images/logo2.svg'

const CarouselTitle = props => {
  const { text } = props
  const newText = text.split(',')
  return (
    <>
      <div id="title" className="d-flex">
        <div className="col-6 col-md-6  row">
          <div className="">
            <span>
              FIRST
              <br />
              FOOD
            </span>
          </div>
          <img src={Logo} alt="" />
        </div>
        <div id="dish" className="col-3 col-md-2 ">
          {newText[0]}
          <br />
          {newText[1]}
        </div>
        <div id="intro" className="col-3 col-md-4 d-flex">
          <span>簡介</span>
        </div>
      </div>
    </>
  )
}

export default CarouselTitle

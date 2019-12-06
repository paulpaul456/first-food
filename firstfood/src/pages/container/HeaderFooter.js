import React from 'react'

import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'

const HeaderFooter = props => {
  return (
    <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {props.children}
            <Footer location={props.location} />
          </div>
          {props.home ? (
            <>
              <img src={background1} className="bg1 position-absolute" alt="" />
              <img src={background2} className="bg2 position-absolute" alt="" />
              <div className="bottomLine position-absolute"></div>
            </>
          ) : props.location == '課程' ? (
            <img
              src={background1}
              className="courses-bg coursesContent-bg position-absolute"
              alt=""
            />
          ) : (
            <></>
          )}
        </div>
    </>
  )
}
export default HeaderFooter

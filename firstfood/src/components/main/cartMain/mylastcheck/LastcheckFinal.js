import React from 'react'
// import HeaderFooter from './container/HeaderFooter'
import Facebook from '../../../smallComponents/Facebook'
import Up from '../../../smallComponents/Up'
import Header from '../../../Header'
import Navbars from '../../../Navbars'
import Footer from '../../../Footer'

import Lastcheck from './Lastcheck'

const LastcheckFinal = props => {
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <Lastcheck />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LastcheckFinal

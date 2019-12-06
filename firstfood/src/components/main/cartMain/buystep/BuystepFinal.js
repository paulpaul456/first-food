import React from 'react'
// import HeaderFooter from './container/HeaderFooter'
import Facebook from '../../../smallComponents/Facebook'
import Up from '../../../smallComponents/Up'
import Header from '../../../Header'
import Navbars from '../../../Navbars'
import Footer from '../../../Footer'

import Buystep from './Buystep'

const BuystepFinal = props => {
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <Buystep />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default BuystepFinal

import React from 'react'
// import HeaderFooter from './container/HeaderFooter'
import Facebook from '../../../smallComponents/Facebook'
import Up from '../../../smallComponents/Up'
import Header from '../../../Header'
import Navbars from '../../../Navbars'
import Footer from '../../../Footer'

import Card from './Card'

const CardFinal = props => {
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <Card />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default CardFinal

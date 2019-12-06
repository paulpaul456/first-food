import React from 'react'
// import HeaderFooter from './container/HeaderFooter'
import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

import Mycart from '../components/main/cartMain/cart/Mycart'

const Cart = props => {
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <Mycart />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Cart

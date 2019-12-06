import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import ChartPie from '../components/main/memberMain/memberOrder/ChartPie'
import CricleTitle from '../components/main/memberMain/CircleTitle'
import TitleLogo from '../components/main/memberMain/TitleLogo'
import TitleLogIn from '../components/smallComponents/TitleLogIn'
import Comment from '../components/comment/Comment'
import Ordertable from '../components/main/memberMain/memberOrder/OrderTable'
import ProductSec1 from '../components/main/FarmerProductDetailsMain/ProductSec1'
import ProductSec2 from '../components/main/FarmerProductDetailsMain/ProductSec2'
import Section1 from '../components/main/restaurantMain/Section1'

import HeaderFooter from './container/HeaderFooter'

import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import background1 from '../assets/images/background.png'
import background2 from '../assets/images/background2.png'

const data = {
  labels: ['代客煮', '食材', '課程'],
  datasets: [
    {
      data: [300, 250, 100],
      backgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
      hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
    },
  ],
}

const Member = props => {
  const [member, setMember] = useState('Member')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <ProductSec1 />
          <ProductSec2 />
          <Section1 />
          <h1>132</h1>
          <div className="row">
            <div className="col-6">
              <ChartPie />
            </div>
            <div className="col-6">
              <ChartPie />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ChartPie />
            </div>
            <div className="col-6">
              <ChartPie />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ChartPie />
            </div>
            <div className="col-6">
              <ChartPie />
            </div>
          </div>
          <Ordertable />
          <Comment />
          <Footer location="安安" />
        </div>

        <img src={background1} className="bg1 position-absolute" alt="" />
        <img src={background2} className="bg2 position-absolute" alt="" />
        <div className="bottomLine position-absolute"></div>
      </div>
    </>
  )
}

export default Member

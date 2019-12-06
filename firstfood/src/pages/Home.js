import React, { useEffect, useState } from 'react'

import HeaderFooter from './container/HeaderFooter'

import HomeCarousel from '../components/main/homeMain/HomeCarousel'
import HomeCompare from '../components/main/homeMain/HomeCompare'
import HomeProduct from '../components/main/homeMain/HomeProduct'
import HomeClass from '../components/main/homeMain/HomeClass'
import HomeRecommend from '../components/main/homeMain/HomeRecommend'
import MobileFooterBar from '../components/mobile/MobileFooterBar'
import MobileHeaderBar from '../components/mobile/MobileHeaderBar'
import MobileNavbars from '../components/mobile/MobileNavs'
import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import background1 from '../assets/images/background.png'
import background2 from '../assets/images/background2.png'
import {ThemeProvider} from "styled-components";
import ChatBot from "react-simple-chatbot";
import {stepsTest} from "./course/CB/ChatBotCoversation";
import {breakpointIsGreaterThan} from "../window/mediaQueries/Helper";
import {connect} from "react-redux";
import {showLoginBox} from "../action";


let config = {
    avatarStyle: {
        boxShadow: 'none',
        height: '60px',
        minWidth: '46px',
        padding: '3px',
        objectFit: 'contain',
        filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.4))',
        borderRadius: '0',
    },
    botAvatar: '/assets/images/courses/whiteman4.png',
    width: '300px',
    height: '400px',
    floating: true,
    floatingIcon: <></>,
    floatingStyle: {
        background: 'transparent',
        backgroundImage: 'url(/assets/images/courses/whiteman4.png)',
        backgroundSize: 'contain',
        borderRadius: 0,
        boxShadow: 'none',
        height: '100px',
        bottom: '20px',
        right:'3vw',
        backgroundRepeat: 'no-repeat',
        filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5) )',
    },
}
let customPic = {}
let mobileConfig = {
    floatingStyle: config.floatingStyle,
}
const theme = {
    background: 'white',
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#0089a7',
    headerFontColor: '#fff',
    headerFontSize: '25px',
    botBubbleColor: '#0089a7',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#707070',
}

const Home = props => {
  const [home, setHome] = useState('Home')

  useEffect(() => {
    return () => {
    }
  })
    if (props.isLogin) {
        customPic = {
            userAvatar: `http://localhost:6003/images/${props.member[0].my_file}`,
        }
    }
    // if (!breakpointIsGreaterThan(769, props.breakpoint.size)) {
    //     mobileConfig = {
    //         floatingStyle: {
    //             ...config.floatingStyle,
    //             bottom: '200px',
    //         },
    //     }
    // }
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook/>
        <Up/>
        <div className="container">
          <Header/>
          <Navbars/>
        </div>
        <div id="homeMain" className="position-relative">
            <HomeCarousel/>
            <HomeCompare/>
            <HomeProduct/>
            <HomeClass/>
            <HomeRecommend/>
          </div>
        <div className="container">
        <Footer location={''}/>
        </div>
        <img src={background1} className="bg1 position-absolute" alt=""/>
        <img src={background2} className="bg2 position-absolute" alt=""/>
        <div className="bottomLine position-absolute"></div>
      </div>
        { breakpointIsGreaterThan(769, props.breakpoint.size)&&  <ThemeProvider theme={theme}>
            <ChatBot headerTitle={'初食'} steps={stepsTest(props)} {...config} {...mobileConfig} {...customPic}/>
        </ThemeProvider>
        }
    </>
  )
}
const mapStateToProps = store => {
    return {
        breakpoint: store.ui.windowUi.screenBreakpoint,
        isLogin: store.loginReducer.isLogin,
        member: store.loginReducer.member,
    }
}
export default connect(mapStateToProps, { showLoginBox })(Home)

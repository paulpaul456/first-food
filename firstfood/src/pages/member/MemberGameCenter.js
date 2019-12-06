import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import GameApp from '../../components/main/memberMain/game/GameApp'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'
import heartImg from '../../assets/images/member/heart.svg'
import locationImg from '../../assets/images/member/location.svg'
import discountImg from '../../assets/images/member/discount.svg'
import passwordImg from '../../assets/images/member/password.svg'
import shoppingCartImg from '../../assets/images/member/shoppingCart.svg'
import memberImg from '../../assets/images/member/member.svg'
import TitleLogo from '../../components/main/memberMain/TitleLogo'
import TitleLogoOnlyName from '../../components/main/memberMain/TitleLogoOnlyName'

class MemberGameCenter extends React.Component {
  render() {
    return (
      <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {/* {this.props.children} */}
            {/* <Footer location={this.props.location} /> */}
            <div className="my-5">
              {' '}
              {/* <TitleLogo /> */}
              <TitleLogoOnlyName />
            </div>

            <GameApp />

            <Footer />
          </div>
          {!this.props.home ? (
            <>
              <img src={background1} className="bg1 position-absolute" alt="" />
              {/* <img src={background2} className="bg2 position-absolute" alt="" /> */}
              <div className="bottomLine position-absolute"></div>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    )
  }
}

export default MemberGameCenter

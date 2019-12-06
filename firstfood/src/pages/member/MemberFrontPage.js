import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import Card from '../../components/main/memberMain/Card'

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

class MemberFrontPage extends React.Component {
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

            <section >
              <div className="d-flex">
                <div className="row">
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink key={1} to={'/member/detail'} style={{ flex: 1 }}>
                      <Card image={memberImg} title={'個人資料'} />
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink key={2} to={'/member/order'} style={{ flex: 1 }}>
                      <Card image={shoppingCartImg} title={'訂單管理'} />
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink
                      key={3}
                      to={'/member/password'}
                      style={{ flex: 1 }}
                    >
                      <Card image={passwordImg} title={'修改密碼'} />
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink
                      key={4}
                      to={'/member/collection'}
                      style={{ flex: 1 }}
                    >
                      <Card image={heartImg} title={'我的收藏'} />
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink key={5} to={'/member/address'} style={{ flex: 1 }}>
                      <Card image={locationImg} title={'收件地址'} />
                    </NavLink>
                  </div>
                  <div className="col-md-6 col-lg-4 hoverhovermeme">
                    <NavLink
                      key={6}
                      to={'/member/discount'}
                      style={{ flex: 1 }}
                    >
                      <Card image={discountImg} title={'優惠卷'} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
          {!this.props.home ? (
            <>
            <div className="backimg"><img src={background1} className="bg101 position-absolute" alt="" /> </div>
              
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

export default MemberFrontPage

import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import MemberTable from '../../components/main/memberMain/memberDetail/MemberTable'
import TitleLogo from '../../components/main/memberMain/TitleLogo'
import GameAttackBox from '../../components/main/memberMain/game/GameAttackBox'
import GameNavBar from '../../components/main/memberMain/game/GameNavBar'
import GameApp from '../../components/main/memberMain/game/GameApp'
import TagChangePage from './TagChangePage'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'

//CSS
import './member.css'

class MemberDetailPage extends React.Component {
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
              <TitleLogo />
            </div>

            <MemberTable />

            {/* <GameApp /> */}
            {/* <TagChangePage /> */}

            <Footer />
          </div>
          {this.props.home ? (
            <>
              <img src={background1} className="bg1 position-absolute" alt="" />
              <img src={background2} className="bg2 position-absolute" alt="" />
              <div className="bottomLine position-absolute"></div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="backimg">
          <img src={background1} className="bg005 position-absolute" alt="" />
          {/* <img
                src={background2}
                className="bg004 position-absolute"
                alt=""
              /> */}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
})

export default connect(mapStateToProps)(MemberDetailPage)

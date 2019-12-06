import React, { Component } from 'react'
import Slider from 'react-slick'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Slick extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
  }
  play() {
    this.slider.slickPlay()
  }
  pause() {
    this.slider.slickPause()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    }
    return (
      <div>
        {/* <h2>為啥壞掉</h2> */}
        {/* {!this.props.product.sid ? (
            <></>
          ) : (
            JSON.parse(this.props.product.picture).map((v, ind) => { console.log(v)
              return (
                <h1 key={ind}>
                  123{v}
                </h1>
              )
            })
          )} */}

        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {!this.props.product.picture ? (
            <></>
          ) : (
            console.log(this.props.product.picture)
          )}
          {!this.props.product.picture ? (
            <></>
          ) : (
            JSON.parse(this.props.product.picture).map((v, ind) => {
              console.log(v)
              return (
                <div>
                  <NavLink key={ind} to={'/' } className="pho">
                    <img
                      alt=""
                      // height="150px"
                      src={'/assets/images/goods/' + v}
                    />
                  </NavLink>
                </div>
              )
            })
          )}
          {/* <div>
            <NavLink key={2} to={'/member'}>
              <img src="/assets/images/1.jpg" alt="" height="100px" />
            </NavLink>
          </div> */}
        </Slider>
        {/* <div style={{ textAlign: 'center' }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = store => {
  if (!store.FarmerProductReducer) return {
    isLogin: store.loginReducer.isLogin,
    // product: '',
  }
  return {
    // product: store.FarmerProductReducer.data[0],
    // comment: store.FarmerProductReducer.data[1],
    // member: store.loginReducer.member,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmiddata.fmid[0],
    member: store.loginReducer.member,

  }
}
export default connect(mapStateToProps)(Slick)

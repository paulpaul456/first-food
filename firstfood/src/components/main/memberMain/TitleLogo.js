import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import circle from '../../../assets/images/circleee.svg'
import { ReactComponent as Circle } from '../../../assets/images/circleee.svg'
// import { ReactComponent as circleee } from './assets/images/circleee.svg'

class TitleLogo extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     color1: '#333',
  //     color2: '#333',
  //     color3: '#333',
  //     color4: '#333',
  //     color5: '#333',
  //     color6: '#333',
  //   }
  // }

  // changeColor = event => {
  //   // console.log(event.target)
  //   // let name = event.currentTarget.getAttribute('name')
  //   // let key = event.currentTarget.getAttribute('key')
  //   let name = this.props.location.pathname.split('/')[2]
  //   console.log(name)
  //   // console.log(key)
  //   if (name === 'detail') {
  //     this.setState({
  //       color1: 'red',
  //     })
  //   } else if (name === 'order') {
  //     console.log('近來訂單')
  //     this.setState({
  //       color2: 'red',
  //     })
  //   } else if (name === 'password') {
  //     console.log('近來密碼')
  //     this.setState({
  //       color3: 'red',
  //     })
  //   } else if (name === 'collection') {
  //     this.setState({
  //       color4: 'red',
  //     })
  //   } else if (name === 'address') {
  //     this.setState({
  //       color5: 'red',
  //     })
  //   } else if (name === 'discount') {
  //     this.setState({
  //       color6: 'red',
  //     })
  //   }
  // }

  render() {
    let name = this.props.location.pathname.split('/')[2]
    console.log(name)
    let color1 = '#333'
    let color2 = '#333'
    let color3 = '#333'
    let color4 = '#333'
    let color5 = '#333'
    let color6 = '#333'

    // console.log(key)
    if (name === 'detail') {
      color1 = '#c7313a'
    } else if (name === 'order') {
      color2 = '#c7313a'
    } else if (name === 'password') {
      color3 = '#c7313a'
    } else if (name === 'collection') {
      color4 = '#c7313a'
    } else if (name === 'address') {
      color5 = '#c7313a'
    } else if (name === 'discount') {
      color6 = '#c7313a'
    }
    // console.log('titleLogo', this.props.location.pathname.split('/')[2])
    if (this.props && this.props.member && this.props.member[0]) {
      return (
        <>
          <div className="logobutton d-flex">
            <div className="d-flex justify-content-start ">
              <div className="d-flex mt-2">
                <div className="sm-x">
                  <div>您好:</div>
                  <div>{this.props.member[0].nickname}</div>
                </div>
                <div className="col-1 sm-x">
                  <img src="/assets/images/logo.svg" alt="" width="48px" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around my-3">
              <div className="d-lg-flex align-items-center">
                <NavLink key={1} to={'/member/detail'}>
                  <div
                    className="btn"
                    name="個人資料"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src={circle}
                    // src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    {/* <img src={circle} className="btnsvg" alt="btnSvg" />
                  <Circle
                    className="btnsvg"
                    alt="btnSvg"
                    fill="#000"
                    stroke="#000"
                    // strokeDasharray="35px 15px"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color1}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color1}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>

                    <h6 className="mt-n5 btntext" style={{ color: color1 }}>
                      個人資料
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={2} to={'/member/order'}>
                  <div
                    className="btn"
                    name="訂單管理"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color2}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color2}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>

                    <h6 className="mt-n5 btntext" style={{ color: color2 }}>
                      訂單管理
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={3} to={'/member/password'}>
                  <div
                    className="btn"
                    name="修改密碼"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color3}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color3}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color3 }}>
                      修改密碼
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={4} to={'/member/collection'}>
                  <div
                    className="btn"
                    name="我的收藏"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color4}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color4}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color4 }}>
                      我的收藏
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={5} to={'/member/address'}>
                  <div
                    className="btn"
                    name="收件地址"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color5}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color5}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color5 }}>
                      收件地址
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={6} to={'/member/discount'}>
                  <div className="btn" name="優惠券" onClick={this.changeColor}>
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color6}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color6}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color6 }}>
                      優惠券
                    </h6>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          {console.log('重新修改密碼')}
          <div className="logobutton d-flex">
            <div className="d-flex justify-content-start ">
              <div className="d-flex mt-2">
                <div className="sm-x">
                  <div>您好:</div>
                  {/* <div>{this.props.member[0].nickname}</div> */}
                </div>
                <div className="col-1 sm-x">
                  <img src="/assets/images/logo.svg" alt="" width="48px" />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-around my-3">
              <div className="d-lg-flex align-items-center">
                <NavLink key={1} to={'/member/detail'}>
                  <div
                    className="btn"
                    name="個人資料"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src={circle}
                    // src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    {/* <img src={circle} className="btnsvg" alt="btnSvg" />
                  <Circle
                    className="btnsvg"
                    alt="btnSvg"
                    fill="#000"
                    stroke="#000"
                    // strokeDasharray="35px 15px"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color1}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color1}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>

                    <h6 className="mt-n5 btntext" style={{ color: color1 }}>
                      個人資料
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={2} to={'/member/order'}>
                  <div
                    className="btn"
                    name="訂單管理"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color2}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color2}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>

                    <h6 className="mt-n5 btntext" style={{ color: color2 }}>
                      訂單管理
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={3} to={'/member/password'}>
                  <div
                    className="btn"
                    name="修改密碼"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color3}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color3}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color3 }}>
                      修改密碼
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={4} to={'/member/collection'}>
                  <div
                    className="btn"
                    name="我的收藏"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color4}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color4}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color4 }}>
                      我的收藏
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={5} to={'/member/address'}>
                  <div
                    className="btn"
                    name="收件地址"
                    onClick={this.changeColor}
                  >
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color5}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color5}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color5 }}>
                      收件地址
                    </h6>
                  </div>
                </NavLink>
                <NavLink key={6} to={'/member/discount'}>
                  <div className="btn" name="優惠券" onClick={this.changeColor}>
                    {/* <img
                    src="/assets/images/circleee.svg"
                    alt=""
                    className="btnsvg"
                  /> */}
                    <div
                      style={{
                        border: `1px solid ${color6}`,
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          border: `2px solid ${color6}`,
                          width: '90px',
                          height: '90px',
                          borderRadius: '50%',
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      ></div>
                    </div>
                    <h6 className="mt-n5 btntext" style={{ color: color6 }}>
                      優惠券
                    </h6>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
})

export default withRouter(connect(mapStateToProps)(TitleLogo))

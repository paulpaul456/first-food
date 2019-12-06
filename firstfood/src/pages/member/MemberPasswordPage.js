import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import TitleLogo from '../../components/main/memberMain/TitleLogo'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'

//CSS
import '../../pages/member/member.css'

//action
import { changePassword } from '../../action/fetchMemberDataAction'

//sweetAlert
import swal from '@sweetalert/with-react'

class MemberPasswordPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPassword: '',
      newPassword: '',
      passwordCheck: '',
      oldPasswordSmall: 'none',
      newPasswordSmall: 'none',
      passwordCheckSmall: 'none',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleChangePassword = () => {
    let s, item
    const required_fields = [
      {
        name: 'newPassword',
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        info: '至少8個字元，包含1個英文字母和1個數字',
      },
      {
        name: 'passwordCheck',
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        info: '至少8個字元，包含1個英文字母和1個數字',
      },
    ]

    //判斷輸入格式是否正確
    let isPass = true

    const originalPassword = this.props.member[0].password
    const oldPassword = this.state.oldPassword
    console.log(originalPassword)
    if (oldPassword !== originalPassword) {
      isPass = false
      console.log('新舊密碼不相等')
      this.setState({
        oldPasswordSmall: 'flex',
      })
    }

    for (s in required_fields) {
      item = required_fields[s]

      if (!item.pattern.test(this.state[item.name])) {
        console.log('ERROR AFTER TEST')
        isPass = false
        let stateName = item.name + 'Small'
        console.log(stateName)
        this.setState({
          [stateName]: 'block',
        })
      }
      // console.log(isPass)
      if (this.state.newPassword !== this.state.passwordCheck) {
        isPass = false
        this.setState({
          passwordCheckSmall: 'block',
        })
      }

      if (isPass) {
        let stateName = item.name + 'Small'
        console.log(stateName)
        this.setState({
          [stateName]: 'none',
        })
      }
    }
    if (isPass) {
      console.log('密碼相等')
      this.setState({
        oldPassword: '',
        newPassword: '',
        passwordCheck: '',
      })

      const customer_id = this.props.member[0].customer_id
      const newPassword = this.state.newPassword
      console.log('customer_id:' + customer_id, 'newPassword: ' + newPassword)
      this.props.dispatch(changePassword(customer_id, newPassword))
      swal({
        icon: 'success',
        // text: 'You clicked the button!',
        title: '密碼修改成功!',
        timer: 2000,
      })
    }

    // // console.log(this.props.member)
    // const originalPassword = this.props.member[0].password
    // const oldPassword = this.state.oldPassword
    // const newPassword = this.state.newPassword
    // const passwordCheck = this.state.passwordCheck
    // let isPass = true

    // if (oldPassword !== originalPassword) {
    //   isPass = false
    //   console.log('密碼不相等')
    // }

    // if (newPassword !== passwordCheck) {
    //   isPass = false
    //   console.log('兩次密碼不一樣')
    // }

    // if (isPass) {
    //   console.log('密碼相等')

    //   const customer_id = this.props.member[0].customer_id
    //   const newPassword = this.state.newPassword
    //   console.log('customer_id:' + customer_id, 'newPassword' + newPassword)
    //   this.props.dispatch(changePassword(customer_id, newPassword))
    // }
  }

  render() {
    // console.log(this.state.oldPassword)
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

            <div className="editPassword_background">
              <div className="editPassword">
                <div className="justALine"></div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="oldPassword">舊密碼</label>
                    </div>
                    <div className="col-lg-4 passInput">
                      <input
                        type="password"
                        id="oldPassword"
                        name="oldPassword"
                        value={this.state.oldPassword}
                        onChange={this.handleChange}
                      />
                      <small
                        id="oldPasswordHelp"
                        style={{
                          display: this.state.oldPasswordSmall,
                          justifyContent: 'center',
                          color: 'red',
                        }}
                      >
                        密碼錯誤
                      </small>
                    </div>
                    <div className="col-lg-4 small">
                      <small>請輸入原始密碼</small>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="newPassword">新密碼</label>
                    </div>
                    <div className="col-lg-4 passInput">
                      <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={this.state.newPassword}
                        onChange={this.handleChange}
                      />
                      <small
                        id="passwordHelp"
                        style={{
                          display: this.state.newPasswordSmall,
                          // display: 'none',
                          justifyContent: 'center',
                          color: 'red',
                        }}
                      >
                        請填寫正確的 password 格式
                      </small>
                    </div>
                    <div className="col-lg-4 small">
                      <small>至少6碼，一英文字母+數字字串</small>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-4">
                      <label htmlFor="passwordCheck">請再次輸入密碼</label>
                    </div>
                    <div className="col-lg-4 passInput">
                      <input
                        type="password"
                        id="passwordCheck"
                        name="passwordCheck"
                        value={this.state.passwordCheck}
                        onChange={this.handleChange}
                      />
                      <small
                        id="passwordCheckHelp"
                        style={{
                          display: this.state.passwordCheckSmall,
                          justifyContent: 'center',
                          color: 'red',
                        }}
                      >
                        兩次密碼不相同
                      </small>
                    </div>
                    <div className="col-lg-4 small">
                      <small>請輸入原始密碼</small>
                    </div>
                  </div>
                </div>
                <div className="justALine"></div>

                <button
                  type="button"
                  className="btn passwordBtn"
                  onClick={this.handleChangePassword}
                >
                  確認
                </button>
              </div>
            </div>

            <div className="notice">
              <h3>注意事項</h3>
              <div>
                <ul>
                  <li>不使用傻瓜密碼:設定密碼時請不要使用簡易數字</li>
                  <li>不同網站,請設定不同帳號密碼</li>
                  <li>
                    不再公用電腦輸入帳號密碼,公用電腦安裝木馬程式的可能性較高,個能機密可能被側錄
                  </li>
                </ul>
              </div>
            </div>

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
        <div className="bottomLine position-absolute"></div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
})

export default withRouter(connect(mapStateToProps)(MemberPasswordPage))

import React from 'react'
import eggImg from '../../../../assets/images/member/egg.gif'
import {
  checkLogin,
  isLogin,
  showError,
  saveInputValue,
  changeText,
  closeError,
  closeLoginBox,
  sendPasswordEmail,
} from '../../../../action/checkLoginAction'
import { connect } from 'react-redux'
import { withRouter, Redirect, NavLink } from 'react-router-dom'
// import swal from 'sweetalert'
import swal from '@sweetalert/with-react'
import { func } from 'prop-types'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameSmall: 'none',
      passwordSmall: 'none',
      isForgot: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // componentDidMount() {
  //   // this.props.dispatch(closeError())
  //   window.addEventListener('keydown', event => {
  //     // console.log(event.code)
  //     if (event.code === 'Enter' || event.code === 'NumpadEnter') {
  //       // console.log('componentDidMount',this)
  //       this.handleClick()
  //     }
  //   })
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', event => {
  //     console.log(event.code)
  //     if (event.code === 'Enter' || event.code === 'NumpadEnter') {
  //       // console.log('hello')
  //       this.handleClick()
  //     }
  //   })
  // }
  // componentDidUpdate() {
  //   window.addEventListener('keydown', event => {
  //     // console.log(event.code)
  //     if (event.code === 'Enter' || event.code === 'NumpadEnter') {
  //       // console.log('componentDidMount',this)
  //       this.handleClick()
  //     }
  //   })
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // handleClick = event => {
  //   let username = this.state.username
  //   let password = this.state.password
  //   // console.log(username, password)

  //   this.props.dispatch(checkLogin(username, password))
  // }
  handleClick = event => {
    // console.log('handleClick', this)
    // if (event.key === 'Enter') {
    //   console.log('enter press here! ')
    // }
    console.log(this.state)
    let s, item
    const required_fields = [
      {
        name: 'username',
        // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        pattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        info: '請填寫正確的 email 格式',
      },
      {
        name: 'password',
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        info: '至少8個字元，包含1個英文字母和1個數字',
      },
    ]

    for (s in required_fields) {
      item = required_fields[s]
    }

    //判斷輸入格式是否正確
    let isPass = true

    for (s in required_fields) {
      item = required_fields[s]
      // console.log('forLoop', this)

      // console.log(item.name)
      // console.log(item.pattern)
      // console.log(this.state.username)
      // console.log(this.state[item.name])

      if (!item.pattern.test(this.state[item.name])) {
        // item.el.style.border = '1px solid red'
        // item.infoEl.innerHTML = item.info
        console.log('ERROR AFTER TEST')
        isPass = false
        let stateName = item.name + 'Small'
        // console.log(stateName)
        this.setState({
          [stateName]: 'block',
        })
      }
      // console.log(isPass)

      if (isPass) {
        let stateName = item.name + 'Small'
        this.setState({
          [stateName]: 'none',
        })
      }
    }
    if (isPass) {
      // console.log(isPass + 'hihihi')
      // this.setState({
      //   usernameSmall: 'none',
      //   passwordSmall: 'none',
      // })
      // this.setState(
      //   {
      //     username: '',
      //     password: '',
      //   },
      //   function() {
      //     console.log('清空資料表')
      //   }
      // )
      // console.log('hiiiii', this)
      console.log(this.state)
      this.props.dispatch(
        checkLogin(this.state.username, this.state.password, () => {
          swal({
            icon: 'success',
            // text: 'You clicked the button!',
            title: '登入成功!',
            timer: 2000,
          })
        })
      )
    }
  }

  handleCloseLogBox = () => {
    this.props.dispatch(closeLoginBox())
  }

  handleForgotPassword = () => {
    this.setState({
      isForgot: !this.state.isForgot,
    })
  }

  handleSendPassword = () => {
    let email = this.state.username
    this.props.dispatch(
      sendPasswordEmail(email, () => {
        swal({
          icon: 'success',
          text: '重設密碼信件已發送,請至信箱確認',
          title: '已送出!',
          timer: 2000,
        })
      })
    )
  }

  // handleKeyDown = code => {
  //   if (code === 'Enter') {
  //     console.log('123')
  //   }
  // }

  render() {
    let error
    this.props.showError ? (error = 'none') : (error = 'block')

    let emailNotDisplay = ''
    let emailDisplay = ''
    let emailDisplay2 = ''
    this.state.isForgot ? (emailDisplay = 'none') : (emailDisplay = 'flex')
    this.state.isForgot
      ? (emailDisplay2 = 'none')
      : (emailDisplay2 = 'inline-block')
    this.state.isForgot
      ? (emailNotDisplay = 'inline-block')
      : (emailNotDisplay = 'none')
    // console.log(error)
    // let error = this.props.showError
    // console.log(this.state.isPass)
    if (this.props.accountLog) {
       if (this.props.member && this.props.member[0]) {
        console.log('Login OK')
        // this.props.dispatch(isLogin())
        return <Redirect to={this.props.location.pathname} />
      } else {
        console.log('帳號或密碼錯誤')
        // this.props.dispatch(showError())
      }
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="close-login-box" onClick={this.handleCloseLogBox}></div>
        <div className="header">會員登入</div>
        <div className="content">
          <div className="image">
            <img src={eggImg} />
          </div>
          <div className="form">
            <div className="login-form-group" style={{ position: 'relative' }}>
              <label htmlFor="username">電子郵箱</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <small
                id="usernameHelp"
                style={{
                  display: this.state.usernameSmall,
                  position: 'absolute',
                  bottom: '10px',
                  color: 'red',
                }}
              >
                請填寫正確的 email 格式
              </small>

              <small
                style={{
                  display: emailNotDisplay,
                  position: 'absolute',
                  bottom: '10px',
                  // marginBottom: '30px',
                  color: '#000',
                  // fontSize: '16px',
                  // textAlign: 'center',
                }}
              >
                請輸入要寄送密碼的 email
              </small>
            </div>
            <div
              className="login-form-group"
              style={{ position: 'relative', display: emailDisplay }}
            >
              <label htmlFor="password">密碼</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <small
                id="passwordHelp"
                style={{
                  display: this.state.passwordSmall,
                  position: 'absolute',
                  bottom: '10px',
                  color: 'red',
                }}
              >
                至少6個字元，包含1個英文字母和1個數字
              </small>
            </div>
          </div>
        </div>
        <div style={{ display: error, color: 'red' }}>帳號或密碼錯誤</div>
        <div className="footer ">
          {/* <input
            type="button"
            className="btn"
            onClick={this.handleClick}
            onKeydown={this.handleKeyDown}
            value="Login"
          /> */}
          <div
            className={'d-block mt-n4 mb-2'}
            onClick={this.handleForgotPassword}
            style={{ cursor: 'pointer' }}
          >
            {this.state.isForgot ? '回上一頁' : 'forgot password?'}
          </div>
          {/* <NavLink
            key={1}
            to={'/member/discount'}
            className={'d-block mt-n4 mb-2'}
            onClick={this.handleForgotPassword}
          >
            forgot password?
          </NavLink> */}

          <button
            type="button"
            className="btn"
            onClick={this.handleClick}
            style={{ display: emailDisplay2 }}
          >
            Login
          </button>

          <button
            type="button"
            className="btn"
            onClick={this.handleSendPassword}
            style={{ display: emailNotDisplay }}
          >
            送出
          </button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   member: state.loginReducer,
// })

const mapStateToProps = state => {
  if (state.DinnerProductReducer.prevpath)
    return {
      member: state.loginReducer.member,
      isLogin: state.loginReducer.isLogin,
      showError: state.loginReducer.showError,
      accountLog: state.loginReducer.accountLog,
      prevpath: state.DinnerProductReducer.prevpath,
    }

  return {
    member: state.loginReducer.member,
    isLogin: state.loginReducer.isLogin,
    showError: state.loginReducer.showError,
    accountLog: state.loginReducer.accountLog,
  }
}

export default withRouter(connect(mapStateToProps)(Login))

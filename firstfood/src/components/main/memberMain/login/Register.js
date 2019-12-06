import React from 'react'
import avocadoImg from '../../../../assets/images/member/Avocado.gif'
import {
  checkLogin,
  isLogin,
  showError,
  saveInputValue,
  changeText,
  closeLoginBox,
} from '../../../../action/checkLoginAction'
import { connect } from 'react-redux'
// import { withRouter, Redirect } from 'react-router-dom'
import { memberRegister } from '../../../../action/checkLoginAction'
import { withRouter } from 'react-router-dom'
import swal from '@sweetalert/with-react'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
      emailSmall: 'none',
      passwordSmall: 'none',
      passwordCheckSmall: 'none',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  // handleClick = () => {
  //   let username = this.state.username
  //   let email = this.state.email
  //   let password = this.state.password
  //   let passwordCheck = this.state.passwordCheck
  //   console.log(username, email, password, passwordCheck)
  //   // this.props.dispatch()
  // }
  handleClick = () => {
    let s, item
    const required_fields = [
      {
        name: 'email',
        pattern: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        info: '請填寫正確的 email 格式',
      },
      {
        name: 'password',
        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        info: '至少8個字元，包含1個英文字母和1個數字',
      },
    ]

    let isPass = true

    for (s in required_fields) {
      item = required_fields[s]
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

      if (this.state.password !== this.state.passwordCheck) {
        isPass = false
        this.setState({
          passwordCheckSmall: 'block',
        })
      }

      if (isPass) {
        let stateName = item.name + 'Small'
        this.setState({
          [stateName]: 'none',
        })
        console.log('註冊送出')
      }
    }
    if (isPass) {
      this.setState(
        {
          username: '',
          email: '',
          password: '',
          passwordCheck: '',
        },
        function() {
          console.log('清空資料表')
        }
      )

      this.props.dispatch(
        memberRegister(
          this.state.username,
          this.state.email,
          this.state.password,
          () => {
            swal({
              icon: 'success',
              // text: 'You clicked the button!',
              title: '註冊成功!',
              timer: 2000,
            })
          }
        )
      )

      this.props.dispatch(closeLoginBox())
      // swal({
      //   icon: 'success',
      //   // text: 'You clicked the button!',
      //   title: '註冊成功!',
      // })
    }
  }

  handleCloseLogBox = () => {
    this.props.dispatch(closeLoginBox())
  }

  render() {
    console.log(this.props.message)
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="close-login-box" onClick={this.handleCloseLogBox}></div>
        <div className="header">會員註冊</div>
        <div className="content">
          <div className="image">
            <img src={avocadoImg} style={{ width: '200px' }} />
          </div>
          <div className="form">
            <div className="login-form-group">
              <label htmlFor="username">使用者名稱</label>
              <input
                style={{ marginBottom: '20px' }}
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
            <div className="login-form-group" style={{ position: 'relative' }}>
              <label htmlFor="email">電子郵箱</label>
              <input
                style={{ marginBottom: '20px' }}
                type="text"
                name="email"
                placeholder="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <small
                id="usernameHelp"
                style={{
                  display: this.state.emailSmall,
                  position: 'absolute',
                  bottom: '0px',
                  color: 'red',
                }}
              >
                請填寫正確的 email 格式
              </small>
            </div>
            <div className="login-form-group" style={{ position: 'relative' }}>
              <label htmlFor="password">密碼</label>
              <input
                style={{ marginBottom: '20px' }}
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
                  bottom: '0px',
                  color: 'red',
                }}
              >
                至少6個字元，包含1個英文字母和1個數字
              </small>
            </div>
            <div className="login-form-group" style={{ position: 'relative' }}>
              <label htmlFor="passwordCheck">再次輸入密碼</label>
              <input
                style={{ marginBottom: '20px' }}
                type="password"
                name="passwordCheck"
                placeholder="password"
                onChange={this.handleChange}
                value={this.state.passwordCheck}
              />
              <small
                id="passwordCheckHelp"
                style={{
                  display: this.state.passwordCheckSmall,
                  position: 'absolute',
                  bottom: '0px',
                  color: 'red',
                }}
              >
                兩次密碼不相同
              </small>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleClick}>
            Register
          </button>
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => ({
  message: state.loginReducer.message,
})

export default withRouter(connect(mapStateToProps)(Register))

import React from 'react'
import eggImg from '../../../../assets/images/member/egg.gif'
import {
  checkLogin,
  isLogin,
  showError,
  saveInputValue,
  changeText,
} from '../../../../action/checkLoginAction'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'

let username = ''
let password = ''

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  // handleChange = type => event => {
  //   // console.log(event.target.value)
  //   // if (type == 'username' or type == 'password') {
  //   //   this.props.dispatch(checkLogin(event.target.value))
  //   // }
  //   if (type == 'username') {
  //     username = event.target.value
  //   }
  //   if (type == 'password') {
  //     password = event.target.value
  //   }
  //   this.props.dispatch(saveInputValue(username, password))
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  // handleChange = obj => event => {
  //   let value = event.target.value
  //   let item = event.target.name
  //   this.props.dispatch(changeText(obj, item, value))
  // }

  handleClick = event => {
    event.preventDefault()

    let username = this.state.username
    let password = this.state.password

    this.props.dispatch(checkLogin(username, password))
  }

  render() {
    let error = this.props.showError
    console.log(this.props)
    // let error = this.props.isLogin ? 'none' : 'block'
    // console.log(this.props.isLogin)
    // console.log(error)
    if (this.props.accountLog) {
      if (this.props.member && this.props.member[0]) {
        console.log('Login OK')
        // console.log(this.props.member[0].email)
        this.props.dispatch(isLogin())
        // this.props.history.push('/')
        // console.log(this.props.isLogin)
        return <Redirect to="/" />
      } else {
        console.log('帳號或密碼錯誤')
        // error = this.props.isLogin ? 'none' : 'block'
        // console.log(error)
        // this.showErrorMessage()
        // this.props.dispatch(showError())
      }
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={eggImg} />
          </div>
          <div className="form">
            <div className="login-form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <div style={{ display: error }}>帳號或密碼錯誤</div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleClick}>
            Login
          </button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   member: state.loginReducer,
// })

const mapStateToProps = state => ({
  member: state.loginReducer.member,
  isLogin: state.loginReducer.isLogin,
  showError: state.loginReducer.showError,
  userInput: state.loginReducer.userInput,
  passInput: state.loginReducer.passInput,
  accountLog: state.loginReducer.accountLog,
})

export default withRouter(connect(mapStateToProps)(Login))

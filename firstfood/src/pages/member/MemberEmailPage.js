import React from 'react'
import { NavLink } from 'react-router-dom'
import eggImg from '../../../../assets/images/member/egg.gif'

class MemberEmailPage extends React.Component {
  render() {
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
            </div>
            <div className="login-form-group" style={{ position: 'relative' }}>
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
        <div className="footer ">
          {/* <input
              type="button"
              className="btn"
              onClick={this.handleClick}
              onKeydown={this.handleKeyDown}
              value="Login"
            /> */}
          <NavLink
            key={1}
            to={'/member/discount'}
            className={'d-block mt-n4 mb-2'}
          >
            forgot password?
          </NavLink>

          <button
            type="button"
            className="btn"
            onClick={this.handleClick}
            // onKeydown={this.handleKeyDown}
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default MemberEmailPage

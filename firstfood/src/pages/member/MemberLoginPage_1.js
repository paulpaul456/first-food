import React from 'react'
// import './App.scss'
import '../../assets/scss/main/member/memberLogin.scss'
import { Login, Register } from '../../components/main/memberMain/login/index'

class MemberLoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogginActive: true,
    }
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right')
  }

  changeState() {
    const { isLogginActive } = this.state

    if (isLogginActive) {
      this.rightSide.classList.remove('right')
      this.rightSide.classList.add('left')
    } else {
      this.rightSide.classList.remove('left')
      this.rightSide.classList.add('right')
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }))
  }

  render() {
    const { isLogginActive } = this.state
    const current = isLogginActive ? 'Register' : 'Login'
    const currentActive = isLogginActive ? 'login' : 'register'
    return (
      <div className="loginApp">
        <div className="login">
          <div className="login-container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    )
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  )
}

export default MemberLoginPage

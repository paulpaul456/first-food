import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import HeaderFooter from '../container/HeaderFooter'
import CoursesTitle from '../../components/main/coursesMain/CoursesTitle'
import CoursesCard from '../../components/main/coursesMain/CoursesCard'
import MediaQueries from '../../window/mediaQueries/MediaQueries'
import { showLoginBox } from '../../action/index'



class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  test = () => {
    window.location.reload();
  }

  render() {

    return (
      <>
        <MediaQueries>
          <HeaderFooter location="課程">
            <div className="courses">
              <CoursesTitle {...this.props} />
              <p className="chooseTitle" onClick={this.test}>請選擇分類</p>
              <CoursesCard/>
            </div>
          </HeaderFooter>
        </MediaQueries>
      </>
    )
  }
}

const mapStateToProps = store => {
  return {
    breakpoint: store.ui.windowUi.screenBreakpoint,
    isLogin: store.loginReducer.isLogin,
    member: store.loginReducer.member,
  }
}
export default connect(mapStateToProps, { showLoginBox })(Courses)

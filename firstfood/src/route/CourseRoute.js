import React from 'react'

import Courses from '../pages/course/Courses'
import CoursesList from '../pages/course/CoursesList'
import CoursesContent from '../pages/course/CoursesContent'

import { Route, Switch } from 'react-router-dom'

class CourseRoute extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    // window.scrollTo(0, 0)
  }
  render() {
    return (
      <>
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/coursesList/:type?" component={CoursesList} />
        <Route exact path="/coursesContent/:id?" component={CoursesContent} />
      </>
    )
  }
}

export default CourseRoute

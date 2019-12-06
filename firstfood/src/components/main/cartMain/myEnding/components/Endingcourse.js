import React, { Component } from 'react'
import { connect } from 'react-redux'
class Endingcourse extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props.course)
    let course = this.props.course

    if (this.props.course.length > 0) {
      return (
        <>
          {course.map(e => {
            return (
              <div className="ending-body-list" key={e.course_cart_id}>
                <div className="row">
                  <div className="col-md-7 ending-body-list-left ">
                    <p className="ending-body-list-left-1">{e.course_name}</p>
                  </div>
                  <div className="col-md-5 ending-body-list-right">
                    <p>{e.cost}</p>
                    <p>{e.quantity}</p>
                    <p>{e.cost * e.quantity}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      )
    } else {
      return (
        <>
          <h1></h1>
        </>
      )
    }
  }
}

let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    buyinfor: state.buyinfor,
  }
}

export default connect(mapstatetoprops)(Endingcourse)

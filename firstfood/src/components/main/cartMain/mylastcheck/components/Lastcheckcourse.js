import React, { Component } from 'react'
import { connect } from 'react-redux'
class Lastcheckcourse extends Component {
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
              <div
                className="last-check-body-detail-list"
                key={e.course_cart_id}
              >
                <div className="row">
                  <div className="col-md-7 last-check-body-detail-list-left ">
                    <p className="last-check-body-detail-list-left-1">
                      {e.course_name}
                    </p>
                  </div>
                  <div className="col-md-5 last-check-body-detail-list-right">
                    <p className="last-check-rwd-p1">{e.cost}</p>
                    <p>{e.quantity}</p>
                    <p className="last-check-rwd-p2"> {e.cost * e.quantity}</p>
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

export default connect(mapstatetoprops)(Lastcheckcourse)

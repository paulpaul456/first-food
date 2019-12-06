import React from 'react'
import Endinghead from './components/Endinghead'
import { connect } from 'react-redux'
import Endingbody from './components/Endingbody'
import Endingbottom from './components/Endingbottom'

import '../../../../assets/scss/main/cartstyle/Ending.scss'
class Ending extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {}

  render() {
    return (
      <>
        <section className="ending">
          <div className="container">
            <Endinghead />
            <Endingbody />
            <Endingbottom />
          </div>
        </section>
      </>
    )
  }
}
let mapstatetoprops = state => {
  return {
    course: state.course,
    car: state.car,
    dn: state.dn,
  }
}

export default connect(mapstatetoprops)(Ending)

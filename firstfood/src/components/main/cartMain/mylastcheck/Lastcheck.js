import React from 'react'
import Lastcheckhead from './components/Lastcheckhead'
import Lastcheckdetail from './components/Lastcheckdetail'
import Lastcheckimfor from './components/Lastcheckimfor'
import Lastcheckbottom from './components/Lastcheckbottom'
import '../../../../assets/scss/main/cartstyle/Lastcheck.scss'
import { connect } from 'react-redux'
class Lastcheck extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <section className="lastcheck">
          <div className="container">
            <Lastcheckhead />
            <Lastcheckdetail />
            <Lastcheckimfor />
            <Lastcheckbottom />
          </div>
        </section>
      </>
    )
  }
}
let mapstatetoprops = state => {
  return {
    car: state.car,
    buyinfor: state.buyinfor,
    course: state.course,
    dn: state.dn,
  }
}

export default connect(mapstatetoprops)(Lastcheck)

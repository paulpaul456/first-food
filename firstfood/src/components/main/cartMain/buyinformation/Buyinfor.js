import React from 'react'
import { connect } from 'react-redux'
import { getbuydata } from '../../../../action/MyCartaction/buyinforaction'
import Buyinforhead from './components/Buyinforhead'
import Buyinforbody from './components/Buyinforbody'
import Buyinforbottom from './components/Buyinforbottom'
import '../../../../assets/scss/main/cartstyle/Buyinfor.scss'

class Buyinfor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatch(getbuydata())
  }

  render() {
    return (
      <>
        <section className="buyinfor buyinformation">
          <div className="container">
            <Buyinforhead />

            <Buyinforbody />

            <Buyinforbottom />
          </div>
        </section>
      </>
    )
  }
}
let mapstatetoprops = state => {
  return {
    buyinfor: state.buyinfor,
  }
}

export default connect(mapstatetoprops)(Buyinfor)

import React from 'react'
import Cardhead from './components/Cardhead'

import Cardbody from './components/Cardbody'
import Cardbottom from './components/Cardbottom'
import '../../../../assets/scss/main/cartstyle/Mycard.scss'
class Card extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <section className="mycard">
          <div className="container">
            <Cardhead />
            <Cardbody />
            <Cardbottom />
          </div>
        </section>
      </>
    )
  }
}
export default Card

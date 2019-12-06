import React from 'react'

import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

import RestaurantNav from '../components/main/mapMain/RestaurantNav'
import MyComponents from '../components/main/mapMain/MyComponents'

class RestaurantMap extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 500)
  }

  render() {
    // console.log(this.props)
    return (
      <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
          </div>
          <div className="container-fluid">
            <MyComponents name={this.props.match.params.name} />
          </div>
          <div className="container">
            <Footer />
          </div>
        </div>
      </>
    )
  }
}

export default RestaurantMap

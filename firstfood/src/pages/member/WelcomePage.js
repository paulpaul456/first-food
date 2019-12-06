import React from 'react'
import ReactPlayer from 'react-player'
import '../../assets/scss/main/member/welcomePage.scss'
class WelcomePage1 extends React.Component {
  render() {
    return (
      <>
        <div className="home_video">
          <ReactPlayer
            // url='https://youtu.be/4619_NQHasI'
            url="assets/images/w_restaurant_video.mp4"
            playing="true"
            loop="true"
            volume="1"
            muted="true"
          />
        </div>
      </>
    )
  }
}

export default WelcomePage1

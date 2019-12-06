import React from 'react'
import ReactPlayer from 'react-player'
import '../../assets/scss/main/member/Home_video.scss'

class WelcomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      data: 0,
    }
  }

  componentDidMount() {}
  render() {
    return (
      <>
        <div className="Home_video_topbg"> </div>
        <div className="Home_video">
          <p className="Home_video_text_p"></p>
          {/* <Loading /> */}
          <ReactPlayer
            // url='https://youtu.be/4619_NQHasI'
            url="assets/images/w_restaurant_video.mp4"
            // src='./BISTRO'
            // url='./bistro.mp4'
            playing="true"
            loop="true"
            volume="0"
            muted="true"
          />
          <div className="Home_video_images">
            <p>BISTRO</p>
          </div>
          <div className="Home_video_text">{/* BISTRO */}</div>
        </div>
      </>
    )
  }
}
export default WelcomePage

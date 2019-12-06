import React from 'react'
import { NavLink } from 'react-router-dom'

class CoursesTitle extends React.Component {
  //初始建構
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {}
  test = () => {
    window.location.reload();
  }
  render() {
    return (
      <>
        <div className="row chooseCard">
          <div className="col-12 col-sm-6 chooseLink">
            <p className="chooseSubtitle" onClick={this.test}>正餐 課程</p>
            <NavLink key={1} to="/coursesList/dinner" className="">
              <div className="mainChooseCard p-3">
                <figure className="chooseFigure m-auto">
                  <img
                    src={require('../../../assets/images/courses/chooseDinner.png')}
                    alt=""
                    className="chooseImage"
                  />
                </figure>
                <p className="chooseContent">
                  基礎技巧的學習，一窺異國美味的神秘
                  <br />
                  到氛圍十足的節慶料理
                  <br />
                  2小時的輕鬆時光中
                  <br />
                  可完成前菜到主餐一套課程
                </p>
              </div>
            </NavLink>
          </div>
          <div className="col-12 col-sm-6  chooseLink">
            <p className="chooseSubtitle">甜點 課程</p>
            <NavLink key={2} to="/coursesList/dessert">
              <div className="mainChooseCard p-3">
                <figure className="chooseFigure m-auto">
                  <img
                    src={require('../../../assets/images/courses/chooseDessert.png')}
                    alt=""
                    className="chooseImage"
                  />
                </figure>
                <p className="chooseContent">
                  從經典法式甜點
                  <br />
                  到原創造型蛋糕
                  <br />
                  初學者也不會失敗的蛋糕
                  <br />
                  最美好的禮物是來自手作的心意
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </>
    )
  }
}

export default CoursesTitle

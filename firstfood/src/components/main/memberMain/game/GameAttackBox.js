import React from 'react'
import './gameAttackBox.css'
import { connect } from 'react-redux'
import { getGameUserInfo } from '../../../../action/fetchMemberDataAction'

class GameAttackBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFront: true,
      showDetail: false,
      currentGameUserHp: 0,
      currentGameUserMp: 0,
      gameUserSkill: '',
    }
  }

  componentDidMount() {
    if (this.props && this.props.member && this.props.member[0]) {
      console.log(this.props.member[0].customer_id)
      let customer_id = this.props.member[0].customer_id
      this.props.dispatch(getGameUserInfo(customer_id))
    }

    // let customer_id = this.props.member[0].customer_id
    // console.log(customer_id)
    // // this.props.dispatch(
    // //   getGameUserInfo(customer_id, () => {
    // //     this.setState(
    // //       {
    // //         currentGameUserHp: this.props.gameUser[0].hp,
    // //         currentGameUserMp: this.props.gameUser[0].mp,
    // //         gameUserSkill: this.props.gameUser[0].skill,
    // //       },
    // //       function() {
    // //         console.log(this.state.currentGameUserHp)
    // //         console.log(this.state.currentGameUserMp)
    // //         console.log(this.state.gameUserSkill)
    // //       }
    // //     )
    // //   })
    // // )
  }

  handleAttackDetailPage = () => {
    this.setState(
      {
        showFront: !this.state.showFront,
        // showDetail: !this.state.showDetail,
      },
      function() {
        console.log(this.state)
      }
    )
  }

  render() {
    let showFrontPage = ''
    let showDetailPage = ''
    this.state.showFront ? (showFrontPage = 'block') : (showFrontPage = 'none')
    this.state.showFront
      ? (showDetailPage = 'none')
      : (showDetailPage = 'block')

    let skill = []
    if (this.props.gameUser && this.props.gameUser[0]) {
      console.log('yaya gameUser')
      console.log(this.props.gameUser[0])
      let game_skill = JSON.parse(this.props.gameUser[0].skill)
      console.log(game_skill)
      skill = game_skill
    }
    return (
      <>
        <div className="gameAttackBox">
          <div className="attackOptionFront" style={{ display: showFrontPage }}>
            <span>攻擊選項：</span>
            <div>
              <div
                className="attackOption"
                onClick={this.handleAttackDetailPage}
              >
                <span>
                  一般攻擊
                  <div className="attackMp">mp 30/30</div>
                </span>
                <span>...</span>
              </div>
              <div className="attackOption">
                <span>特殊攻擊</span>
                <p>...</p>
              </div>
            </div>
          </div>

          <div
            className="attackOptionDetail"
            style={{ display: showDetailPage }}
          >
            <span>一般攻擊：</span>
            {skill.map(skill => {
              return (
                <div className="attackOption">
                  <span>{skill}</span>
                  <p className="attackMpDetail">mp 3</p>
                </div>
              )
            })}
            {/* <div className="attackOption">
              <span>
                SVG認證雞蛋
                <div className="attackMp">mp 30/30</div>
              </span>
              <span className="attackMpDetail">mp 3</span>
            </div>
            <div className="attackOption">
              <span>水煮雞肉</span>
              <p className="attackMpDetail">mp 3</p>
            </div>
            <div className="attackOption">
              <span>五色蔬果</span>
              <p className="attackMpDetail">mp 5</p>
            </div>
            <div className="attackOption">
              <span>細嚼慢嚥</span>
              <p className="attackMpDetail">mp 5</p>
            </div> */}
            <div className="attackOptionDetailBottomBox">
              <div className="dotBox">
                <div className="detailPageDot dotActive"></div>
                <div className="detailPageDot"></div>
              </div>
              <div className="pageChange">
                <div className="backToFront">
                  <span onClick={this.handleAttackDetailPage}>
                    <i className="fas fa-caret-left"></i> BACK
                  </span>
                </div>
                <div className="nextPage">
                  <div className="nextPageOne">
                    <i className="fas fa-caret-left"></i>
                  </div>
                  <div className="nextPageTwo">
                    <i className="fas fa-caret-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
  gameUser: state.memberReducer.gameUser,
})

export default connect(mapStateToProps)(GameAttackBox)

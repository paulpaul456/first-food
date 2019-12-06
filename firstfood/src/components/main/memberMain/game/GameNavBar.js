import React from 'react'
import { connect } from 'react-redux'
import { getGameUserInfo } from '../../../../action/fetchMemberDataAction'

class GameNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGameUserHp: 0,
      currentGameUserMp: 0,
      gameUserSkill: '',
    }
  }

  componentDidMount() {
    let customer_id = this.props.member[0].customer_id
    console.log(customer_id)
    this.props.dispatch(
      getGameUserInfo(customer_id, () => {
        this.setState(
          {
            currentGameUserHp: this.props.gameUser[0].hp,
            currentGameUserMp: this.props.gameUser[0].mp,
            gameUserSkill: this.props.gameUser[0].skill,
          },
          function() {
            console.log(this.state.currentGameUserHp)
            console.log(this.state.currentGameUserMp)
            console.log(this.state.gameUserSkill)
          }
        )
      })
    )
  }

  // componentDidUpdate() {
  //   let gameUserMaxHp = this.props.gameUser[0].hp
  //   this.setState(
  //     {
  //       currentGameUserHp: gameUserMaxHp,
  //     },
  //     function() {
  //       console.log(this.state.currentGameUserHp)
  //     }
  //   )
  // }

  render() {
    if (this.props && this.props.gameUser && this.props.gameUser[0]) {
      console.log(this.props.gameUser[0].hp)
      let gameUserMaxHp = this.props.gameUser[0].hp

      return (
        <>
          <div className="gameNavBar">
            <div className="gameUser">
              {/* <img src="" /> */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'blue',
                }}
              ></div>
              <div className="gameUserT_H">
                <div className="gameUserTitle">
                  <div className="gameUserName">健康的人</div>
                  <div className="gameUserLV">LV 2</div>
                </div>
                <div
                  className="gameUserHealth"
                  style={{
                    width: '200px',
                    height: '10px',
                    background: '#00db00',
                    border: '1px solid #000',
                    borderRadius: '2px',
                    margin: '5px 0',
                  }}
                >
                  {/* {gameUserMaxHp} */}
                </div>
              </div>
            </div>
            <div className="gameOpponent">
              {/* <img src="" /> */}
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'blue',
                }}
              ></div>
              <div className="gameOpponentT_H">
                <div className="gameUserTitle">
                  <div className="gameUserName">高血壓獸</div>
                  <div className="gameUserLV">LV 2</div>
                </div>
                <div className="gameUserHealth"></div>
              </div>
            </div>
            {/* <div className="gameOpponent"></div> */}
          </div>
        </>
      )
    } else {
      return <>error</>
    }
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
  gameUser: state.memberReducer.gameUser,
})

export default connect(mapStateToProps)(GameNavBar)

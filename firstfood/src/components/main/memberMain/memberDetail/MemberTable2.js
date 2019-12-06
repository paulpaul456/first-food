import React from 'react'
import jin from '../../../../assets/images/member/5.jpg'
import '../../../../pages/member/member.css'
import { connect } from 'react-redux'
import {
  updateMemberDataAction,
  changeText,
  uploadPhoto,
} from '../../../../action/fetchMemberDataAction'
import swal from '@sweetalert/with-react'
import './memberTable.css'
import {
  getGameUserInfo,
  upgradeGameUserHp,
  upgradeGameUserMp,
} from '../../../../action/fetchMemberDataAction'
import { NavLink } from 'react-router-dom'

class MemberTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardSide: true,
    }
  }

  componentDidMount() {
    if (this.props && this.props.member && this.props.member[0]) {
      console.log(this.props.member[0].customer_id)
      let customer_id = this.props.member[0].customer_id
      this.props.dispatch(getGameUserInfo(customer_id))
    }

    var images = {}

    loadImage('leftArm')
    loadImage('legs')
    loadImage('torso')
    loadImage('rightArm')
    loadImage('head')
    loadImage('hair')

    function loadImage(name) {
      images[name] = new Image()
      images[name].onload = function() {
        resourceLoaded()
      }
      images[name].src = '/assets/images/member/' + name + '.png'
      // '/assets/images/slotMachine/2.jpg'
    }

    var totalResources = 6
    var numResourcesLoaded = 0
    var fps = 30

    function resourceLoaded() {
      numResourcesLoaded += 1
      if (numResourcesLoaded === totalResources) {
        setInterval(redraw, 1000 / fps)
      }
    }

    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')

    console.log(context)

    var charX = 50
    var charY = 185

    function redraw() {
      var x = charX
      var y = charY

      canvas.width = canvas.width // clears the canvas

      drawEllipse(x + 40, y + 29, 160 - breathAmt, 6)

      context.drawImage(images['leftArm'], x + 40, y - 42 - breathAmt)
      context.drawImage(images['legs'], x, y - breathAmt)
      context.drawImage(images['torso'], x, y - 50 - breathAmt)
      context.drawImage(images['rightArm'], x - 15, y - 42 - breathAmt)
      context.drawImage(images['head'], x - 10, y - 125 - breathAmt)
      context.drawImage(images['hair'], x - 37, y - 138 - breathAmt)

      drawEllipse(x + 47, y - 68 - breathAmt, 8, curEyeHeight) // Left Eye
      drawEllipse(x + 58, y - 68 - breathAmt, 8, curEyeHeight) // Right Eye
    }

    function drawEllipse(centerX, centerY, width, height) {
      context.beginPath()

      context.moveTo(centerX, centerY - height / 2)

      context.bezierCurveTo(
        centerX + width / 2,
        centerY - height / 2,
        centerX + width / 2,
        centerY + height / 2,
        centerX,
        centerY + height / 2
      )

      context.bezierCurveTo(
        centerX - width / 2,
        centerY + height / 2,
        centerX - width / 2,
        centerY - height / 2,
        centerX,
        centerY - height / 2
      )

      context.fillStyle = 'black'
      context.fill()
      context.closePath()
    }

    var breathInc = 0.1
    var breathDir = 1
    var breathAmt = 0
    var breathMax = 2
    var breathInterval = setInterval(updateBreath, 1000 / fps)

    function updateBreath() {
      if (breathDir === 1) {
        // breath in
        breathAmt -= breathInc
        if (breathAmt < -breathMax) {
          breathDir = -1
        }
      } else {
        // breath out
        breathAmt += breathInc
        if (breathAmt > breathMax) {
          breathDir = 1
        }
      }
    }

    var maxEyeHeight = 14
    var curEyeHeight = maxEyeHeight
    var eyeOpenTime = 0
    var timeBtwBlinks = 4000
    var blinkUpdateTime = 200
    var blinkTimer = setInterval(updateBlink, blinkUpdateTime)

    function updateBlink() {
      eyeOpenTime += blinkUpdateTime

      if (eyeOpenTime >= timeBtwBlinks) {
        blink()
      }
    }

    function blink() {
      curEyeHeight -= 1
      if (curEyeHeight <= 0) {
        eyeOpenTime = 0
        curEyeHeight = maxEyeHeight
      } else {
        setTimeout(blink, 10)
      }
    }
  }

  handleChange = obj => event => {
    // console.log(obj)
    let value = event.target.value
    let name = event.target.name
    console.log(name, value)
    this.props.dispatch(changeText(obj, name, value))
  }

  handleClick = customer_id => () => {
    console.log(customer_id, this.props.member[0])
    // console.log(this.props.upload)
    const my_file = this.props.member[0].my_file
    // const memberObj = this.props.member[0]
    // console.log(memberObj)
    this.props.dispatch(
      updateMemberDataAction(customer_id, this.props.member[0], my_file, () => {
        swal({
          icon: 'success',
          // text: 'You clicked the button!',
          title: '資料修改成功!',
          timer: 2000,
        })
      })
    )
  }

  //上傳圖檔
  handleUpload = event => {
    console.log('upload_photo')
    event.preventDefault()
    console.log(event.target)

    let file = event.target.files[0]
    // console.log(file)

    const formData = new FormData()
    formData.append('avatar', file)

    for (let value of formData.values()) {
      console.log(value)
    }
    // // console.log(formData)
    // fetch('http://localhost:6003/members/upload', {
    //   method: 'POST',
    //   headers: {
    //     // enctype: 'multipart/form-data',
    //     // 'Content-Type': 'application/json',
    //   },
    //   body: formData,
    // })
    //   .then(response => {
    //     console.log(response)
    //     return response.json()
    //   })
    //   .then(jsonObj => {
    //     console.log(jsonObj)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    this.props.dispatch(uploadPhoto(formData))
  }

  handleFakeBtn = e => {
    // event.preventDefault()
    e.preventDefault() // prevent navigation to "#"

    var fileSelect = document.getElementById('fileSelect'),
      fileElem = document.getElementById('fileElem')

    if (fileElem) {
      fileElem.click()
    }

    // this.handleUpload()
  }

  handleFlipCard = () => {
    let member_container = document.querySelector('.member_container')
    if (member_container.className === 'member_container') {
      member_container.className = 'member_container active'
    } else {
      member_container.className = 'member_container'
    }

    // this.setState(
    //   {
    //     cardSide: !this.state.cardSide,
    //   },
    //   function() {
    //     console.log(this.state.cardSide)
    //   }
    // )
  }

  handleUpGradeHp = () => {
    console.log(this.props.gameUser)
    let peoplehp_sid = this.props.gameUser[0].peoplehp_sid
    let hp = this.props.gameUser[0].hp
    let customer_id = this.props.gameUser[0].customer_information
    let upgrade_point = this.props.gameUser[0].upgrade_point
    console.log(peoplehp_sid, hp, customer_id)

    this.props.dispatch(
      upgradeGameUserHp(
        peoplehp_sid,
        hp,
        upgrade_point,
        // () => {
        //   this.props.dispatch(upgradeGamePoint(peoplehp_sid, ))
        // },
        () => {
          this.props.dispatch(getGameUserInfo(customer_id))
        }
      )
    )
  }

  handleUpGradeMp = () => {
    console.log(this.props.gameUser)
    let peoplehp_sid = this.props.gameUser[0].peoplehp_sid
    let mp = this.props.gameUser[0].mp
    let customer_id = this.props.gameUser[0].customer_information
    let upgrade_point = this.props.gameUser[0].upgrade_point
    console.log(peoplehp_sid, mp, customer_id)

    this.props.dispatch(
      upgradeGameUserMp(
        peoplehp_sid,
        mp,
        upgrade_point,
        // () => {
        //   this.props.dispatch(upgradeGamePoint(peoplehp_sid, ))
        // },
        () => {
          this.props.dispatch(getGameUserInfo(customer_id))
        }
      )
    )
  }

  render() {
    console.log('memberTable', this.props.gameUser)
    let gameUser = []
    let skillArray = []
    let upgrade_point = ''
    // if (this.props.gameUser && this.props.gameUser[0]) {
    //   gameUser = this.props.gameUser[0]
    //   console.log(typeof gameUser.skill)
    //   console.log(gameUser.skill.slice(1, 5))
    //   console.log(gameUser.skill.slice(7, 11))
    //   let skill1 = gameUser.skill.slice(1, 5)
    //   let skill2 = gameUser.skill.slice(7, 11)
    //   skillArray.push(skill1)
    //   skillArray.push(skill2)
    //   console.log(skillArray)
    //   upgrade_point = this.props.gameUser[0].upgrade_point
    // }
    let skill = []
    if (this.props.gameUser && this.props.gameUser[0]) {
      gameUser = this.props.gameUser[0]
      upgrade_point = this.props.gameUser[0].upgrade_point
      console.log('yaya gameUser')
      console.log(this.props.gameUser[0])
      let game_skill = JSON.parse(this.props.gameUser[0].skill)
      console.log(game_skill)
      skill = game_skill
    }

    console.log(this.props.upload)
    if (this.props.member && this.props.member[0]) {
      console.log(this.props.member[0])

      return (
        <>
          <div className="member_container">
            <div className="member_front member_side">
              <div className="change_side" onClick={this.handleFlipCard}>
                換邊
              </div>
              <div
                style={{
                  background: 'white',
                  // padding: '20px',
                  // boxShadow: ' 4px 4px 3px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div className="main">
                  <div className="row">
                    <div className="col-lg-4 detailCol">
                      <figure className="detailFigure">
                        <img
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                          src={`http://localhost:6003/images/${this.props.member[0].my_file}`}
                          alt=""
                        />
                      </figure>
                      {/* <img src={jin} alt="" /> */}
                      <input
                        id="fileElem"
                        style={{ display: 'none' }}
                        type="file"
                        name="avatar"
                        // multiple
                        onChange={this.handleUpload}
                      />
                      <a
                        id="fileSelect"
                        href="#"
                        style={{
                          border: '1px solid #333',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          color: 'white',
                          background: '#0089a7',
                        }}
                        onClick={this.handleFakeBtn}
                      >
                        上傳個人照片
                      </a>
                    </div>
                    <div className="col-lg-4 detailCol">
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberName"
                            >
                              姓名
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="name"
                              value={this.props.member[0].name}
                              id="memberName"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                            {/* <p>{this.props.member[0].name}</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberPhone"
                            >
                              電話
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="mobile"
                              value={this.props.member[0].mobile}
                              id="memberPhone"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberBirthday"
                            >
                              生日
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="birthday"
                              value={this.props.member[0].birthday.slice(0, 10)}
                              id="memberBirthday"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberEmail"
                            >
                              Email
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="email"
                              value={this.props.member[0].email}
                              id="memberEmail"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-12">
                            <label
                              className="detailBox_title"
                              htmlFor="memberAddress"
                            >
                              地址
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-12">
                            <textarea
                              name="address"
                              value={this.props.member[0].address}
                              id="memberAddress"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 detailCol">
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberNickname"
                            >
                              暱稱
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="nickname"
                              value={this.props.member[0].nickname}
                              id="memberNickname"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-4">
                            <label
                              className="detailBox_title"
                              htmlFor="memberGender"
                            >
                              性別
                            </label>
                          </div>
                          <div className="col-8">
                            <input
                              name="gender"
                              value={this.props.member[0].gender}
                              id="memberGender"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-12">
                            <label
                              className="detailBox_title"
                              htmlFor="memberIntroduce"
                            >
                              自介
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="detailBox">
                        <div className="row">
                          <div className="col-12">
                            <textarea
                              name="about_me"
                              value={this.props.member[0].about_me}
                              cols="10"
                              rows="5"
                              id="memberIntroduce"
                              onChange={this.handleChange(this.props.member[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn"
                      style={{
                        border: '1px solid #959595',
                        padding: '5px 20px',
                        margin: '20px auto',
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                      onClick={this.handleClick(
                        this.props.member[0].customer_id
                      )}
                    >
                      修改
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className="member_content"></div> */}
            </div>

            <div className="member_back member_side">
              <div className="change_side" onClick={this.handleFlipCard}>
                換邊
              </div>
              <div className="member_back_all row">
                <div className="game_back_side_left col-7">
                  <div id="myCanvas">
                    <div className="game_nickname">
                      <i class="fas fa-chess-knight"></i>
                      {this.props.member[0].nickname}
                    </div>
                    <div className="game_little_card_box">
                      <canvas id="canvas" width="200" height="250"></canvas>
                      <div className="game_member_box">
                        <div>
                          <i>Lv.</i>等級2
                          <span className="game_point">可使用點數:</span>
                          <span className="game_member_point">
                            {upgrade_point}
                            {/* {this.props.gameUser[0].upgrade_point} */}
                          </span>
                        </div>
                        <div>
                          <i className="fas fa-heart fa-lg"></i>血量
                          <span>{gameUser.hp}</span>
                          <i
                            className="fas fa-plus-circle fa-lg"
                            onClick={this.handleUpGradeHp}
                          ></i>
                        </div>
                        <div>
                          <i className="fas fa-hat-wizard fa-lg"></i>魔力
                          <span>{gameUser.mp}</span>
                          <i
                            className="fas fa-plus-circle fa-lg"
                            onClick={this.handleUpGradeMp}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="game_skill_list">
                    技能表:
                    {skill.map(skill => {
                      return <span>{skill}</span>
                    })}
                  </div>
                  {/* <div className="game_go_for_fight">前往對戰</div> */}
                  <NavLink
                    exact
                    key={10}
                    to={'/member/gameCenter'}
                    className="game_go_for_fight"
                  >
                    前往對戰
                  </NavLink>
                </div>
                <div className="game_back_side_right col-5"></div>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return <h1>error</h1>
    }
  }
}

const mapStatusToProps = state => ({
  member: state.loginReducer.member,
  gameUser: state.memberReducer.gameUser,
})

export default connect(mapStatusToProps)(MemberTable)

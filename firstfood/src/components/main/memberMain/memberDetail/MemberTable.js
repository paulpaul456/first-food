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

class MemberTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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

  render() {
    // console.log('memberTable', this.props.member[0])
    console.log(this.props.upload)
    if (this.props.member && this.props.member[0]) {
      console.log(this.props.member[0])

      return (
        <>
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
                        <label className="detailBox_title" htmlFor="memberName">
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
                  onClick={this.handleClick(this.props.member[0].customer_id)}
                >
                  修改
                </button>
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
})

export default connect(mapStatusToProps)(MemberTable)

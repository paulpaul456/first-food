import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from '@sweetalert/with-react'

//components
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import TitleLogo from '../../components/main/memberMain/TitleLogo'

//images
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'
import deleteImg from '../../assets/images/member/delete.svg'
import editImg from '../../assets/images/member/edit.svg'

//CSS
import '../../pages/member/member.css'

//action
import {
  getAddress,
  changeAddress,
  editAddress,
  deleteAddress,
  addAddress,
} from '../../action/fetchMemberDataAction'

class MemberOrderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: '',
      receiver: '',
      phone: '',
      address: '',
      addDisplay: 'none',
      addBtnDisplay: 'inlineBlock',
    }
  }

  componentDidMount() {
    if (this.props.member && this.props.member[0]) {
      console.log(this.props.member[0].customer_id)
      console.log('123456')
      let customer_id = this.props.member[0].customer_id
      this.props.dispatch(getAddress(customer_id))
    }
  }

  handleChange = (obj, index, addressArray) => event => {
    console.log(obj, index)
    let value = event.target.value
    let name = event.target.name
    console.log(name, value)
    this.props.dispatch(changeAddress(obj, name, value, index, addressArray))
  }

  handleEdit = index => event => {
    console.log(event.target.name)
    console.log(this.props.address)
    // let index = event.target.name
    let addressArray = this.props.address
    let addressObj = addressArray[index]
    // const address = {
    //   address_change_id: event.target.name,
    //   nickname: ,
    //   receiver:,
    //   phone:,
    //   address:,
    // }
    console.log(index)
    console.log(addressArray)
    console.log(addressObj)
    this.props.dispatch(
      editAddress(addressObj, () => {
        swal({
          icon: 'success',
          // text: 'You clicked the button!',
          title: '地址修改成功!',
          timer: 2000,
        })
      })
    )
  }

  handleDelete = event => {
    event.preventDefault()
    console.log(event.target.name)
    let address_change_id = event.target.name
    let customer_id = this.props.member[0].customer_id

    swal({
      title: '確定刪除嗎?',
      icon: 'warning',
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        this.props.dispatch(deleteAddress(address_change_id, customer_id))
        swal('刪除成功!', '你已成功刪除一筆地址', 'success')
      }
    })
  }

  //新增
  handleChangeAdd = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleShowAdd = event => {
    event.preventDefault()
    this.setState({
      addDisplay: 'table-row',
      addBtnDisplay: 'none',
    })
  }

  handleCancel = event => {
    event.preventDefault()
    this.setState({
      addDisplay: 'none',
      addBtnDisplay: 'inline-block',
      nickname: '',
      receiver: '',
      phone: '',
      address: '',
    })
  }

  handleAddAddress = event => {
    event.preventDefault()
    console.log(this.props.member[0].customer_id)
    const addressObj = {
      customer_information: this.props.member[0].customer_id,
      nickname: this.state.nickname,
      receiver: this.state.receiver,
      phone: this.state.phone,
      address: this.state.address,
    }
    this.props.dispatch(
      addAddress(addressObj)
      // () => {
      //   this.setState({
      //     nickname: '',
      //     receiver: '',
      //     phone: '',
      //     address: '',
      //   })
      // }
    )
    this.setState({
      nickname: '',
      receiver: '',
      phone: '',
      address: '',
    })
  }

  render() {
    // console.log(this.props.address[0])
    let addAddress = this.state.addDisplay
    let addBtn = this.state.addBtnDisplay
    // console.log(addAddress)
    return (
      <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {/* {this.props.children} */}
            {/* <Footer location={this.props.location} /> */}
            <div className="my-5">
              {' '}
              <TitleLogo />
            </div>

            {/* <div className="addressList_background"></div> */}
            <div className="addressList">
              <h4>常用地址收件設定</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">代稱/代號</th>
                    <th scope="col">收件人</th>
                    <th scope="col">連絡電話</th>
                    <th scope="col">收件地址</th>
                    <th scope="col">編輯</th>
                    <th scope="col">移除</th>
                  </tr>
                </thead>
                <tbody>
                  {/* { while (this.props.address){} } */}
                  {this.props.address.map((memberAddress, index) => {
                    return (
                      <tr key={'address_' + memberAddress.address_change_id}>
                        <td>
                          <input
                            name="nickname"
                            value={memberAddress.nickname}
                            onChange={this.handleChange(
                              memberAddress,
                              index,
                              this.props.address
                            )}
                          />
                        </td>
                        <td>
                          <input
                            name="receiver"
                            value={memberAddress.receiver}
                            onChange={this.handleChange(
                              memberAddress,
                              index,
                              this.props.address
                            )}
                          />
                        </td>
                        <td>
                          <input
                            name="phone"
                            value={memberAddress.phone}
                            onChange={this.handleChange(
                              memberAddress,
                              index,
                              this.props.address
                            )}
                          />
                        </td>
                        <td>
                          <input
                            name="address"
                            value={memberAddress.address}
                            onChange={this.handleChange(
                              memberAddress,
                              index,
                              this.props.address
                            )}
                          />
                        </td>
                        <td>
                          <a href="#">
                            <img
                              src={editImg}
                              alt=""
                              onClick={this.handleEdit(index)}
                              name={memberAddress.address_change_id}
                            />
                          </a>
                        </td>
                        <td>
                          <a href="#">
                            <img
                              src={deleteImg}
                              alt=""
                              onClick={this.handleDelete}
                              name={memberAddress.address_change_id}
                            />
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                  <tr style={{ display: addAddress }}>
                    <td>
                      <input
                        name="nickname"
                        value={this.state.nickname}
                        placeholder="請輸入代稱"
                        onChange={this.handleChangeAdd}
                      />
                    </td>
                    <td>
                      <input
                        name="receiver"
                        value={this.state.receiver}
                        placeholder="請輸入收件人姓名"
                        onChange={this.handleChangeAdd}
                      />
                    </td>
                    <td>
                      <input
                        name="phone"
                        value={this.state.phone}
                        placeholder="請輸入電話號碼"
                        onChange={this.handleChangeAdd}
                      />
                    </td>
                    <td>
                      <input
                        name="address"
                        value={this.state.address}
                        placeholder="請輸入地址"
                        onChange={this.handleChangeAdd}
                      />
                    </td>
                    <td>
                      <a href="#" onClick={this.handleAddAddress}>
                        {/* <img src={editImg} alt="" /> */}
                        <i className="fas fa-user-plus"></i>
                      </a>
                    </td>
                    <td>
                      <a href="#" onClick={this.handleCancel}>
                        {/* <img src={deleteImg} alt="" /> */}
                        <i className="fas fa-reply"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="addressBtnDiv">
              <span style={{ display: addBtn }}>
                <a href="#" onClick={this.handleShowAdd}>
                  新增
                </a>
              </span>
              {/* <span>
                <a>修改</a>
              </span> */}
            </div>

            <div className="addressNotice">
              <p>*您可以設定5個國內常用收件資訊</p>
            </div>

            <Footer />
          </div>
          {this.props.home ? (
            <>
              <img src={background1} className="bg1 position-absolute" alt="" />
              <img src={background2} className="bg2 position-absolute" alt="" />
              <div className="bottomLine position-absolute"></div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="backimg">
          <img src={background1} className="bg005 position-absolute" alt="" />
          {/* <img
                src={background2}
                className="bg004 position-absolute"
                alt=""
              /> */}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  member: state.loginReducer.member,
  address: state.memberReducer.address,
})

export default withRouter(connect(mapStateToProps)(MemberOrderPage))

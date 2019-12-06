import React from 'react'
import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import HeaderFooter from './container/HeaderFooter'
import { connect } from 'react-redux'
import { loadProductAsync } from '../action/index'

import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import background1 from '../assets/images/background.png'
import background2 from '../assets/images/background2.png'

import {
  addLoveAsync,
  addCartAsync,
  loadProductByCusAsync,
  removeLoveA,
  removeCartA,
  getcidcartallnumA,
  // allSelectByMoneyAsync,
} from '../action/index'
import { whileStatement } from '@babel/types'
import swal from '@sweetalert/with-react'

let k = ''
let lovetArr2 = []
let cartadd = []
let lkk = ''

class FarmerProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fm_goods: '',
      local: '',
      price: '',
      tagg: '',
    }
  }

  componentDidMount() {
    // console.log('componentDidMount')
    // console.log(this.props.isLogin)
    // this.props.dispatch(loadProductAsync())
    if (!this.props.isLogin) {
      // console.log('會員沒登入')
      // this.props.match.params.id
      // console.log('this.props.match.params.select')
      // console.log(this.props.match.params.select)
      if (this.props.match.params.select) {
        this.props.dispatch(loadProductAsync(this.props.match.params.select))
      }
      // console.log(this.props.match.params.select)
      this.props.dispatch(loadProductAsync(99))
    } else {
      // console.log('會員登入')
      const cid = this.props.member[0].customer_id
      // console.log('cid')
      // console.log(cid)
      this.props.dispatch(loadProductAsync(this.props.match.params.select, cid))
      // this.props.dispatch(loadProductByCusAsync(cid))
    }
  }

  componentDidUpdate() {
    console.log(' componentDidUpdate')
    // console.log(this.props.isLogin)
    const ddd = this.props.product
  }

  handleAddLove = value => () => {
    // console.log(this.props.member)
    // console.log('add')
    if (!this.props.isLogin) {
      swal({
        icon: 'warning',
        // text: 'You clicked the button!',
        title: '請註冊會員!',
        timer: 2000,
      })
    } else {
      const goodsid = value
      const customer_id = this.props.member[0].customer_id
      // console.log(goodsid)
      // console.log(customer_id)
      const va = this.state.local || this.state.price || this.state.tagg
      // console.log('goodsid,customer_id,va')
      // console.log(goodsid,customer_id,va)
      this.props.dispatch(addLoveAsync(goodsid, customer_id, va))
      swal({
        icon:'success',
        text:`商品加入收藏!`,
        button:false,
        timer: 2500,})
    }
  }

  handleRemoveLove = value => () => {
    console.log('珊珊珊')
    // console.log('remove')
    if (!this.props.isLogin) {
      swal({
        icon: 'warning',
        // text: 'You clicked the button!',
        title: '請註冊會員!',
        timer: 2000,
        button: false,
      })
    } else {
      const goodsid = value
      const customer_id = this.props.member[0].customer_id
      // console.log(goodsid)
      // console.log(customer_id)
      const va = this.state.local || this.state.price || this.state.tagg

      this.props.dispatch(removeLoveA(goodsid, customer_id, va))
      // swal({
      //   icon: 'success',
      //   // text: 'You clicked the button!',
      //   title: '商品移除收藏!',
      //   timer: 2000,
      // })
      swal({
        icon:'success',
        text:`商品移除收藏!`,
        button:false,
        timer: 2500,})

      // this.props.dispatch(loadProductAsync(value,customer_id))
    }
  }

  handleAddCart = value => () => {
    if (!this.props.isLogin) {
      swal({
        icon: 'warning',
        // text: 'You clicked the button!',
        title: '請註冊會員!',
        timer: 2000,
      })
    } else {
      const goodsid = value
      const customer_id = this.props.member[0].customer_id
      const num = 1

      const va = this.state.local || this.state.price || this.state.tagg
      // console.log('goodsid,customer_id,num,va')
      // console.log(goodsid,customer_id,num,va)
      this.props.dispatch(addCartAsync(goodsid, customer_id, num, va))
      this.props.dispatch(getcidcartallnumA(customer_id))
      swal({
        icon:'success',
        text:`商品加入購物車!`,
        button:false,
        timer: 2500,})
    }
  }
  handleRemoveCart = value => () => {
    // this.props.member[0] === null
    if (!this.props.isLogin) {
      swal({
        icon: 'warning',
        // text: 'You clicked the button!',
        title: '請註冊會員!',
        timer: 2000,
      })
    } else {
      const goodsid = value
      const customer_id = this.props.member[0].customer_id
      // console.log(goodsid)
      // console.log(customer_id)
      const va = this.state.local || this.state.price || this.state.tagg
      //   console.log('remove1111111111111111111111')
      // console.log(goodsid, customer_id, va)
      this.props.dispatch(removeCartA(goodsid, customer_id, va))
      // this.props.dispatch(getcidcartallnumA(customer_id))
      // swal({
      //   icon: 'success',
      //   // text: 'You clicked the button!',
      //   title: '商品移除購物車!',
      //   timer: 2000,
      // })
      swal({
        icon:'success',
        text:`商品移除購物車!`,
        button:false,
        timer: 2500,})
      // this.props.dispatch(loadProductAsync(value,customer_id))
    }
  }
  // 篩選
  handleSelectLow = (value1, value2, value3, value4) => () => {
    window.scrollTo(0, 200)
    console.log('value4')
    console.log(value4)
    if (value3 == '0 AND 499') {
      value3 = 'NT$0~NT$499'
    } else if (value3 == '500 AND 1000') {
      value3 = 'NT$500~NT$1000'
    } else {
      console.log('951753')
    }
    this.setState({ local: value2 })
    this.setState({ price: value3 })
    this.setState({ tagg: value4 })
    if (!this.props.isLogin) {
      this.props.dispatch(loadProductAsync(value1))
    } else {
      const customer_id = this.props.member[0].customer_id
      this.props.dispatch(loadProductAsync(value1, customer_id))
    }
  }

  render() {
    console.log(this.props)

    if (!this.props.product) {
      // console.log('this.props.product')
      return <>資料載入中</>
    } else {
      // console.log('this.props.product')
      // console.log(this.props.product)
      // console.log(lovetArr2.length)
      if (this.props.xx) {
        lovetArr2.push(
          this.props.xx.map(v => {
            return v.farmer_product
          })
        )
      }
      if (lovetArr2.length > 0) {
        lovetArr2 = lovetArr2.pop()
      }
      // console.log('love2')
      // console.log(lovetArr2)
      // if(this.props.xx){lovetArr2.push(this.props.xx.map((v)=>{return v.farmer_product}))}
      if (this.props.oo) {
        cartadd.push(
          this.props.oo.map(v => {
            return v.farmer_product
          })
        )
      }
      if (cartadd.length > 0) {
        cartadd = cartadd.pop()
      }

      // console.log('cartadd')
      // console.log(cartadd)
      // if (this.props.xx) {
      //   lovetArr2.push(
      //     this.props.xx.map(v => {
      //       return v.farmer_product
      //     })
      //   )
      // }
      // {console.log('lovetArr2')}
      //             {console.log(lovetArr2)}
      //             {console.log('cartadd')}
      //             {console.log(cartadd)}
    }

    // if (!this.props.product.sid) {
    //   console.log('this.props.product.sid')
    //   return <>資料載入中</>
    //   console.log(' render')
    //   // console.log('ddddddddddddd')
    //   // this.props.dispatch(loadProductAsync())
    // }
    console.log('farmerrrrrrrrrrrrrrr')
    console.log(this.props)
    return (
      <>
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {/* <h1>{console.log(this.props.qq.isLogin)}</h1> */}
            {/* {console.log(this.props.product[0].name)} */}
            {/* <h1>友友友</h1>   */}
            {/* <h1>{this.state.tagg}</h1> */}

            {/* <h2>{(!this.state.tagg=='限量')?'45':'23'}</h2> */}
            <div className="coursesTitle d-flex">
              <NavLink to={'/'} className="col-md-6 col-lg-6 row">
                <div className="">
                  <span>
                    FIRST
                    <br />
                    FOOD
                  </span>
                </div>
                <img src="/assets/images/logo.svg" alt="" />
              </NavLink>
              <div className="coursesName col-md-2 col-lg-2">小農市集</div>
              <div
                className="coursesIntro col-md-4 col-lg-4 d-flex"
                // style={type || id ? { borderLeft: '1px solid #707070' } : {}}
              ></div>
            </div>

            <div className="row farmerList">
              <div className="btnsliinetitle d-flex justify-content-between align-items-center w100 mb-5">
                <div className="d-md-flex ">
                  <Dropdown className="my-3 my-md-0">
                    <Dropdown.Toggle
                      variant="light"
                      // id="dropdown-basic"
                      className="ml-3 position-relative dropdown-basic active"
                      style={{
                        backgroundColor: 'white',
                        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
                        width: '200px',
                        marginRight: '30px',
                      }}
                    >
                      <i
                        className="fas fa-map-marker-alt position-absolute"
                        style={{ left: '10px', top: '10px' }}
                      ></i>
                      {this.state.local == '' ? '產地' : this.state.local}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        border: 'none',
                        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      <Dropdown.Item
                        onClick={this.handleSelectLow(99, '全部區域', '')}
                        className="ggwppppp"
                      >
                        全部區域
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(3, '北部', '')}
                        className="ggwppppp"
                      >
                        北部
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(4, '中部', '')}
                        className="ggwppppp"
                      >
                        中部
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(5, '南部', '')}
                        className="ggwppppp"
                      >
                        南部
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(6, '東部', '')}
                        className="ggwppppp"
                      >
                        東部
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="my-3 my-md-0">
                    <Dropdown.Toggle
                      variant="light"
                      // id="dropdown-basic"
                      className="ml-3 position-relative dropdown-basic active"
                      style={{
                        backgroundColor: 'white',
                        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
                        width: '200px',
                        marginRight: '30px',
                      }}
                    >
                      <i
                        className="fas fa-dollar-sign position-absolute"
                        style={{ left: '10px', top: '11px' }}
                      ></i>
                      {this.state.price == '' ? '價格' : this.state.price}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        border: 'none',
                        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.15)',
                      }}
                    >
                      <Dropdown.Item
                        onClick={this.handleSelectLow(99, '', '全部價格')}
                        className="ggwppppp"
                      >
                        全部價格
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(2, '', '0 AND 499')}
                        className="ggwppppp"
                      >
                        NT$0~NT$499
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={this.handleSelectLow(1, '', '500 AND 1000')}
                        className="ggwppppp"
                      >
                        NT$500~NT$1000
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {!this.state.tagg ? (
                    ''
                  ) : (
                    <div className="tagggggggg">
                      {this.state.tagg}
                      <i
                        className="fas fa-times"
                        onClick={this.handleSelectLow(99, '', '')}
                      ></i>
                    </div>
                  )}
                </div>
                <div className="bb w150 tc">
                  <span className=" txtdanger">
                    共{this.props.product.length}商品
                  </span>
                </div>
              </div>{' '}
            </div>

            <div className="row justify-content-center goodslist">
              {this.props.product.map((item, ind) => {
                return (
                  <Card
                    key={ind}
                    className="m-1 hohohoduck cardmain"
                    // style={{ width: '14rem' }}
                  >
                    <NavLink key={item.sid} to={`/product/good/${item.sid}`}>
                    <div className="picturebox">
                      <Card.Img
                        className="picture"
                        variant="top"
                        src={
                          '/assets/images/goods/' +
                          item.picture.split(',')[0].match(/\w*\W*\d*\W.jpg/g)
                        }
                      /></div>
                      {/* <Card.Title className="titletxt">
                      {(item.picture).split(",")[0].match(/\w+.jpg/g)}
                    </Card.Title> */}
                      <Card.Title className="titletxt">{item.name}</Card.Title>
                    </NavLink>
                    <Card.Body>
                      {/* <h1 onClick={this.handleRemoveLove(item.sid)}>AAA</h1> */}
                      <div className="d-flex justify-content-between">
                        <div className="">
                          <div className="real price">
                            原價{Math.round(item.price * 1.2)}
                          </div>
                          <div className="discount price">特價{item.price}</div>
                        </div>
                        <div className=" d-flex justify-content-between">
                          <div
                            className={
                              !this.props.xx
                                ? 'toto d-flex align-items-center'
                                : lovetArr2.some(b => {
                                    // console.log('b'+b)
                                    return b == item.sid
                                  })
                                ? 'true'
                                  ? 'gogo d-flex align-items-center'
                                  : 'bye'
                                : 'toto d-flex align-items-center'
                            }
                          >
                            <i
                              className="fas fa-heart fa-lg p-1 btn1 clickmeplzss"
                              // onClick={this.handleAddLove(item.sid)}
                              onClick={
                                !this.props.xx
                                  ? this.handleAddLove(item.sid)
                                  : lovetArr2.some(b => {
                                      return b == item.sid
                                    })
                                  ? this.handleRemoveLove(item.sid)
                                  : this.handleAddLove(item.sid)
                              }
                              // onClick={this.handleAddLove(item.sid)}
                            ></i>
                          </div>
                          <div
                            className={
                              !this.props.oo
                                ? 'toto d-flex align-items-center'
                                : cartadd.some(b => {
                                    return b == item.sid
                                  })
                                ? 'true'
                                  ? 'gogo d-flex align-items-center'
                                  : 'bye'
                                : 'toto d-flex align-items-center'
                            }
                          >
                            <i
                              className="fas fa-shopping-cart fa-lg p-1 btn1 clickmeplzss"
                              onClick={
                                !this.props.oo
                                  ? this.handleAddCart(item.sid)
                                  : cartadd.some(b => {
                                      return b == item.sid
                                    })
                                  ? this.handleRemoveCart(item.sid)
                                  : this.handleAddCart(item.sid)
                              }
                              // onClick={this.handleAddLove(item.sid)}
                            ></i>
                          </div>
                          {/* <div className="d-flex align-items-center">
                            <i
                              className="fas fa-shopping-cart fa-2x p-1 btn1 clickmeplz"
                              onClick={this.handleAddCart(item.sid)}
                            ></i>
                          </div> */}
                        </div>
                      </div>

                      {!this.props.productForCook
                        ? ''
                        : this.props.productForCook.map(el => {
                            if (el.class_sid === item.class_sid) {
                              return (
                                <NavLink
                                  key={item.class_sid}
                                  to={'/map/' + item.sid}
                                >
                                  <Button className="btbtbtn">
                                    提供代客煮服務
                                  </Button>
                                </NavLink>
                              )
                            }
                          })}
                    </Card.Body>

                    <Card.Body className="d-flex p-0 mb-2 ml-2 mr-2">
                      {/* <div>{item.tag_sid}</div> */}
                      {JSON.parse(item.tag_sid).map((v, ind) => {
                        return (
                          <div
                            className="clickmeplzaa"
                            onClick={this.handleSelectLow(
                              v == '有機' ? 7 : 8,
                              '',
                              '',
                              v
                            )}
                            key={ind}
                          >
                            <div className="tag">{v}</div>
                          </div>
                        )
                      })}
                    </Card.Body>
                  </Card>
                )
              })}
            </div>
            <Footer location="小農商品列表" />
          </div>
          <div>  
          <img
              src='/assets/images/background.png'
              className="position-absolute bbggdd"
              alt=""
            /> 
            
          </div>
          {/* <div className="backimg">
            <img
              src={background1}
              className="goodscardbg001 position-absolute"
              alt=""
            />
            <img
              src={background2}
              className="goodscardbg002 position-absolute"
              alt=""
            />
          </div> */}
          {/* <div className="bottomLine position-absolute"></div> */}
        </div>
      </>
    )
  }
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  if (!store.FarmerProductReducer.fmdata)
    return {
      isLogin: store.loginReducer.isLogin,
      // member: store.loginReducer.member,
      // product: '',
    }
  return {
    // product: store.FarmerProductReducer.data[0],
    // product: store.GoodsFmReducer.fmALLdata,
    // productForCook: store.FarmerProductReducer.data[1],
    // xx: store.FarmerProductReducer.data[2],
    // oo: store.FarmerProductReducer.data[3],
    // member: store.loginReducer.member,
    // qq: store.loginReducer,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmdata.fmgoods,
    productForCook: store.FarmerProductReducer.fmdata.forCook,
    xx: store.FarmerProductReducer.fmdata.fitlove,
    oo: store.FarmerProductReducer.fmdata.fitcart,
    member: store.loginReducer.member,
    // qq: store.loginReducer,
    // isLogin: store.loginReducer.isLogin,
  }
}
export default connect(mapStateToProps)(FarmerProduct)

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Accordion, Collapse } from 'react-bootstrap'
import Comment from '../components/comment/Comment'
import ProductSec1 from '../components/main/FarmerProductDetailsMain/ProductSec1'
import ProductSec2 from '../components/main/FarmerProductDetailsMain/ProductSec2'

import HeaderFooter from './container/HeaderFooter'

import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import background1 from '../assets/images/background.png'
import background2 from '../assets/images/background2.png'
import { connect } from 'react-redux'
import { loadProductByIDAsync, loadCommentByIDAsync, getcidcartallnumA } from '../action/index'

import Slickcom from '../components/main/FarmerProductDetailsMain/Slickcom'

import {
  addLoveAsync,
  addCartAsync,
  loadProductAsync,
  removeLoveA,
} from '../action/index'
import swal from '@sweetalert/with-react'

let picarray = []

class Goods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
      clickToggler: false,
    }
  }
  // this.setState=({num:})
  componentDidMount() {
    window.scrollTo(0, 200)
    if (!this.props.isLogin) {
      console.log('會員未登入')
      this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
    } else {
      console.log('會員登入')
      const cid = this.props.member[0].customer_id
      console.log('cid')
      console.log(cid)
      this.props.dispatch(loadProductByIDAsync(this.props.match.params.id, cid))
    }
    // this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
  }

  handleAddLove = value => {
    if (this.props.member[0] === null) {
      swal({
        icon: 'warning',
        // text: 'You clicked the button!',
        title: '請註冊會員!',
        timer: 2000,
      })
    } else {
      const goodsid = value
      const customer_id = this.props.member[0].customer_id
      console.log(goodsid)
      console.log(customer_id)
      this.setState.clickToggler = !this.state.clickToggler
      console.log(this.state.clickToggler)
      this.props.dispatch(addLoveAsync(goodsid, customer_id))
    }
  }

  handleRemoveLove = value => {
    console.log('珊珊珊')
    // console.log('remove')
    if (this.props.member[0] === null) {
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
      this.props.dispatch(removeLoveA(goodsid, customer_id))
      // this.props.dispatch(loadProductAsync(value,customer_id))
    }
  }

  handleAddCart = (value, value2) => {
    console.log('+1+2+3')
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
      const num = value2
      // const statue = "購物中"
      // const time = new Date()
      console.log(goodsid)
      console.log(customer_id)
      console.log(num)
      // console.lod(time)
      this.props.dispatch(addCartAsync(goodsid, customer_id, num))
      this.props.dispatch(getcidcartallnumA(customer_id))
      swal({
        icon: 'success',
        // text: 'You clicked the button!',
        title: '購買成功!',
        button:false,
        timer: 2000,
      })
    }
  }
  handleSelectLow = value => () => {
    console.log('value')
    console.log(value)
    this.props.dispatch(loadProductAsync(value))
  }
  test = obj => {
    console.log('opopopopop')
    console.log(this.state.num)
    console.log('opopopopop')

    if (this.state.num <= 0) {
      // this.setState({num:0})
      // this.setState(obj)
      // this.setState({num:0})
      // this.setState({
      //   num: 0,
      // })
    } else {
      // this.setState({num:1})
      // this.setState(obj)
    }
    this.setState(obj)
  }
  handlepop = value => {
    console.log('yyyyyyyyyyy')
    console.log(value)
  }

  render() {
    console.log(this.props)

    if (!this.props.product) {
      // this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
      //  console.log('this.props.product')
      //  console.log(this.props.product)

      return <>資料載入中</>
    }
    if (!this.props.comment) {
      // this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
      // console.log('this.props.comment')
      // console.log(this.props.comment)
      return <>資料載入中</>
    }
    if (!this.props.like) {
      // this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
      // console.log('this.props.like')
      // console.log(this.props.like)
      return <>資料載入中</>
    }
    if (+this.props.product[0].sid == +this.props.match.params.id) {
      console.log('是否相同')
      console.log(typeof this.props.product[0].sid)
      console.log(typeof +this.props.match.params.id)
    } else {
      console.log('是否no相同')
      console.log(typeof this.props.product[0].sid)
      console.log(typeof +this.props.match.params.id)
      if (!this.props.isLogin) {
        console.log('會員未登入')
        window.scrollTo(0, 200)
        this.props.dispatch(loadProductByIDAsync(this.props.match.params.id))
      } else {
        window.scrollTo(0, 200)
        console.log('會員登入')
        const cid = this.props.member[0].customer_id
        console.log('cid')
        console.log(cid)
        this.props.dispatch(loadProductByIDAsync(this.props.match.params.id, cid))
      }
    }
    // if(!this.props.like){
    //   console.log('無this.props.like')
    //   console.log(this.props.like)
    //   return <>資料載入中</>
    // }else{
    //   console.log('有this.props.like')
    //   console.log(this.props.like)
    //   this.setState({ love:!this.state.love})
    // }

    // if (!this.props.product.sid) {
    //   console.log(' render')
    //   return <>資料載入中</>

    //   // console.log('ddddddddddddd')
    //   // this.props.dispatch(loadProductAsync())
    // }
    // if (!this.props.comment) {
    //   return <>資料載入中</>
    // }

    return (
      <>
        {/* {(!this.state.love)?<h1>沒</h1>:<h1>有</h1>} */}
        <div id="wrapper" className="position-relative">
          <Facebook />
          <Up />
          <div className="container">
            <Header />
            <Navbars />
            {/* <NavLink key={3}  to={`/product/3`}><div onClick={this.handleSelectLow(3)}>北部</div></NavLink>      
           <div onClick={this.handleSelectLow(4)}>中部</div>
            <div>{this.props.product.name}</div>
            <h1>{this.props.product.sid}</h1> */}
            {/* <h2>{(!this.props.member[0].name)?'':this.props.member[0].name}</h2> */}
            {/* <h2>{(!this.props.commentlike[0].讚數)?'':this.props.commentlike[0].讚數}</h2> */}

            {/* <div>{this.props.comment.map((v)=>{return(<div>{v.comment}
            <div>{this.props.commentlike.map((w)=>{if(w.fm_goods_comment_id===v.fm_goods_comment_id){return(<h3>{w.讚數}</h3>)}})}</div>
            </div>)})}</div>
            <h1>{this.props.product.sid}</h1> */}
            {/* <ProductSec1
              name={this.props.product.name}
              subtitle={this.props.product.subtitle}
              farmer_sid={this.props.product.farmer_sid}
            /> */}
            <ProductSec1 />
            {/* {(!this.props.like)?'': this.change() } */}
            <ProductSec2
              likeit={this.props.like}
              addlove={this.handleAddLove}
              removelove={this.handleRemoveLove}
              addCart={this.handleAddCart}
              num={this.state.num}
              setNum={this.test}
              pap={this.handlepop}
            />
            <Slickcom pa={this.props} />
            <Comment />
            <div style={{ display: 'none' }}>
              {/* {!this.props.product.picture ? (
                <></>
              ) : (
                (picarray = JSON.parse(this.props.product.picture).map(v => {
                  return `/assets/images/goods/${v}`
                }))
              )} */}
            </div>
            {/* {console.log('picarray')}
            {console.log(this.props.product[0].picture)} */}
            {/* {console.log('vv' + picarray)}
            <ProductSec2
              name={this.props.product.name}
              picture={picarray}
              addlove={this.handleAddLove}
              addCart={this.handleAddCart}
              num={this.state.num}
              setNum={this.test}
            /> */}
            {/* <Comment comments={this.props.comment}/> */}
            <Footer location="小農商品" />
          </div>
          <div className="backimg">
            <img
              src={background1}
              className="goodsbg001 position-absolute"
              alt=""
            />
            <img
              src={background2}
              className="goodsbg002 position-absolute"
              alt=""
            />
          </div>

          <div className="bottomLine position-absolute"></div>
        </div>
      </>
    )
  }
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => {
  if (!store.FarmerProductReducer)
    return {
      isLogin: store.loginReducer.isLogin,
      // product: '',
    }
  return {
    // product: store.FarmerProductReducer.data[0],
    // comment: store.FarmerProductReducer.data[1],
    // member: store.loginReducer.member,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmiddata.fmid,
    like: store.FarmerProductReducer.fmiddata.fmidlike,
    comment: store.FarmerProductReducer.fmiddata.fmidcomt,
    commentlike: store.FarmerProductReducer.fmiddata.fmidcomtlike,
    member: store.loginReducer.member,
  }
}
export default connect(mapStateToProps)(Goods)

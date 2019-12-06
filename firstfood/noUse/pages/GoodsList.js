import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import Comment from '../components/comment/Comment'
import MobileFooterBar from '../components/smallComponents/MobileFooterBar'
import MobileHeaderBar from '../components/smallComponents/MobileHeaderBar'

import HeaderFooter from './container/HeaderFooter'

import Facebook from '../components/smallComponents/Facebook'
import Up from '../components/smallComponents/Up'
import Header from '../components/Header'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'
import background1 from '../assets/images/background.png'
import background2 from '../assets/images/background2.png'

import { connect } from 'react-redux'
import { loadProductAsync } from '../action/index'

const data = {
  labels: ['代客煮', '食材', '課程'],
  datasets: [
    {
      data: [300, 250, 100],
      backgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
      hoverBackgroundColor: ['#C73E3A', '#0089A7', '#6A8372'],
    },
  ],
}

const GoodsList = props => {
  console.log(props)
  //設置 state
  const [list, setList] = useState('List')

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
    //   console.log(`更新後的 State ${list}`)
      console.log(props.list)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        // console.log(`更新前的 State ${list}`)
      } 
    }
    // , [使用方框放置第二參數]
  )
 
  //改變 state
//   const changeListName = e => {
//     setList(e.target.value)
//     console.log(list)
//   }

 //渲染
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <MobileHeaderBar />
        <div className="container">
          <Header />
          <Navbars />
          <div className="row farmerList">
                <div className="w100 d-flex justify-content-between align-items-center">
                <div className="left d-sm-flex align-items-center">
                    <div className="mx-2">
                    <div className="btn">價格排列</div>
                    <div className="btn">價格排列</div>
                    </div>
                    <div className="mx-2">共XX商品，顯示1-10項</div>
                    <div class="form-group mx-2">
                    <label for="exampleFormControlSelect1"></label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                </div>
                <div className="right">
                    <div className="bb tc sm-x">生鮮產品</div>
                </div>
                </div>
            </div>
          <div className="farmerProductWrap ">
          </div>
          <MobileFooterBar />
          <Footer location="市集" />
        </div>

        <img src={background1} className="bg1 position-absolute" alt="" />
        <img src={background2} className="bg2 position-absolute" alt="" />
        <div className="bottomLine position-absolute"></div>
      </div>
    </>
  )
}

// 綁定props.todos <=> store.todos
const mapStateToProps = store => ({ list: store.FarmerProductReducer })
export default connect(
  mapStateToProps,
  { loadProductAsync }
)(GoodsList)

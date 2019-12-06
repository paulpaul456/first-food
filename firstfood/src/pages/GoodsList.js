import React, { useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Card, Dropdown } from 'react-bootstrap'
import Comment from '../components/comment/Comment'
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
  labels: ['代客煮', '食材', '課程132321'],
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
  let b = 0
  // let aa = 0

  //渲染
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />

          <div className="row farmerList">
            <div className="w100 d-flex justify-content-between align-items-center">
              <div className="left d-sm-flex align-items-center">
                <div className="mx-2 d-flex">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="btn" onClick={() => {}}>
                    時間排列
                  </div>
                </div>
                <div className="mx-2">共XX商品，顯示1-10項</div>
                <div className="form-group mx-2">
                  <label htmlFor="exampleFormControlSelect1"></label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                  </select>
                </div>
              </div>
              <div className="right">
                <div className="bb tc sm-x">生鮮產品</div>
              </div>
            </div>
          </div>
          <div className="farmerProductWrap ">
            {props.list.data.map((item, ind) => {
              return (
                <div className="goodsCard" key={ind}>
                  <NavLink key={item.sid} to={`/${item.sid}`}>
                    <div className="pic">
                      <img src="/assets/images/7.jpg" alt="" />
                    </div>
                    <div className="goodsName">{item.name}</div>
                  </NavLink>
                  <div className="d-flex justify-content-between my-3">
                    <div className="">
                      <div className="real price">原價{item.price}</div>
                      <div className="discount price">
                        特價{Math.round(item.price * 0.75)}
                      </div>
                    </div>
                    <div className=" d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <i
                          className="fas fa-heart fa-2x p-1 btn1"
                          onClick={() => {}}
                        ></i>
                      </div>
                      <div className="d-flex align-items-center">
                        <i
                          className="fas fa-shopping-cart fa-2x p-1 btn1"
                          onClick={() => {}}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    {JSON.parse(item.tag_sid).map((k, ind) => {
                      if (k == 1) k = '安安'
                      return (
                        <NavLink key={ind} to={`/${k}`} className="tag">
                          <div>{k}</div>
                        </NavLink>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
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

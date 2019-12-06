import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadProductByIDAsync } from '../../../action/index'
import { NavLink } from 'react-router-dom'

import FsLightbox from 'fslightbox-react'

const ProductSec1 = props => {
  //設置 state
  const [name, setName] = useState('default value')
  const [toggler2, setToggler2] = useState(false)

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      //  props.dispatch(loadProductByIDAsync(props.match.params.id))
      console.log(`更新後的 State ${'componentDidMount sec1'}`)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        console.log(`更新前的 State ${'componentDidUpdate sec1'}`)
      }
    },
    // , [使用方框放置第二參數]
    []
  )

  //改變 state
  // const changeListName = e => {
  //   setName(e.target.value)
  //   console.log(name)
  // }
  let bigpic = ''

  //渲染
  return (
    <>
    {console.log('props')}
      {console.log(props)}
      {/* <div className="tt11qq">123</div> */}
     
      <section className="p-sec-1">
        <div className="sm-o">
          <div className="d-flex justify-content-end">
            <div className="titleBg ">
              <div className="row">
                <div className="col-10 text-c-light pr-0">
                  <div className="pt-1">{props.product.fmname}</div>
                  <div className="w2">{props.product.name}</div>
                </div>
                <div className="col-1 d-flex align-items-center">
                  <NavLink key="#1" to={'/#carthash'}>
                    <img src="/assets/images/dot.svg" alt="" width="15px" />
                  </NavLink>
                </div>
              </div>
              <div className="barwhitw"></div>
            </div>
          </div>
        </div>
        <div className="sm-x">
          <div className="d-flex m-3 ">
          <div className="">
              <span>
                FIRST
                <br />
                FOOD
              </span>
            </div>
          
            <div className="logo ml-3">
              <img src="/assets/images/logo.svg" alt="" width="40px" />
            </div>
          </div>
        </div>

        <div className="product01 row">
          <div
            className="bg01 col-12 col-md-10 col-lg-8 p-0"
            onClick={() => setToggler2(!toggler2)}
          >
            <img
              className=""
              src={
                !props.product.sid ? (
                  <></>
                ) : (
                  (bigpic =
                    '/assets/images/goods/' +
                    JSON.parse(props.product.picture)[0])
                )
              }
              alt=""
              width="100%"
            />
          </div>
          <FsLightbox toggler={toggler2} sources={[bigpic]} />
          <div className="sm-o col-12">
            <div className="d-flex justify-content-around">
              <div className="d-flex align-items-center">
                <div className="barblack"></div>
              </div>
              <div className="px-3 py-3">
                {!props.product.subtitle ? (
                  <></>
                ) : (
                  props.product.subtitle.split(';').map(v => {
                    return <div>{v}</div>
                  })
                )}
              </div>
              <div className="d-flex align-items-center">
                <div className="barblack"></div>
              </div>
            </div>
          </div>
          <div className="col-1 p-0 mt-5 sm-x d-flex justify-content-center">
            <NavLink key="0" to="/" className="sm-x">
              <div className="pt-3 wvertical-lr d-flex align-items-center">
                <img src="/assets/images/dot.svg" alt="" width="20px" />
                &nbsp;&nbsp;
                {props.product.name} &nbsp;&nbsp;購買
              </div>
            </NavLink>
          </div>
          <div className="col-2 p-0 mt-5 col-x">
            <div className="bordertopdown wvertical-lr ">
              {!props.product.subtitle ? (
                <></>
              ) : (
                props.product.subtitle.split(';').map((v, ind) => {
                  return (
                    <div key={ind} className="sp m-4">
                      {v}
                    </div>
                  )
                })
              )}
            </div>
          </div>
          <div className="col-1 mt-n5 sm-x">
            <div className="d-flex">
              <div className="wvertical-lr m-0 w2">{props.product.name}</div>
              <div className="wvertical-lr m-0 ">{props.product.fmname}</div>
            </div>
          </div>
        </div>
        <div className="sm-x">
          <div className="row justify-content-between mt-5 mb-4 ">
            <div className="col-6 p-0 d-flex">
              <h4 className="br pr-5 text-c-danger">詳細照片</h4>
              <div className="pl-5">
                <img src="/assets/images/dot.svg" alt="" width="20px" />
                &nbsp;&nbsp; 燈相看大圖
              </div>
            </div>
            <div className="col-4 p-0 tc bb">
              from &nbsp;{props.product.place} &nbsp;&nbsp;
              {props.product.fmname}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const mapStateToProps = store => {
  if (!store.FarmerProductReducer) return {
    isLogin: store.loginReducer.isLogin,
    // product: '',
  }
  return {
    // product: store.FarmerProductReducer.data[0],
    // comment: store.FarmerProductReducer.data[1],
    // member: store.loginReducer.member,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmiddata.fmid[0],
    member: store.loginReducer.member,

  }
}
export default connect(mapStateToProps)(ProductSec1)

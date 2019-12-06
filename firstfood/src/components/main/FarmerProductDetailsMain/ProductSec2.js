import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import Slick from './Slick'
import { loadProductByIDAsync } from '../../../action/index'

import FsLightbox from 'fslightbox-react'
import { loadProductAsync } from '../../../action/index'
import { tsPropertySignature } from '@babel/types'
import { addOrMines } from '../../../action/index'
// import { addCartAsync } from '../action/index'

// // Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
let buy = ''



const ProductSec2 = props => {
  console.log(props)
  //設置 state
  const [name, setName] = useState('default value')
  // 燈箱
  const [toggler, setToggler] = useState(false)
  const [toggler3, setToggler3] = useState(false)
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })
  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  //  是否有點選
  // const [clickToggler, setClickToggler] = useState(false)

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      console.log(`更新後的 State ${'componentDidMount sec2'}`)
     

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        console.log(`更新前的 State ${'componentDidUpdate sec2'}`)
      }
    }
    // , [使用方框放置第二參數]
  )

  //改變 state
  const changeNum = e => {
    setName(e.target.value)
    console.log(name)
  }



  // 照片陣列
  let picarray = []
  console.log('aa' + picarray)


  const handleHowMany = (howMany) => () => {
    
    console.log(howMany)
    props.dispatch(addOrMines(howMany))
  }

  //渲染
  return (
    <>
      {console.log('props')}
      {console.log(props.like)}
      <div style={{ display: 'none' }}>
        {!props.product.picture ? (
          <></>
        ) : (
          (picarray = JSON.parse(props.product.picture).map(v => {
            return `/assets/images/goods/${v}`
          }))
        )}

      </div>
      <div className="p-sec-2">
        <div className="bigtop d-lg-flex flex-wrap">
          <div className="left col-12 col-lg-8 p-lg-0 borderb mb-5 mb-lg-0">
            <div className="A d-flex justify-content-between mb-3">
            {!props.product.picture ? (
                <></>
              ) : (
                JSON.parse(props.product.picture).map((v, ind) => {
                  if (ind < 4) {
                    return (
                      <div
                        key={ind}
                        className="pho clickclickmeme"
                        onClick={() => openLightboxOnSlide(ind + 1)}
                      >
                        <img
                          src={'/assets/images/goods/' + v}
                          alt=""
                          // width="100%"
                          // className="col-4"
                        />
                      </div>
                    )
                  }
                })
              )}
            </div>
            <div className="B d-md-flex flex-wrap justify-content-between">
              <div className="lefttt col-12 col-md-6 bordert p-0">
                <div className="n1">
                <div className="d-flex p-3 align-items-center borderb">
                <div>
                  <img src="/assets/images/circle.svg" alt="" />
                </div>
                <div className="ml-3 ">計價方式</div>
                <div className="ml-4">{props.product.specification}</div>
              </div>
                </div>
                <div className="n2">
                <div className="d-flex p-3 align-items-center borderb">
                <div>
                  <img src="/assets/images/circle.svg" alt="" />
                </div>
                <div className="ml-3">內容物</div>
                <div className="ml-4">{props.product.content}</div>
              </div>
                </div>
                <div className="n3">
                <div className="d-flex p-3 align-items-center borderb">
                <div>
                  <img src="/assets/images/circle.svg" alt="" />
                </div>
                <div className="ml-3">認證機構</div>
                {/* <div className="ml-4">{props.product.approve_sid}</div> */}
                <div className="ml-4 sgscheck" onClick={() => setToggler3(!toggler3)}>
                   {/* <h1>12871987tyrty31</h1> */}
                 {props.product.approve_sid}
                </div>
              <FsLightbox toggler={toggler3} sources={['/assets/images/sgschecked.jpg',]} />

              </div>
                </div>
              </div>
              <div className="righttt col-12 col-md-5 bordert p-0">
                <div className="d-flex p-3 p-md-1 align-items-center borderb justify-content-start">
                <div>
                  <img src="/assets/images/circle.svg" alt="" />
                </div>
                <div className="ml-3 ">簡介</div>
                </div>
                <div className="p-3 p-md-1">{props.product.writing}</div>
              </div>
            </div>
          </div>
          <div className="right mt-5 mt-lg-0 col-12 col-lg-4 ">
            <div className="D">
              <div className="r1 picpho my-3">
              <img
              src={
                !props.product.sid ? (
                  <></>
                ) : (
                  '/assets/images/goods/' + JSON.parse(props.product.picture)[2]
                )
              }
              alt=""
              width="60%"
            />
              </div>
              {/* <div className="r2 d-flex justify-content-center justify-content-lg-around">
                <div className="le d-flex"><div className="clickmeplz">
                  <img src="/assets/images/talk.svg" alt="" width="21px" />
                </div>
                <div className="m-0 ml-sm-3 ml-md-0 ml-lg-3">156</div></div>
                <div className="ri d-flex"><div className="clickmeplz">
                  <img src="/assets/images/talk.svg" alt="" width="21px" />
                </div>
                <div className="m-0 ml-sm-3 ml-md-0 ml-lg-3">156</div></div>
              </div> */}
              <div className="r3 my-3 txcenter">購物車</div>
              <div className="r4 d-flex justify-content-around bordert borderb py-3"><div>{props.product.fmname}</div>
            <div>{props.product.name}</div></div>
              <div className="r5 d-flex justify-content-center justify-content-lg-around m-4 pb-2">
              <div className="">原價</div>
            <div className="mx-3 mx-lg-0 real">{Math.round(props.product.price*1.2)}</div>
            <div className="">NT(含稅)</div>
              </div>
              <div className="r6 d-flex justify-content-center justify-content-lg-around m-4 pb-2">
              <div className="text-c-danger">特價</div>
            <div className="text-c-danger mx-3 mx-lg-0 wbiger">
              {props.product.price}
            </div>
            <div className="text-c-danger">NT(含稅)</div>
              </div>
              <div className="r7 d-flex justify-content-center justify-content-lg-around m-4">
              <div>
              <i
                className="fas fa-minus-circle fa-2x clickmeplz"
              
                onClick={(props.num==0)?'':() => {
                  props.setNum({
                    num: props.num - 1,
                  })
                }} 
                // onClick={() => {
                //   props.setNum({
                //     num: props.num - 1,
                //   })
                // }}
              ></i>
            </div>
            <div className="num tc px-3 mx-3 mx-lg-0" contenteditable="true">
              {props.num}
              {/* {props.itemNumber} */}
            </div>
            <div>
              <i
                className="fas fa-plus-circle fa-2x clickmeplz"
                 onClick={() => {
                  props.setNum({
                    num: props.num + 1,
                  })
                }}
                // onClick={handleHowMany(props.itemNumber)}
              ></i>
            </div>
              </div>
              <div className="r8 d-flex justify-content-around m-3">
              <div
              className="btn1 text-c-danger clickmeplz"
              href=""
              onClick={() => {
                props.addCart(props.product.sid, props.num)
              }}
            >
              {console.log('hh' + props.num)}
              加入購物車 <i className="fas fa-shopping-cart"></i>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bigbottom"></div>
      </div>
      {/* <div className="p-sec-2 ">
        <div className="lg-x">
          <Slick />
        </div>
      </div> */}
      
      {console.log(props.picture)}

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={picarray}
        slide={lightboxController.slide}
      />


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
    member: store.loginReducer.member[0],
    like: store.FarmerProductReducer.fmiddata.fmidlike[0],
    itemNumber: store.FarmerProductReducer.howManyItem,
  }
}
export default connect(mapStateToProps)(ProductSec2)

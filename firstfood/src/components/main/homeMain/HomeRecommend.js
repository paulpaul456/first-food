import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Recommend1 from '../../../assets/images/recommend1.jpg'

const HomeRecommend = props => {
  return (
    <>
      <div id="recommend" className=" ">
        <div className="container">
        <div id="circle" className="row align-content-center">
          <div className="circle active"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        </div>
        <div className="titleLine"></div>
        <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-sm-7 p-0">
            <NavLink key={9} to={'/restaurant'}>
              <img src={Recommend1} alt="" />
            </NavLink>
          </div>
          <div className="col-12 col-sm-4 recommend align-content-center">
            <h4 className="text-center">SHOP RANKING</h4>
            <div className="subLine"></div>
            <div className="row info">
              <div className="col-8">
                <div className="m-auto ranking row justify-content-center align-content-center">
                  <h2 className="m-0">No.1</h2>
                </div>
                <div className="line"></div>
                <h5 className="mx-auto">
                  下次還要再嘗試其他的
                  <br />
                  跟我想像中的料理
                  <br />
                  完全一樣
                  <br />
                  廚師們真的都好厲害
                </h5>
                <div className="line"></div>
              </div>
              <h1 className="m-auto">欣葉</h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default HomeRecommend

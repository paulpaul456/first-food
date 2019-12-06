import React, { useEffect, useState } from 'react'
import Comment from '../../components/comment/Comment'

import Facebook from '../../components/smallComponents/Facebook'
import Up from '../../components/smallComponents/Up'
import Header from '../../components/Header'
import Navbars from '../../components/Navbars'
import Footer from '../../components/Footer'
import background1 from '../../assets/images/background.png'
import background2 from '../../assets/images/background2.png'
import MemberOrderHistory from '../../components/main/memberMain/memberOrder/MemberOrderHistory'

const MemberOrder = props => {
  //設置 state
  const [name, setName] = useState('default value')

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      console.log(`更新後的 State ${name}`)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        console.log(`更新前的 State ${name}`)
      }
    }
    // , [使用方框放置第二參數]
  )

  //改變 state
  const changeListName = e => {
    setName(e.target.value)
    console.log(name)
  }

  //渲染
  return (
    <>
      <div id="wrapper" className="position-relative">
        <Facebook />
        <Up />
        <div className="container">
          <Header />
          <Navbars />
          <MemberOrderHistory />
          <Footer location="會員訂單" />
        </div>

        <div className="backimg">
          <img src={background2} className="bg006 position-absolute" alt="" />
          <img src={background1} className="bg004 position-absolute" alt="" />
        </div>
        {/* <div className="bottomLine position-absolute"></div> */}
      </div>
    </>
  )
}

export default MemberOrder

import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'
import OrderTable from './OrderTable'
import TitleLogo from '../TitleLogo'
import { NavLink, withRouter } from 'react-router-dom'

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
      <TitleLogo />
      <div className="flex-wrap d-md-flex justify-content-md-center justify-content-lg-around my-5">
        <NavLink key={1} to={'/test'}>
          <OrderCard />
        </NavLink>
        <NavLink key={2} to={'/test'}>
          <OrderCard />
        </NavLink>
      </div>
      <OrderTable />
    </>
  )
}

export default MemberOrder

import React, { useEffect, useState } from 'react'

const CircleTitle = props => {
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
      <div>
        <img src="/assets/images/circleee.svg" alt="" width="80px" />
        <h6 className="mt-n5">優惠券</h6>
      </div>
    </>
  )
}

export default CircleTitle

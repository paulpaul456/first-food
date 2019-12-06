import React, { useEffect, useState } from 'react'
import FarmerList from '../components/main/farmerProduct/FarmerList'

import HeaderFooter from './container/HeaderFooter'

const Class = props => {
  const [classState, setClass] = useState('Class')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  })
  return (
    <>
      <HeaderFooter location="課程">
        <h1>課程頁</h1>
        <FarmerList />
      </HeaderFooter>
    </>
  )
}

export default Class

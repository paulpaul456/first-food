import React, { useEffect, useState } from 'react'

const ReservationButton = props => {

  useEffect(
    () => {
      return () => {
      }
    }
    , [],
  )


  //渲染
  return (
    <div className="reservationRules">
      <p>用餐須知</p>
      <p><i className="fas fa-location-arrow"> </i> {'\u00a0'} 開放訂位時間為訂購起一個星期（包含食材運送時間）</p>
      <p><i className="fas fa-location-arrow"> </i> {'\u00a0'} 開放訂位時間為2個月內</p>
      <p><i className="fas fa-location-arrow"> </i> {'\u00a0'} 每次訂位接受人數1～10人，詳細訂位規則請洽詢客服</p>
      <p><i className="fas fa-location-arrow"> </i> {'\u00a0'} 此餐廳食材烹煮費 500 元</p>

    </div>
  )
}

export default ReservationButton

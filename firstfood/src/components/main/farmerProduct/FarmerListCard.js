import React, { useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap'

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

const FarmerListCard = props => {
  const [chartPie, setChartPie] = useState('ChartPie')

  return (
    <>
      <div className="goodsCard">
        <NavLink key={1} to={'/member'}>
          <div className="pic">
            <img src="/assets/images/7.jpg" alt="" width="100%" />
          </div>
          <div className="goodsName">我是食材食是我1231321</div>
        </NavLink>
        <div className="goodsbottom d-flex justify-content-between my-3">
          <div className="">
            <div className="real price">原價799</div>
            <div className="discount price">特價599</div>
          </div>
          <div className=" d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <i className="fas fa-heart fa-2x p-1"></i>
            </div>
            <div className="d-flex align-items-center">
              <i className="fas fa-shopping-cart fa-2x p-1"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FarmerListCard

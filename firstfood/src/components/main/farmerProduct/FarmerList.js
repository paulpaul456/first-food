import React, { useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import FarmerListCard from './FarmerListCard'

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

const FarmerList = props => {
  const [chartPie, setChartPie] = useState('ChartPie')

  return (
    <>
      <Card>123456789</Card>
      <div className="row farmerList">
        <div className="w100 d-flex justify-content-between align-items-center">
          <div className="left d-sm-flex align-items-center">
            <div className="mx-2">
              <div className="btn">價格排列</div>
              <div className="btn">價格排列</div>
            </div>
            <div className="mx-2">共XX商品，顯示1-10項</div>
            <div class="form-group mx-2">
              <label for="exampleFormControlSelect1"></label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div className="right">
            <div className="bb tc sm-x">生鮮產品</div>
          </div>
        </div>
      </div>
      <div className="farmerProductWrap ">
        <FarmerListCard />
        <FarmerListCard />
        <FarmerListCard />
        <FarmerListCard />
        <FarmerListCard />
      </div>
    </>
  )
}

export default FarmerList

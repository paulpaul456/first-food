import React from 'react'
import './tagChangePage.css'
import { NavLink } from 'react-router-dom'

class TagChangePage extends React.Component {
  render() {
    return (
      <>
        <span id="/member/detail">1</span>
        <span id="/member/order">2</span>
        <span id="/member/password">3</span>
        <span id="/member/collection">4</span>
        <div id="tab" />

        {/* 頁籤按鈕 */}
        <ul>
          <li>
            <NavLink key={1} to={'/member/detail'}>
              Tab 1
            </NavLink>
            {/* <a href="#tab-1">Tab 1</a> */}
          </li>
          <li>
            <NavLink key={2} to={'/member/order'}>
              Tab 2
            </NavLink>
            {/* <a href="#tab-2">Tab 2</a> */}
          </li>
          <li>
            <NavLink key={3} to={'/member/password'}>
              Tab 3
            </NavLink>
            {/* <a href="#tab-3">Tab 3</a> */}
          </li>
          <li>
            <NavLink key={3} to={'/member/collection'}>
              Tab 3
            </NavLink>
            {/* <a href="#tab-4">Tab 4</a> */}
          </li>
        </ul>

        {/* 頁籤的內容區塊 */}
        <div className="tab-content-1">
          <p>內容-1</p>
        </div>
        <div className="tab-content-2">
          <p>內容-2</p>
        </div>
        <div className="tab-content-3">
          <p>內容-3</p>
        </div>
        <div className="tab-content-4">
          <p>內容-4</p>
        </div>
      </>
    )
  }
}

export default TagChangePage

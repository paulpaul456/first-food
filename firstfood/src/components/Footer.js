import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'

const Footer = props => {
  const [location, setLocation] = useState(props.location ? props.location : '')
  return (
    <>
      <footer className="footer">
        <NavLink key={1} to={'/'}>
          <span>HOME</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            className="m-3"
            viewBox="0 0 11.426 12.855"
          >
            <path
              id="Polygon_1"
              data-name="Polygon 1"
              d="M6.427,0l6.427,11.426H0Z"
              transform="translate(11.426) rotate(90)"
            />
          </svg>
          <span>{location}</span>
        </NavLink>
        <div className="line"></div>
        <div className="mt-2">
          <NavLink key={2} to={'/'} className="mr-2">
            代客煮教學
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.847"
            height="17.847"
            viewBox="0 0 17.847 17.847"
          >
            <line
              id="Line_10"
              data-name="Line 10"
              x1="17.14"
              y2="17.14"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <NavLink key={3} to={'/'} className="mx-2">
            購買須知
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.847"
            height="17.847"
            viewBox="0 0 17.847 17.847"
          >
            <line
              id="Line_10"
              data-name="Line 10"
              x1="17.14"
              y2="17.14"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <NavLink key={4} to={'/'} className="mx-2">
            會員條款
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.847"
            height="17.847"
            viewBox="0 0 17.847 17.847"
          >
            <line
              id="Line_10"
              data-name="Line 10"
              x1="17.14"
              y2="17.14"
              transform="translate(0.354 0.354)"
              fill="none"
              stroke="#707070"
              strokeWidth="1"
            />
          </svg>
          <NavLink key={5} to={'/'} className="mx-2">
            運送細節
          </NavLink>
        </div>
        <div className="my-3 row col-12 footerLogo">
          <div className="col-3 col-sm-3 col-md-2 p-0">
            <img src={Logo} alt="" />
          </div>
          <div className="col-9 row align-self-center justify-content-center">
            <p>台北市大安區復興南路一段390號 tel. 026631-6666 </p>
            {/*<p>copyright (c) first food.. All Rights Reserved. </p>*/}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

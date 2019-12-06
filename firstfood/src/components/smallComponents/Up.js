import React, { useEffect, useState } from 'react'

const Up = props => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setScrollTop(1)
    }
    if (window.scrollY < 650) {
      setScrollTop(0)
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {!scrollTop ? (
        <></>
      ) : (
        <div
          id="up"
          onClick={() => handleClick()}
          className="row justify-content-center align-content-center position-fixed"
        >
          <i className="fas fa-angle-up"></i>
        </div>
      )}
    </>
  )
}

export default Up

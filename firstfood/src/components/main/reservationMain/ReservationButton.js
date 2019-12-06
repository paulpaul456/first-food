import React, { useEffect, useState } from 'react'

const ReservationButton = props => {
  return (
    <>
      <div className="reservationButton row justify-content-center align-items-center" style={{backgroundColor: props.color}}
      onClick={props.onClick}>
        <h5 >{props.text}</h5>
      </div>
    </>
  )
}

export default ReservationButton

import React from 'react'
import { data } from '../data/index'
import PathNow from '../components/PathNow'
const style = {
  backgroundImage: 'url(../assets/img/5.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: window.innerWidth,
  height: window.innerHeight - 50,
}

const Student = props => {
  console.log(props)
  let studentData = null
  // if(props.match.params.id==107003){props.history.goBack()}
  studentData = data.find(ele => ele.id === +props.match.params.id)
  if (!studentData)
    return (
      <>
        <h1>None Data</h1> <PathNow />{' '}
        <button onClick={() => props.history.push('/')}>回首頁</button>{' '}
      </>
    )
  return (
    <>
      <PathNow />
      <div style={style}>
        <h1>Student</h1>
        <div className="card m-auto" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">ID: {studentData.id}</li>
            <li className="list-group-item">Name: {studentData.name}</li>
            <li className="list-group-item">Birth {studentData.birth}</li>
          </ul>
        </div>
        <button className="m-auto" onClick={() => props.history.push('/')}>
          回首頁
        </button>
      </div>
    </>
  )
}

export default Student

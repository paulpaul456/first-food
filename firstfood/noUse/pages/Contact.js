import React from 'react'
import BootstrapForm from '../components/bootstrap/BootstrapForm'
const style = {
  backgroundImage: 'url(' + '../assets/img/3.jpg' + ')',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: window.innerWidth,
  height: window.innerHeight - 50,
}
const Contact = props => {
  console.log(props)
  return (
    <>
      <div style={style}>
        <h1 className="text-center">Contact</h1>
        <h1 className="text-center">{props.userStatus}</h1>
        <BootstrapForm />
      </div>

      {/*<img src="../assets/img/3.jpg" alt="" width="800" height="600"/>*/}
    </>
  )
}

export default Contact

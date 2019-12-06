import React from 'react'
import { data } from '../data/index'
import { Link } from 'react-router-dom'
import PathNow from '../components/PathNow'

const style = {
  backgroundImage: 'url(../assets/img/1.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: window.innerWidth,
  height: window.innerHeight - 50,
  color: 'white',
}

const Home = props => {
  console.log(props)
  return (
    <>
      <div style={style}>
        <PathNow />
        <div className="list-group mb-0 container m-auto">
          {data.map(ele => (
            <Link
              key={ele.id}
              to={'/student/' + ele.id}
              className="list-group-item list-group-item-action col-3"
            >
              {ele.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

import React from 'react'

const style = {
  backgroundImage: 'url(../assets/img/2.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: window.innerWidth,
  height: window.innerHeight - 50,
}
const News = props => {
  let a = 1
  console.log(props)
  return (
    <>
      <div style={style}>
        <h1 className="text-center">News</h1>
      </div>
    </>
  )
}

export default News

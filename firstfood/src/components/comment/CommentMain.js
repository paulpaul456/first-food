import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const CommentMain = props => {
  //設置 state
  const [name, setName] = useState('default value')


  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      console.log(`更新後的 State ${name}`)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        console.log(`更新前的 State ${name}`)
      }
    }
    // , [使用方框放置第二參數]
  )

  //改變 state
  const changeListName = e => {
    setName(e.target.value)
    console.log(name)
  }

  //渲染
  return (
    <>
      <div className="row" key={``}>
        <div className="col-lg-2"></div>

        <div className="col-md-12 col-lg-10">
          <div className="d-flex justify-content-end ">
            <div className=" mt-3">
              <div className="row">
                <div className="col-3 col-sm-2 profile">
                  <div className="img-border">
                    <img src="/assets/images/7.jpg" alt="" />
                  </div>
                  <div className="d-flex justify-content-around my-2 tc-danger">
                    可大師12{}
                  </div>
                </div>
                <div className="col-9 col-sm-10 p-sm-0">
                  <div className="row">
                    <div className="col-sm-1 col-lg-0"></div>
                    <div className="col-1 ">
                      <div className="col-x col-1 bortop borleft h1rem"></div>
                    </div>
                    <div className="col-sm-9 col-lg-9 py-sm-2 py-md-4 pr-0 borbox">
                      留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿
                      留 留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿
                      留 留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿留言啊啊啊阿
                      留{}
                    </div>
                    <div className="col-1 d-flex align-items-end">
                      <div className="col-x borbot borright h1rem col-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end my-2">
                <div className="mx-3">
                  <div className="icon1 clickmeplz" href="">
                    <img src="/assets/images/gj-1.svg" alt="" />
                  </div>
                </div>
                <div className="mx-3">
                  <div className="icon1 clickmeplz" href="">
                    <img src="/assets/images/bj.svg" alt="" />
                  </div>
                </div>
                <div className="ml-3">2018-09-09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentMain

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import CommentMain from './CommentMain'
import CommentMore from './CommentMore'

const Comment = props => {
  //設置 state
  const [name, setName] = useState('default value')

  //設置 lifecycle 注意update觸發順序
  useEffect(
    () => {
      // componentDidMount 及 componentDidUpdate 更新時順序2
      // console.log(`更新後的 State ${name}`)

      // componentDidUpdate 及 componentWillUnmount 更新時順序1
      return () => {
        // console.log(`更新前的 State ${name}`)
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
      {/* {console.log('popopo')}
      {console.log(props)}
      {console.log(props.comment.length)} */}
      <section className="sec-comment mt-5">
        <div className="row d-lg-flex justify-content-lg-between  align-items-end mb-4 ">
          <div className=" col-lg-2  movelogo">
            <img
              src="/assets/images/circleee.svg"
              alt=""
              width=""
              className="titleLog"
            />
            <p className="title position-absolute">評論</p>
          </div>
          <div className="tc-danger">留言筆數:{props.comment.length}</div>
        </div>
        <hr></hr>
        {!props.comment.length==0?'':<div className="d-flex justify-content-center"><div className="">尚無留言!!快來購買評論!!</div></div>}
        {!props.comment
          ? ""
          : props.comment.map((v, ind) => {
              return (
                <>
                 <div>
                   <div className="row100 d-flex">
                     <div className="lgw10percentage"></div>
                     <div className="w30percentage">
                       <div className="pho ">
                       <img src={`http://localhost:6003/images/${v.my_file}`} alt="" />
                       </div>
                       <div className="peoname my-2">{v.name}</div>
                     </div>
                     <div className="w70percentage d-flex ">
                       <div className="w10percentage align-self-start">
                         <img src="/assets/images/linecomtop2.png" alt=""  />
                       </div>
                       <div className="w80percentage textcon align-self-center">{v.comment}</div>
                       <div className="w10percentage  align-self-end">
                         <img src="/assets/images/linecombot2.png" alt=""  />
                       </div>
                     </div>
                   </div>
                   <div className="row100 d-flex justify-content-end mt-3 mb-5">
                     <div className="icon11 clickmeplz"><img src="/assets/images/gj-1.svg" alt="" />{v.p_like}</div>
                     <div className="icon11 clickmeplz"><img src="/assets/images/bj.svg" alt="" />{v.p_dislike}</div>
                     <div className="">{(v.create_at).split("T")[0]}</div>
                   </div>
                 </div>
                </>
              )
            })}
        {/* <CommentMain /> */}
        {/* {!props.comment.length==0?<CommentMore />:''} */}
        
      </section>
    </>
  )
}


const mapStateToProps = store => {
  if (!store.FarmerProductReducer) return {
    isLogin: store.loginReducer.isLogin,
    // product: '',
  }
  return {
    // product: store.FarmerProductReducer.data[0],
    // comment: store.FarmerProductReducer.data[1],
    // member: store.loginReducer.member,
    isLogin: store.loginReducer.isLogin,
    product: store.FarmerProductReducer.fmiddata.fmid[0],
    comment: store.FarmerProductReducer.fmiddata.fmidcomt,
    commentlike: store.FarmerProductReducer.fmiddata.fmidcomtlike,
    member: store.loginReducer.member,

  }
}
export default connect(mapStateToProps)(Comment)


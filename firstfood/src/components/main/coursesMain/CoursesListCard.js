import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Swal from '@sweetalert/with-react'

const CoursesListCard = props => {
  const {
    item,
    localAddCart,
    localAddCollection,
    showLoginBox,
    dispatch,
    collection,
    courseCart,
    cartAddCourse,
    cartDeleteCourse,
    collectionGetCourse,
    collectionAddCourse,
    collectionDeleteCourse,
  } = props
  let date = new Date(item.course_date)
  //localStorage
  const localCollection = localStorage.courseCollection
  const localCart = localStorage.courseCart
  let localCollectionArr = []
  let localCartArr = []
  if (localCollection) {
    localCollectionArr = localCollection.split(',').map(i => parseInt(i))
  }
  if (localCart) {
    localCartArr = localCart.split(',').map(i => parseInt(i))
  }
  //收藏
  let collectionArr = undefined
  if (!collection) {
    // console.log('收藏清單空',collection)
  } else {
    collectionArr = collection.collection
    // console.log('收藏清單有',collection.collection)
  }
  //加入與移除收藏
  const newADCollection = () => {
    if (props.isLogin) {
      let customerId = props.member[0].customer_id
      if (collectionArr) {
        // console.log(collectionArr)
        if (collectionArr.some(el => el.course === item.course_id)) {
          collectionArr.forEach(i => {
            if (i.course === item.course_id) {
              // console.log(customerId,i)
              collectionDeleteCourse(customerId, i.course_cart_id,()=>cartAlert('移除'))
            }
          })
        } else {
          collectionAddCourse(customerId, item,()=>cartAlert('加入'))
        }

      }else{
        collectionAddCourse(customerId, item,()=>cartAlert('加入'))
      }
    } else {
      loginAlert()
    }
  }
  //加入與移除購物車
  const newADCart = () => {
    if (props.isLogin) {
      let customerId = props.member[0].customer_id
      if (courseCart.some(el => el.course === item.course_id)) {
        courseCart.forEach(i => {
          if (i.course === item.course_id) {
            cartDeleteCourse(customerId, i.course_cart_id,()=>cartAlert('移除'))
          }
        })
      } else {
        cartAddCourse(customerId, item,()=>cartAlert('加入'))
      }
      props.getCourseData(customerId)
    } else {
      loginAlert()
    }
  }
  //提示
  const cartAlert = (text) => (Swal({
    icon: 'success',
    text: `${text}成功`,
    button: false,
    timer: 2500,
  }))
  const loginAlert = ()=> ( Swal({
    title: '請先登入',
    // text: '請先登入',
    icon: 'info',
    buttons: {
      ok:'立即登入',
      no: '稍後'
    },
  }).then(value=>{
      if(value=='ok'){
        showLoginBox()
        window.scrollTo(0, 0)
        // alert("立即登入")
      }
    }
  ))
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
        <div className="coursesListCard p-2">
          <NavLink
            to={`/coursesContent/${item.course_id}`}
            className="ListCardLink"
          >
            <figure className="listCardFigure m-auto">
              <img
                src={require(`../../../assets/images/courses/${item.my_file}`)}
                alt=""
                className="listCardImage"
              />
            </figure>
            <div className="listCardContent">
              <h5 className="text-center">
                {item.course_name.split('-')[0]}
                <br />
                {item.course_name.split('-')[1]}
              </h5>
            </div>
          </NavLink>
          <div className="listCardContent">
            <p className="m-0">
              {+date.getMonth() + 1}月{date.getDate()}日開課
            </p>
            <h6 className="d-inline-block ml-0 mr-2">會員價 NT{item.price}</h6>
            <a
              className={`coursesListHeart ${
                collectionArr
                  ? collectionArr.some(i => i.course === item.course_id)
                    ? 'active'
                    : ''
                  : ''
              }`}
              onClick={() => newADCollection()}
            >
              <i className="fas fa-heart mx-1"></i>
            </a>
            <a
              className={`coursesListCart ${
                courseCart
                  ? courseCart.some(i => i.course === item.course_id)
                    ? 'active'
                    : ''
                  : ''
              }`}
              onClick={() => newADCart()}
            >
              <i className="fas fa-shopping-cart mx-1"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesListCard

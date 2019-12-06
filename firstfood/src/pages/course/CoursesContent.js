import React from 'react'
import HeaderFooter from '../container/HeaderFooter'
import CoursesTitle from '../../components/main/coursesMain/CoursesTitle'
import CoursesContentMain from '../../components/main/coursesMain/CoursesContentMain'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  fetchSingleIfNeeded,
  cartAddCourse,
  cartDeleteCourse,
  collectionGetCourse,
  collectionAddCourse,
  collectionDeleteCourse,
  showLoginBox
} from '../../action'
import { getCourseData } from '../../action/MyCartaction/course'
import ReactLoading from 'react-loading'
import Mobile from '../../components/mobile/Mobile'

class CoursesContent extends React.Component {
  constructor(props) {
    super(props)
    this.itemId = this.props.item.course_id
    this.urlId = this.props.match.params.id
  }
  initialization = () => {
    this.props.fetchSingleIfNeeded('course', this.props.match.params.id)
    if (this.props.isLogin) {
      let { member, collection, courseCart } = this.props
      let customerId = member[0].customer_id
      // if (!courseCart) {
        this.props.getCourseData(customerId)
      // }
      if (!collection) {
        this.props.collectionGetCourse(customerId)
      }
    } else {
      console.log('No Login')
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    this.initialization()
    if (this.props.isLogin) {
      this.props.getCourseData(this.props.member[0].customer_id)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate', this.props.courseCart)
    this.initialization()
  }

  localAddCart = id => {
    //localstorage
    let oldCart = localStorage.courseCart
    if (!oldCart) {
      localStorage.setItem('courseCart', id)
    } else {
      const cartArr = oldCart.split(',').map(i => parseInt(i))
      if (cartArr.some(i => i == id)) {
        const newCart = cartArr.filter(i => i !== id)
        localStorage.setItem('courseCart', newCart)
      } else {
        localStorage.setItem('courseCart', [id, ...cartArr])
      }
    }
    let path = this.props.match.url
    this.props.history.push(path)
  }
  localAddCollection = id => {
    //localstorage
    let oldCollection = localStorage.courseCollection

    if (!oldCollection) {
      localStorage.setItem('courseCollection', id)
    } else {
      const collectionArr = oldCollection.split(',').map(i => parseInt(i))
      if (collectionArr.some(i => i == id)) {
        const newCollection = collectionArr.filter(i => i !== id)
        localStorage.setItem('courseCollection', newCollection)
      } else {
        localStorage.setItem('courseCollection', [id, ...collectionArr])
      }
    }
    //redirect
    let path = this.props.match.url
    this.props.history.push(path)
  }

  render() {
    return (
      <>
        <HeaderFooter location="課程">
          <div className="courses">
            <CoursesTitle {...this.props} />
            {this.props.isFetching ? (
              <ReactLoading type={'balls'} color="#000" />
            ) : this.props.item.course_id != this.props.match.params.id ? (
              <ReactLoading type={'balls'} color="#000" />
            ) : (
              <CoursesContentMain
                {...this.props}
                localAddCart={this.localAddCart}
                localAddCollection={this.localAddCollection}
                addCart={this.props.cartAddCourse}
                deleteCart={this.props.cartDeleteCourse}
              />
            )}
          </div>
        </HeaderFooter>
      </>
    )
  }
}

const mapStateToProps = store => {
  const { domainData, loginReducer, course } = store
  const { collection } = domainData['courses'] || {
    collection: undefined,
  }
  const { isFetching, item } = domainData['course'] || {
    isFetching: true,
    item: {},
  }
  const member = loginReducer['member'] || 0
  const isLogin = loginReducer['isLogin'] || false
  const courseCart = course || undefined
  return {
    item: item,
    isFetching,
    member,
    isLogin,
    courseCart: courseCart,
    collection: collection,
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchSingleIfNeeded,
      cartAddCourse,
      getCourseData,
      cartDeleteCourse,
      collectionGetCourse,
      collectionAddCourse,
      collectionDeleteCourse,
      showLoginBox,
    },
    dispatch
  )
export default connect(mapStateToProps, mapDispatchToProps)(CoursesContent)

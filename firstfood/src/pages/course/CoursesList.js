import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'

import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'

import {
  fetchIfNeeded,
  selectArea,
  selectDate,
  cartAddCourse,
  cartDeleteCourse,
  collectionGetCourse,
  collectionAddCourse,
  collectionDeleteCourse,
  showLoginBox,
} from '../../action/index'
import { getCourseData } from '../../action/MyCartaction/course'
import { SHOW_ALL, area } from '../../action/course/coursesActionType'

import HeaderFooter from '../container/HeaderFooter'
import ListFilter from '../../components/main/coursesMain/CoursesListFilter'
import CoursesTitle from '../../components/main/coursesMain/CoursesTitle'
import CoursesListCard from '../../components/main/coursesMain/CoursesListCard'
import Mobile from '../../components/mobile/Mobile'

const engine = new Styletron()
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})

class CoursesList extends React.Component {
  //初始建構
  constructor(props) {
    super(props)
    this.state = {}
  }

  initialization = () => {
    this.props.fetchIfNeeded('courses')
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

  //掛載後
  componentDidMount() {
    // console.log('courseListDM')
    this.initialization()
  }

  //更新後
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('courseListDU')
    this.initialization()
  }

  //卸載前
  componentWillUnmount() {
  }

  //渲染
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
    // console.log(this.props)
    return (
      <>
        <HeaderFooter location="課程">
          <div className="courses">
            <CoursesTitle {...this.props} />
            <StyletronProvider value={engine}>
              <BaseProvider theme={LightTheme}>
                <ListFilter {...this.props} />
                {this.props.isFetching ? (
                  <ReactLoading type={'balls'} color="#000"/>
                ) : (
                  <div className="row coursesList">
                    {this.props.items.map(item => (
                      <CoursesListCard
                        {...this.props}
                        key={item.course_id}
                        item={item}
                        localAddCart={this.localAddCart}
                        localAddCollection={this.localAddCollection}
                      />
                    ))}
                  </div>
                )}
              </BaseProvider>
            </StyletronProvider>
          </div>
        </HeaderFooter>
      </>
    )
  }
}

const areaF = (courses, filter, dateFilter) => {
  switch (filter.areaFilter) {
    case SHOW_ALL:
      return dateFilter(courses, filter)
    case area[filter.areaFilter]:
      let newList = courses.filter(
        c => c.roomAddress.slice(0, 3) == filter.areaFilter,
      )
      return dateFilter(newList, filter)
    default:
      throw new Error('Unknown filter: ' + filter.areaFilter)
  }
}
const dateF = (courses, filter) => {
  switch (filter.dateFilter) {
    case SHOW_ALL:
      return courses
    default:
      return courses.filter(c => {
        return new Date(c.course_date).getTime() == filter.dateFilter
      })
  }
}
const listFilter = (item, appState, cb1, cb2) => {
  return cb1(item, appState, cb2)
}
const mapStateToProps = store => {
  const { domainData, appState, loginReducer, course } = store
  const { collection } = domainData['courses'] || {
    collection: undefined,
  }
  const { isFetching, lastUpdated, items } = domainData['courses'] || {
    isFetching: true,
    items: [],
  }
  const { areaFilter, dateFilter } = appState['courses']
  const member = loginReducer['member'] || 0
  const isLogin = loginReducer['isLogin'] || false
  const courseCart = course || undefined
  return {
    items: listFilter(items, store.appState.courses, areaF, dateF),
    isFetching,
    lastUpdated,
    areaFilter,
    dateFilter,
    domainData: items,
    member,
    isLogin,
    courseCart,
    collection,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showLoginBox,
      fetchIfNeeded,
      selectArea,
      selectDate,
      getCourseData,
      cartAddCourse,
      cartDeleteCourse,
      collectionGetCourse,
      collectionAddCourse,
      collectionDeleteCourse,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(CoursesList)

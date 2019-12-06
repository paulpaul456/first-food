// Action Type
import {
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_SINGLE_DATA,
  INVALIDATE_DATA,
  SELECT_SUBTITLE,
  SELECT_TITLE,
  SET_AREA_FILTER,
  SET_DATE_FILTER,
  CART_ADD_COURSE,
  COLLECTION_ADD_COURSE,
} from './coursesActionType'

// Other Action
import { getCourseData } from '../MyCartaction/course'
import { getcidcartallnumA } from '../index'

// Action Creators
export const selectTitle = payload => ({
  type: SELECT_TITLE,
  payload,
})
export const selectSubtitle = payload => ({
  type: SELECT_SUBTITLE,
  payload,
})
export const invalidateTitle = payload => ({
  type: INVALIDATE_DATA,
  title: payload,
})
const requestPosts = payload => ({
  type: REQUEST_DATA,
  title: payload,
})

const receivePosts = (title, payload) => ({
  type: RECEIVE_DATA,
  title,
  data: payload,
  receivedAt: Date.now(),
})
const receiveSinglePosts = (title, payload) => ({
  type: RECEIVE_SINGLE_DATA,
  title,
  data: payload,
  receivedAt: Date.now(),
})
export const selectArea = payload => ({
  type: SET_AREA_FILTER,
  payload,
})
export const selectDate = payload => ({
  type: SET_DATE_FILTER,
  payload,
})

const cartAdd = payload => ({
  type: CART_ADD_COURSE,
  payload,
})

// Action
const fetchData = title => dispatch => {
  dispatch(requestPosts(title))
  return fetch(`http://localhost:6003/api/${title}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(title, json)))
}

const shouldFetch = (state, title) => {
  const fetch = state.domainData[title]
  if (!fetch) {
    return true
  }
  if (fetch.isFetching) {
    return false
  }
  return fetch.didInvalidate
}

export const fetchIfNeeded = title => (dispatch, getState) => {
  if (shouldFetch(getState(), title)) {
    return dispatch(fetchData(title))
  }
}

const fetchSingleData = (title, id) => dispatch => {
  dispatch(requestPosts(title))
  return fetch(`http://localhost:6003/api/courses/${id}`)
    .then(response => response.json())
    .then(json => dispatch(receiveSinglePosts(title, json)))
}
const shouldFetchSingle = (state, title, id) => {
  const fetch = state.domainData[title]
  if (!fetch) {
    return true
  }
  if (fetch.isFetching) {
    return false
  }
  if (fetch.item) {
    if (fetch.item.course_id != id) {
      return true
    }
  }
  return fetch.didInvalidate
}

export const fetchSingleIfNeeded = (title, id) => (dispatch, getState) => {
  if (shouldFetchSingle(getState(), title, id)) {
    return dispatch(fetchSingleData(title, id))
  }
}

export const cartAddCourse = (id, data,cb) => {
  return async (dispatch, getState) => {
    try {
      const responseFirst = await fetch(
        `http://localhost:6003/api/courses/cart/${id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!responseFirst.ok) throw new Error(responseFirst.statusText)

      const dataFirst = await responseFirst.json()

      const payloadFirst = dataFirst.product.cart_id
      const responseSecond = await fetch(
        `http://localhost:6003/api/courses/cart/${payloadFirst}`,
        {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            courseId: data.course_id,
            classroomId: data.room_sid,
          }),
        }
      )

      if (!responseSecond.ok) throw new Error(responseSecond.statusText)

      const dataSecond = await responseSecond.json()

      // const payloadSecond = dataSecond

      // dispatch(getCourseData())
      if (dataSecond.courseId.affectedRows === 1) {
        cb()
        dispatch(getcidcartallnumA(id))
      }
      // console.log('dataSecond', dataSecond.message== "CourseCart added.")
    } catch (e) {
      console.log(e)
    }
  }
}

export const cartDeleteCourse = (id, courseCartId ,cb) => {
  return async (dispatch, getState) => {
    try {
      const responseFirst = await fetch(
        `http://localhost:6003/api/courses/cart/${id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!responseFirst.ok) throw new Error(responseFirst.statusText)

      const dataFirst = await responseFirst.json()

      const payloadFirst = dataFirst.product.cart_id
      const responseSecond = await fetch(
        `http://localhost:6003/api/courses/cart/${courseCartId}`,
        {
          method: 'DELETE',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!responseSecond.ok) throw new Error(responseSecond.statusText)

      const dataSecond = await responseSecond.json()

      const payloadSecond = dataSecond

      // dispatch(getCourseData())
      if (dataSecond.affectedRows === 1) {
        cb()
        dispatch(getcidcartallnumA(id))
      }
      // console.log('dataSecond', dataSecond)
    } catch (e) {
      console.log(e)
    }
  }
}

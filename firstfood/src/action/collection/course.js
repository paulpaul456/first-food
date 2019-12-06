// Action Type
import {
  GET_COLLECTION,
  ADD_COLLECTION,
  DELETE_COLLECTION,
} from './collectionActionType'

// Other Action

// Action Creators
const getCourse = payload => ({
  type: GET_COLLECTION,
  title: 'courses',
  payload,
})

const addCollection = payload => ({
  type: ADD_COLLECTION,
  payload,
})
const deleteCollection = payload => ({
  type: DELETE_COLLECTION,
  payload,
})
// Action

export const collectionGetCourse = customerId => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/collection/courses/${customerId}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = data

      dispatch(getCourse(payload))

      // console.log('CourseCollectionActionPayload', payload)
    } catch (e) {
      console.log(e)
    }
  }
}

export const collectionAddCourse = (customerId, data,cb) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/collection/courses/${customerId}`,
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

      if (!response.ok) throw new Error(response.statusText)

      const payload = await response.json()

      if (payload.collection.affectedRows > 0) {
        cb()
      }
      dispatch(collectionGetCourse(customerId))

      // const payloadSecond = dataSecond

      // dispatch(getCourseData())

      // console.log('data', payload)
    } catch (e) {
      console.log(e)
    }
  }
}

export const collectionDeleteCourse = (customerId, courseCartId,cb) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/collection/courses/${customerId}/${courseCartId}`,
        {
          method: 'DELETE',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payloadSecond = data

      // dispatch(getCourseData())
      if (data.collection.affectedRows > 0 ) {
        cb()
      }
      dispatch(collectionGetCourse(customerId))

      // console.log('data', data)
    } catch (e) {
      console.log(e)
    }
  }
}

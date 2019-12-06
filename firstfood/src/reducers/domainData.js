import {
  RECEIVE_DATA,
  REQUEST_DATA,
  INVALIDATE_DATA,
  RECEIVE_SINGLE_DATA,
  GET_COLLECTION,
} from '../action/actionType'

const fetchData = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    item: {},
  },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return { ...state, isFetching: true, didInvalidate: false }
    case RECEIVE_DATA:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.data,
      }
    case INVALIDATE_DATA:
      return { ...state, didInvalidate: true }
    case RECEIVE_SINGLE_DATA:
      // console.log(action.data)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        item: action.data.product,
      }
    case GET_COLLECTION:
      return {
        ...state,
        collection: action.payload,
      }
    default:
      return state
  }
}

const DomainData = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
    case RECEIVE_DATA:
    case RECEIVE_SINGLE_DATA:
    case INVALIDATE_DATA:
    case GET_COLLECTION:
      return {
        ...state,
        [action.title]: fetchData(state[action.title], action),
      }
    default:
      return state
  }
}
export default DomainData

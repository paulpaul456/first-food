// Action Type
import { GET_COLLECTION } from './collectionActionType'

// Other Action

// Action Creators
const getDinnerProduct = payload => ({
  type: GET_COLLECTION,
  title: 'dinnerProducts',
  payload,
})

// Action

export const getDinnerProductCollection = customerId => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/collection/dinnerProducts/${customerId}`,
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

      dispatch(getDinnerProduct(payload))

      // console.log('payload', payload)
    } catch (e) {
      console.log(e)
    }
  }
}

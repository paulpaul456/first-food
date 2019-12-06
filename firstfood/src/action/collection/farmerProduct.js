// Action Type
import { GET_COLLECTION } from './collectionActionType'

// Other Action

// Action Creators
const getFarmerProduct = payload => ({
  type: GET_COLLECTION,
  title: 'farmerProducts',
  payload,
})

// Action

export const getFarmerProductCollection = customerId => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/collection/farmerProducts/${customerId}`,
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

      dispatch(getFarmerProduct(payload))

      console.log('payload', payload)
    } catch (e) {
      console.log(e)
    }
  }
}

import { LOAD_PRODUCT } from './actionType'

export const loadProduct = payload => ({ type: LOAD_PRODUCT, payload })

export const loadProductAsync = () => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:6003/api/farmerProducts`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const data = await response.json()

      const payload = { data }

      dispatch(loadProduct(payload))

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}

export const loadProductByIDAsync = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/${id}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)

      console.log('response' + response)

      const data = await response.json()

      const payload = { data, id: id }

      console.log('aaa' + payload.id)

      dispatch(loadProduct(payload))

      console.log('loading single data' + payload)

      console.log('loading single data')
    } catch (e) {
      console.log(e)
    }
  }
}

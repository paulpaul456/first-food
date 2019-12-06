import { ADD_LOVE } from './actionType'

// export const addLove = payload => ({ type: ADD_LOVE, payload })


// export const addLoveAsync = (goodsid, customer_id) => {
//     let params = {
//         goodsid: goodsid,
//         customer_id: customer_id,
//       }

//     console.log(params)
//   return async dispatch => {
//     try {
//       const response = await fetch(`http://localhost:6003/api/goods/addlove`, {
//         method: 'POST',
//         body: JSON.stringify(params),
//         headers: new Headers({
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         }),
//       })

//       if (!response.ok) throw new Error(response.statusText)

//       const data = await response.json()

//       const payload = {
//         data: data,
//         goodsid: goodsid,
//         customer_id: customer_id,
//       }

//       dispatch(addLove(payload))

//       console.log('loading data')
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }


// export const loadProductAsync = () => {
//   return async dispatch => {
//     try {
//       const response = await fetch(`http://localhost:6003/api/farmerProducts`, {
//         method: 'GET',
//         headers: new Headers({
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         }),
//       })

//       if (!response.ok) throw new Error(response.statusText)

//       const data = await response.json()

//       const payload = { data }

//       dispatch(loadProduct(payload))

//       console.log('loading data')
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }

// export const loadProductByIDAsync = id => {
//   return async dispatch => {
//     try {
//       const response = await fetch(
//         `http://localhost:6003/api/farmerProducts/${id}`,
//         {
//           method: 'GET',
//           headers: new Headers({
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           }),
//         }
//       )

//       if (!response.ok) throw new Error(response.statusText)

//       console.log('response'+ response)

//       const data = await response.json()

//       const payload = { data, id: id }

//       console.log('aaa'+ payload.id)

//       dispatch(loadProduct(payload))

//       console.log('loading single data' + payload)

//       console.log('loading single data')
//     } catch (e) {
//       console.log(e)
//     }
//   }
// }

// Action Type
import { UPDATE_RESERVATION_TO_CART } from './reservationActionType'
import {readCartsBeforeBookAsync} from '../restaurantAction'
// Other Action

// Action Creators
const updateReservationActionCreator = payload => ({
  type: UPDATE_RESERVATION_TO_CART,
  payload,
})

// Action

export const updateReservationToCart = (customerId, data, cb) => {
  return async (dispatch, getState) => {
    console.log('updateReservationToCart', customerId, data)
    try {
      const response = await fetch(
        `http://localhost:6003/api/restaurants/updatecart/${customerId}`,
        {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({
            cartId: data.cartId,
            bookWeekday: data.bookWeekday,
            bookTime: data.bookTime,
            bookPerson: data.bookPerson,
          }),
        },
      )

      if (!response.ok) throw new Error(response.statusText)

      const responseData = await response.json()
      if (responseData.status == 200) {
        dispatch(readCartsBeforeBookAsync(customerId))
        cb()
        // alert('加入購物中成功!!')
      }
      console.log('data', responseData)
    } catch (e) {
      console.log(e)
    }
  }
}

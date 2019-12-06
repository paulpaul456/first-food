import {
  CHECK_LOGIN,
  IS_LOGIN,
  SHOW_ERROR,
  MEMBER_REGISTER,
  MEMBER_LOGOUT,
  CLOSE_ERROR,
  SHOW_LOGIN_BOX,
  CLOSE_LOGIN_BOX,
  INITIAL_MEMBER_CHECK,
  LOAD_CID_CART_NUM,
} from './actionType'
//import { SAVE_INPUT_VALUE } from './actionType'

//session 版 login
export const checkLogin = (username, password, callback) => {
  console.log(username + ' ' + password)
  const data = {
    username: username,
    password: password,
  }
  return function(dispatch) {
    console.log('---0')
    fetch(`http://localhost:6003/members/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        // console.log(response)
        console.log('---1')
        return response.json()
      })
      .then(jsonObj => {
        console.log('---2', jsonObj)
        // console.log(!!jsonObj.length)
        console.log(jsonObj.length)
        let cid = 0
        // console.log('3333333333')
        // console.log(jsonObj[0].customer_id)
        console.log('3333333333')
        console.log(cid)
        dispatch({
          type: CHECK_LOGIN,
          payload: jsonObj,
        })
        if (jsonObj.length) {
          cid = jsonObj[0].customer_id
          callback()
          dispatch(isLogin())
          dispatch(closeLoginBox())
          dispatch(getcidcartallnumA(cid))
        } else {
          dispatch(showError())
        }
      })
      .catch(error => {
        return console.log(error)
      })
  }
}

export const getcidcartallnum = payload => ({
  type: LOAD_CID_CART_NUM,
  payload,
})
export const getcidcartallnumA = cid => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:6003/api/farmerProducts/cidcart/${cid}`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
        }
      )

      if (!response.ok) throw new Error(response.statusText)
      console.log('res')
      let qqpp = 0
      let qqpp1 = 0
      let qqpp2 = 0
      let qqpp3 = 0
      const data = await response.json()
      // console.log('w00w00ww')
      // console.log(data)
      // console.log('w11w11ww')
      // console.log(data.ccbell)
      // console.log('w11w22ww')
      // console.log(data.ccbell[0].things)
      qqpp1 = data.ccbell[0].things || 0
      qqpp2 = data.dnbell[0].things || 0
      qqpp3 = data.fmbell[0].things || 0
      qqpp = qqpp1 + qqpp2 + qqpp3
      console.log('qqpp')
      console.log(qqpp)
      const payload = qqpp
      console.log('mmmmmm')
      dispatch(getcidcartallnum(payload))
      console.log('wwwwww')

      console.log('loading data')
    } catch (e) {
      console.log(e)
    }
  }
}
// export const checkLogin = (username, password) => {
//   console.log(username + ' ' + password)
//   return function(dispatch) {
//     fetch(`http://localhost:6004/members/login/${username}/${password}`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => {
//         // console.log(response)
//         return response.json()
//       })
//       .then(jsonObj => {
//         // console.log(!!jsonObj.length)
//         dispatch({
//           type: CHECK_LOGIN,
//           payload: jsonObj,
//         })
//         if (jsonObj.length) {
//           dispatch(isLogin())
//           dispatch(closeLoginBox())
//         } else {
//           dispatch(showError())
//         }
//       })
//       .catch(error => {
//         return console.log(error)
//       })
//   }
// }

export const memberRegister = (username, email, password, callback) => {
  const data = {
    name: username,
    email: email,
    password: password,
  }
  return function(dispatch) {
    fetch('http://localhost:6003/members/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        if (jsonObj.affectedRows) {
          callback()
          dispatch({
            type: MEMBER_REGISTER,
            payload: '註冊成功!',
          })
          dispatch(addCart(jsonObj.insertId))
        }
      })
  }
}

// export const saveInputValue = (userInput, passInput) => {
//   return {
//     type: SAVE_INPUT_VALUE,
//     payload: {
//       userInput: userInput,
//       passInput: passInput,
//     },
//   }
// }

export const isLogin = () => {
  return {
    type: IS_LOGIN,
  }
}

export const memberLogout = () => {
  return function(dispatch) {
    fetch('http://localhost:6003/members/clearMemberSession', {
      credentials: 'include',
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: MEMBER_LOGOUT,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const showError = () => {
  return {
    type: SHOW_ERROR,
  }
}

export const closeError = () => {
  return {
    type: CLOSE_ERROR,
  }
}

// export const changeText = (obj, item, value) => {
//   let list = item
//   return function(dispatch) {
//     obj[list] = value
//     let data = obj
//     dispatch({
//       type: 'TEXT_UPDATE',
//       paload: data,
//     })

// export const updateMemberDataAction = (customer_id, data = {}) => {
//   console.log('updateMemberDataAction' + customer_id, data)
//   return function(dispatch) {
//     fetch(`http://localhost:6004/members/detail/${customer_id}`, {
//       method: 'PUT',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(jsonObj => {
//         dispatch({
//           type: 'UPDATE_MEMBER_DATA',
//           payload: jsonObj,
//         })
//       })
//   }
// }

export const showLoginBox = () => {
  return {
    type: SHOW_LOGIN_BOX,
  }
}

export const closeLoginBox = () => {
  return {
    type: CLOSE_LOGIN_BOX,
  }
}

export const initialMemberCheck = () => {
  return function(dispatch) {
    fetch('http://localhost:6003/members/initialCheck', {
      credentials: 'include',
    })
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        // console.log(jsonObj[0])
        dispatch({
          type: INITIAL_MEMBER_CHECK,
          payload: jsonObj,
        })
        if (jsonObj[0] !== null) {
          dispatch(isLogin())
        }
      })
  }
}

//新增購物車
export const addCart = customer_id => {
  console.log(customer_id)
  const data = {
    customer_information: customer_id,
  }
  return function(dispatch) {
    fetch('http://localhost:6003/members/addCart', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: 'ADD_CART',
          payload: jsonObj,
        })
      })
  }
}

//寄信密碼
export const sendPasswordEmail = (member_email, callback) => {
  const data = {
    member_email: member_email,
  }
  return function(dispatch) {
    fetch('http://localhost:6003/members/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: 'SEND_PASSWORD_EMAIL',
          payload: jsonObj,
        })
        console.log(jsonObj)
        if (jsonObj.status === '202') {
          callback()
        }
      })
  }
}

// export const addCart = addressObj => {
//   console.log(addressObj)
//   return function(dispatch) {
//     fetch('http://localhost:6003/members/addressAdd', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(addressObj),
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(jsonObj => {
//         console.log(jsonObj)
//         dispatch({
//           type: 'ADD_ADDRESS',
//         })
//         if (jsonObj.affectedRows) {
//           dispatch(getAddress(addressObj.customer_information))
//           // callback()
//         }
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// 清空鈴鐺佔個位
export const clearidcartz = payload => ({ type: LOAD_CID_CART_NUM, payload })

export const clearidcartzs = () => {
  console.log('1111111111111111111')
  return function(dispatch) {
    fetch('http://localhost:6003/farmerProducts/clearCidCart', {
      credentials: 'include',
    })
      .then(response => {
        console.log('11111111111112222222222')
        console.log(response)
        // return response.json()
      })
      .then(jsonObj => {
        console.log('poiyiouty')
        let arrayclean = []
        dispatch({
          type: LOAD_CID_CART_NUM,
          payload: arrayclean,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

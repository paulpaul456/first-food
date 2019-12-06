import {
  GET_SINGLE_MEMBER_DATA,
  UPDATE_MEMBER_DATA,
  CHANGE_MEMBER_TEXT,
  RE_CHANGE_PASSWORD,
} from './actionType'

import { loadProductByIDAsync } from '../action/farmerproduct'

export const fetchMemberDataAction = () => {
  console.log('memberAction')
  return function(dispatch) {
    fetch('http://localhost:6003/members')
      .then(response => {
        // console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: GET_SINGLE_MEMBER_DATA,
          payload: jsonObj,
        })
      })
  }
}

export const updateMemberDataAction = (
  customer_id,
  data = {},
  my_file,
  callback
) => {
  console.log('updateMemberDataAction' + customer_id, data)
  let data1 = {
    ...data,
    my_file: my_file,
  }
  return function(dispatch) {
    fetch(`http://localhost:6003/members/detail/${customer_id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data1),
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: UPDATE_MEMBER_DATA,
          payload: jsonObj,
        })
        if (jsonObj.affectedRows) {
          callback()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const changeText = (obj, name, value) => {
  let list = name
  return function(dispatch) {
    obj[list] = value
    let data = []
    data.push(obj)
    console.log('changeTextAction', data)
    // dispatch({ type: 'MEMBER_CHANGE_TEXT', payload: data })
    dispatch({ type: CHANGE_MEMBER_TEXT, payload: data })
  }
}

export const changeAddress = (obj, name, value, index, addressArray) => {
  let list = name
  return function(dispatch) {
    obj[list] = value
    // let data = addressArray
    console.log(addressArray)

    // function removeByIndex(arr, index) {
    //   for (let i = 0; i < arr.length; i) {
    //     if (i == index) {
    //       arr.splice(i, 1, obj)
    //       break
    //     }
    //   }
    // }

    // let data = removeByIndex(addressArray, index)
    // console.log('changeAddressAction', data)

    // data.push(obj)
    // console.log('changeAddressAction', data)
    // // dispatch({ type: 'MEMBER_CHANGE_TEXT', payload: data })
    dispatch({ type: 'CHANGE_ADDRESS_TEXT', payload: addressArray })
  }
}

export const changePassword = (customer_id, newPassword) => {
  const data = {
    customer_id: customer_id,
    newPassword: newPassword,
  }
  console.log(data)
  return function(dispatch) {
    fetch('http://localhost:6003/members/changePassword', {
      method: 'PUT',
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
        console.log(jsonObj)
        if (jsonObj.affectedRows) {
          dispatch(reChangePassword(newPassword))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const reChangePassword = newPassword => {
  return {
    type: RE_CHANGE_PASSWORD,
    payload: newPassword,
  }
}

export const getCoupon = customer_id => {
  return function(dispatch) {
    fetch(`http://localhost:6003/members/coupon/${customer_id}`)
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'GET_COUPON',
          payload: jsonObj,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const getAddress = customer_id => {
  return function(dispatch) {
    fetch(`http://localhost:6003/members/address/${customer_id}`)
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'GET_ADDRESS',
          payload: jsonObj,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const editAddress = (addressObj, callback) => {
  // const data = {
  //   address_change_id: addressObj.address_change_id,
  //   nickname: addressObj.nickname,
  //   receiver: addressObj.receiver,
  //   phone: addressObj.phone,
  //   address: addressObj.address,
  // }
  console.log(addressObj)
  const data = addressObj
  return function(dispatch) {
    fetch('http://localhost:6003/members/addressEdit', {
      method: 'PUT',
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
        if (jsonObj.affectedRows) {
          callback()
        }
        console.log(jsonObj)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
// export const editAddress = (
//   address_change_id,
//   nickname = null,
//   receiver = null,
//   phone = null,
//   address = null
// ) => {
//   const data = {
//     address_change_id: address_change_id,
//     nickname: nickname,
//     receiver: receiver,
//     phone: phone,
//     address: address,
//   }
//   return function(dispatch) {
//     fetch('http://localhost:6003/members/addressEdit', {
//       method: 'PUT',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(jsonObj => {
//         console.log(jsonObj)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

export const deleteAddress = (address_change_id, customer_id) => {
  console.log(address_change_id)
  return function(dispatch) {
    fetch(`http://localhost:6003/members/addressDelete/${address_change_id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'DELETE_ADDRESS',
          payload: jsonObj,
        })
        if (jsonObj.affectedRows) {
          dispatch(getAddress(customer_id))
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const addAddress = addressObj => {
  console.log(addressObj)
  return function(dispatch) {
    fetch('http://localhost:6003/members/addressAdd', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addressObj),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'ADD_ADDRESS',
        })
        if (jsonObj.affectedRows) {
          dispatch(getAddress(addressObj.customer_information))
          // callback()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//上傳圖檔
export const uploadPhoto = formData => {
  console.log(formData)
  return function(dispatch) {
    fetch('http://localhost:6003/members/upload', {
      method: 'POST',
      headers: {
        // enctype: 'multipart/form-data',
        // 'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        console.log(jsonObj.originalname)
        dispatch({
          type: 'UPLOAD_PHOTO',
          payload: jsonObj.originalname,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//新增優惠卷
export const slotGetCoupon = (customer_information, coupon_type, callback) => {
  console.log(customer_information, coupon_type)
  const data = {
    customer_information: customer_information,
    pm_event: coupon_type,
  }
  console.log(data)
  return function(dispatch) {
    fetch('http://localhost:6003/members/earnCoupon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'EARN_COUPON',
          payload: jsonObj,
        })
        if (jsonObj.affectedRows) {
          dispatch(getCoupon(customer_information))
          callback()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//讀取收藏
export const getMemberCollection = customerId => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/collection/farmerProducts/${customerId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'GET_MEMBER_COLLECTION',
          payload: jsonObj,
        })
        if (jsonObj.message === 'Collection found.') {
          console.log('Collection found.')
          let F_P_ID_array = jsonObj.collection.map(item => {
            return item.farmer_product
          })
          console.log(F_P_ID_array)
          for (let i = 0; i < F_P_ID_array.length; i++) {
            console.log(F_P_ID_array[i])
            dispatch(loadProductByIDAsyncMember(F_P_ID_array[i]))
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//getFarmerProduct
export const loadProductByIDAsyncMember = id => {
  return function(dispatch) {
    fetch(`http://localhost:6003/members/farmerProduct/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj[0])
        dispatch({
          type: 'LOAD_MEMBER_PRODUCT',
          payload: jsonObj[0],
        })
        if (jsonObj.length) {
          dispatch({
            type: 'CLEAR_EXCEPT_FARMER',
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//讀取課程收藏
export const getCourseCollection = customerId => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/collection/courses/${customerId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'GET_COURSE_COLLECTION',
          payload: jsonObj,
        })
        if (jsonObj.message === 'Collection found.') {
          console.log('Collection found.')
          let F_C_ID_array = jsonObj.collection.map(item => {
            return item.course
          })
          console.log(F_C_ID_array)
          for (let i = 0; i < F_C_ID_array.length; i++) {
            console.log(F_C_ID_array[i])
            dispatch(loadCourseByIDAsyncMember(F_C_ID_array[i]))
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//getCourseProduct
export const loadCourseByIDAsyncMember = id => {
  console.log(id)
  return function(dispatch) {
    fetch(`http://localhost:6003/members/course/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj[0])
        dispatch({
          type: 'LOAD_COURSE_PRODUCT',
          payload: jsonObj[0],
        })
        if (jsonObj.length) {
          dispatch({
            type: 'CLEAR_EXCEPT_COURSES',
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//讀取菜色收藏
export const getDinnerCollection = customerId => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/collection/dinnerProducts/${customerId}`, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'GET_DINNER_COLLECTION',
          payload: jsonObj,
        })
        if (jsonObj.message === 'Collection found.') {
          console.log('Collection found.')
          let F_D_ID_array = jsonObj.collection.map(item => {
            return item.dinner_list
          })
          console.log(F_D_ID_array)
          for (let i = 0; i < F_D_ID_array.length; i++) {
            console.log(F_D_ID_array[i])
            dispatch(loadDinnerByIDAsyncMember(F_D_ID_array[i]))
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//getDinnerProduct
export const loadDinnerByIDAsyncMember = id => {
  console.log(id)
  return function(dispatch) {
    fetch(`http://localhost:6003/members/dinnerProduct/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(jsonObj => {
        console.log(jsonObj)
        dispatch({
          type: 'LOAD_DINNER_PRODUCT',
          payload: jsonObj,
        })
        if (jsonObj.length) {
          dispatch({
            type: 'CLEAR_EXCEPT_DINNER',
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//拿取遊戲角色資訊
export const getGameUserInfo = customer_id => {
  return function(dispatch) {
    fetch(`http://localhost:6003/members/gameUser/${customer_id}`)
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: 'GET_GAME_USER_INFO',
          payload: jsonObj,
        })
        console.log(jsonObj)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

//增加遊戲角色血量
export const upgradeGameUserHp = (
  peoplehp_sid,
  hp,
  upgrade_point,
  callback
) => {
  const data = {
    peoplehp_sid: peoplehp_sid,
    hp: hp + 100,
    upgrade_point: upgrade_point - 1,
  }
  console.log(data)
  return function(dispatch) {
    fetch('http://localhost:6003/members/gameHp', {
      method: 'PUT',
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
          type: 'UPGRADE_GAME_USER_HP',
          payload: jsonObj,
        })
        console.log(jsonObj)
        if (jsonObj.affectedRows) {
          console.log('getGameUserInfo')
          callback()
        }
      })
  }
}

//增加遊戲角色魔力
export const upgradeGameUserMp = (
  peoplehp_sid,
  mp,
  upgrade_point,
  callback
) => {
  const data = {
    peoplehp_sid: peoplehp_sid,
    mp: mp + 100,
    upgrade_point: upgrade_point - 1,
  }
  console.log(data)
  return function(dispatch) {
    fetch('http://localhost:6003/members/gameMp', {
      method: 'PUT',
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
          type: 'UPGRADE_GAME_USER_MP',
          payload: jsonObj,
        })
        console.log(jsonObj)
        if (jsonObj.affectedRows) {
          console.log('getGameUserInfo')
          callback()
        }
      })
  }
}

//控制升級點數
// export const upgradeGamePoint = (peoplehp_sid, upgrade_point) => {
//   const data = {
//     peoplehp_sid: peoplehp_sid,
//     upgrade_point: upgrade_point - 1,
//   }
//   console.log(data)
//   return function(dispatch) {
//     fetch('http://localhost:6003/members/gameUpgradePoint', {
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
//           type: 'UPGRADE_GAME_POINT',
//           payload: jsonObj,
//         })
//         console.log(jsonObj)
//         if (jsonObj.affectedRows) {
//           console.log('getGamePoint')
//           // callback()
//         }
//       })
//   }
// }

// //拿取遊戲角色資訊
// export const getGameUserInfo = (customer_id, callback) => {
//   return function(dispatch) {
//     fetch(`http://localhost:6003/members/gameUser/${customer_id}`)
//       .then(response => {
//         return response.json()
//       })
//       .then(jsonObj => {
//         dispatch({
//           type: 'GET_GAME_USER_INFO',
//           payload: jsonObj,
//         })
//         console.log(jsonObj)
//         if (jsonObj.length) {
//           callback()
//         }
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// export const uploadPhoto = formData => {
//   console.log(formData)
//   return function(dispatch) {
//     fetch('http://localhost:6003/members/upload', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => {
//         return response.json()
//       })
//       .then(jsonObj => {
//         console.log(jsonObj)
//         dispatch({
//           type: 'UPLOAD_PHOTO',
//           payload: jsonObj,
//         })
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }
// }

// handleUpload = (e) => {
//   e.preventDefault();

//     let file = e.target.files[0];
//     const formdata = new FormData();
//     formdata.append('file', file);

//     for (var value of formdata.values()) {
//         console.log(value);
//     }

//     const url = 'http://127.0.0.1:8080/file/upload';
//     fetch(url, {
//         method: 'POST',
//         body: formdata,
//         headers: {
//             "Content-Type": "multipart/form-data"
//         }
//     }).then(response => return response.json();)
//       .catch(error => console.log(error));
// };

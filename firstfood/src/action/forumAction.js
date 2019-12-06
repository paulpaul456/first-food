import {
  LOAD_FORUM,
  LOAD_FORUM_CATS_NEWER,
  LOAD_ARTICLES_BY_CLASS,
  LOAD_FORUM_CLASS,
  LOAD_ARTICLE_BY_ID,
  GET_FORUM,
  LOAD_MSG_BY_ID,
  GET_COLLECTION,
  GET_GOOD,
  GET_MESSAGE_COUNT,
  GET_ADDFORUM_BROWSE,
  ADD_COLLECTION_CNT,
  INSERT_MESSAGE,
  INSERT_ARTICLE,
  UPLOAD_ARTICLE_IMG,
} from './actionType'

export const loadForum = payload => ({ type: LOAD_FORUM, payload })
export const loadCatsNewer = payload => ({
  type: LOAD_FORUM_CATS_NEWER,
  payload,
})

export const loadForumAsync = () => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/forum_cats`, {
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
        dispatch({
          type: LOAD_FORUM,
          payload: jsonObj,
        })
      })
  }
}

export const getCatsNewer = () => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getCatsNewer`, {
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
        dispatch({
          type: LOAD_FORUM_CATS_NEWER,
          payload: jsonObj,
        })
      })
  }
}

export const getForum = () => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getForum`, {
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
        dispatch({
          type: GET_FORUM,
          payload: jsonObj,
        })
      })
  }
}

export const getForumClass = (forumClass, data = {}) => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getForumClass/${forumClass}`, {
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
        dispatch({
          type: LOAD_FORUM_CLASS,
          payload: jsonObj,
        })
      })
  }
}
export const getCollectionByCustomerId = (customerId, forumId, type) => {
  const data = {
    customer_id: customerId,
    forum_id: forumId,
    collect_good_Type: type,
  }
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getCollectionByCustomerId`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        if (type === 'collect') {
          dispatch({
            type: GET_COLLECTION,
            payload: jsonObj,
          })
        } else {
          dispatch({
            type: GET_GOOD,
            payload: jsonObj,
          })
        }
      })
  }
}

export const addCollectionByForumId = (
  customerId,
  forumId,
  collect_good_Type
) => {
  const data = {
    customer_id: customerId,
    forum_id: forumId,
    collect_good_Type: collect_good_Type,
  }
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/addCollectionByForumId`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: ADD_COLLECTION_CNT,
          payload: jsonObj,
        })
      })
  }
}

export const insertMessage = (messageContent, forumId, customerId) => {
  const data = {
    customer_id: customerId,
    forum_id: forumId,
    messageContent: messageContent,
  }
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/insertMessage`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: INSERT_MESSAGE,
          payload: jsonObj,
        })
      })
  }
}

export const subCollectionByForumId = (
  customerId,
  forumId,
  collect_good_Type
) => {
  const data = {
    customer_id: customerId,
    forum_id: forumId,
    collect_good_Type: collect_good_Type,
  }
  return function(dispatch) {
    console.log(data)
    fetch(`http://localhost:6003/api/forum/subCollectionByForumId`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: ADD_COLLECTION_CNT,
          payload: jsonObj,
        })
      })
  }
}

export const getMsgByForumId = (forumId, data = {}) => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getMsgByForumId/${forumId}`, {
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
        dispatch({
          type: LOAD_MSG_BY_ID,
          payload: jsonObj,
        })
      })
  }
}

export const getArticleById = (artId, data = {}) => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getArticleById/${artId}`, {
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
        dispatch({
          type: LOAD_ARTICLE_BY_ID,
          payload: jsonObj,
        })
      })
  }
}

export const getArticlesByForumClass = (forumClass, data = {}) => {
  return function(dispatch) {
    fetch(
      `http://localhost:6003/api/forum/getArticlesByForumClass/${forumClass}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: LOAD_ARTICLES_BY_CLASS,
          payload: jsonObj,
        })
      })
  }
}

export const getMessageCntByForumId = (forumId, data = {}) => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/getMessageCntByForumId/${forumId}`, {
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
        dispatch({
          type: GET_MESSAGE_COUNT,
          payload: jsonObj,
        })
      })
  }
}

export const addforumBrowseByForumId = (forumId, data = {}) => {
  return function(dispatch) {
    fetch(
      `http://localhost:6003/api/forum/addforumBrowseByForumId/${forumId}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: GET_ADDFORUM_BROWSE,
          payload: jsonObj,
        })
      })
  }
}

export const insertArticle = (
  forumTitle,
  forumClass,
  forumType,
  forumContent,
  createUser,
  forumImage
) => {
  const data = {
    forum_title: forumTitle,
    forum_class: forumClass,
    forum_type: forumType,
    forum_content: forumContent,
    create_user: createUser,
    forum_image: forumImage,
  }
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/insertArticle`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json()
      })
      .then(jsonObj => {
        dispatch({
          type: INSERT_ARTICLE,
          payload: jsonObj,
        })
      })
  }
}

export const uploadPhoto = (customerId, formData) => {
  return function(dispatch) {
    fetch(`http://localhost:6003/api/forum/upload_img/${customerId}`, {
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
          type: UPLOAD_ARTICLE_IMG,
          payload: jsonObj.originalname,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

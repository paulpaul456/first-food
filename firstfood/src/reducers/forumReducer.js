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
  ADD_COLLECTION_CNT,
  INSERT_MESSAGE,
  INSERT_ARTICLE,
} from '../action/actionType'

const initialState = {
  forumCats: [],
  forumContentNewer: [],
  articles: [],
  forumClass: {},
  article: {},
  forum: [],
  messages: [],
  isGood: { result: false },
  isCollect: { result: false },
  messageCnt: {},
  addCollectionCnt: {},
  isInsertMsg: [],
  insertArticle: {},
}

const forumReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FORUM_CATS_NEWER:
      return {
        ...state,
        forumContentNewer: action.payload,
      }
    case LOAD_FORUM:
      return {
        ...state,
        forumCats: action.payload,
      }
    case LOAD_ARTICLES_BY_CLASS:
      return {
        ...state,
        articles: action.payload,
      }
    case LOAD_FORUM_CLASS:
      return {
        ...state,
        forumClass: action.payload,
      }
    case LOAD_ARTICLE_BY_ID:
      return {
        ...state,
        article: action.payload,
      }
    case GET_FORUM:
      return {
        ...state,
        forum: action.payload,
      }
    case LOAD_MSG_BY_ID:
      return {
        ...state,
        messages: action.payload,
      }
    case GET_COLLECTION:
      return {
        ...state,
        isCollect: action.payload,
      }
    case GET_GOOD:
      return {
        ...state,
        isGood: action.payload,
      }
    case GET_MESSAGE_COUNT:
      return {
        ...state,
        messageCnt: action.payload,
      }
    case ADD_COLLECTION_CNT:
      return {
        ...state,
        addCollectionCnt: action.payload,
      }
    case INSERT_MESSAGE:
      return {
        ...state,
        messages: action.payload,
      }
    case INSERT_ARTICLE:
      return {
        ...state,
        insertArticle: action.payload,
      }
    default:
      return state
  }
}

export default forumReducer

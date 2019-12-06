// import

import { PREV_PATH } from './actionType'

export const prev_pathAsync = prevpath => {
  try {
    return {
      type: PREV_PATH,
      prevpath,
    }
  } catch (e) {
    console.log(e)
  }
}

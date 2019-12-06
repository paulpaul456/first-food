const initialState = {
  memberData: [],
}

const changeTextReducer = (state = initialState, action) => {
  console.log('memberReducer')
  switch (action.type) {
    case 'TEXT_CHANGE':
      return {
        ...state,
        memberData: action.payload,
      }
    default:
      return state
  }
}

export default changeTextReducer

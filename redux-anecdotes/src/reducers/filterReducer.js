const reducer = (state = { content: '' }, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const actionSetFilter = (content) => {
  return {
    type: 'SET_FILTER',
    payload: {
      content
    }
  }
}

export default reducer

import { createSlice } from '@reduxjs/toolkit'

/*const reducer = (state = { content: '' }, action) => {
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
}*/

const filterSlice = createSlice({
  name: 'filter',
  initialState: { content: '' },
  reducers: {
    actionSetFilter(state, action) {
      console.log(state, action)
      return action.payload
    }
  }
})

export const { actionSetFilter } = filterSlice.actions
export default filterSlice.reducer

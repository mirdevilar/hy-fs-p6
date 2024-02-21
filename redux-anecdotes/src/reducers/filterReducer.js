import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'filter',
  initialState: { content: '' },
  reducers: {
    actionSetFilter(state, action) {
      return action.payload
    }
  }
})

export const { actionSetFilter } = slice.actions
export default slice.reducer

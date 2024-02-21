import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: { content: '' },
  reducers: {
    actionSetFilter(state, action) {
      return action.payload
    }
  }
})

export const { actionSetFilter } = filterSlice.actions
export default filterSlice.reducer

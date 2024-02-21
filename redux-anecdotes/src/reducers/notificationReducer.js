import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'notification',
  initialState: {/* content: 'test' */},
  reducers: {
    actionSetNotification(state, action) {
      return action.payload
    },
    actionResetNotification(state, action) {
      return {}
    }
  }
})

export const { actionSetNotification, actionResetNotification } = slice.actions
export default slice.reducer

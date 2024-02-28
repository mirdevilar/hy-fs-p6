import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'notification',
  initialState: {/* content: 'test' */},
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    resetNotification() {
      return {}
    }
  }
})

export const actionShowNotification = (content, seconds) => {
  return (dispatch) => {
    dispatch(setNotification({ content }))
    setTimeout(() => {
      dispatch(resetNotification())
    }, seconds * 1000)
  }
}

export const { setNotification, resetNotification } = slice.actions
export default slice.reducer

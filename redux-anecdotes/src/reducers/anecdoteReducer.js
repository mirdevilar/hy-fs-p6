import { createSlice } from '@reduxjs/toolkit'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: generateId(),
    votes: 0
  }
}

const slice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    actionVote(state, action) {
      return state.map(a => a.id === action.payload.id ?
        { ...a, votes: a.votes + 1 } :
        a
      )
    },
    actionCreate(state, action) {
      return [ ...state,
        { ...action.payload,
          id: generateId(),
          votes: action.payload.votes || 0,
        },
      ]
    },
    actionSetAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { actionVote, actionCreate, actionSetAnecdotes } = slice.actions
export default slice.reducer

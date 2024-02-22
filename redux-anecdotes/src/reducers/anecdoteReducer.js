import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

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
      return state.map(a => a.id === action.payload.id
        ? { ...a, votes: a.votes + 1 } 
        : a
      )
    },
    actionCreate(state, action) {
      return [ ...state, action.payload ]
    },
    actionSetAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const actionInitAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(actionSetAnecdotes(anecdotes))
  }
}

export const { actionVote, actionCreate, actionSetAnecdotes } = slice.actions
export default slice.reducer

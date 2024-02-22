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
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdote(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      return state.map(a => a.id === action.payload.id
        ? action.payload
        : a
      )
    },
  }
})

export const actionInitAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const actionCreateAnecdote = (anecdote) => {
  return async dispatch => {
    const savedAnecdote = await anecdoteService.create(anecdote)
    dispatch(appendAnecdote(savedAnecdote))
  }
}

export const actionVoteAnecdote = (anecdote) => {
  return async dispatch => {
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(votedAnecdote)
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export const { setAnecdote, appendAnecdote, updateAnecdote } = slice.actions
export default slice.reducer

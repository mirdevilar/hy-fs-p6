import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async (anecdote) => {
  const anecdoteToSave = { ...anecdote,
    votes: anecdote.votes || 0,
  }
  const res = await axios.post(baseUrl, anecdoteToSave)
  return res.data
}

export default { getAll, create }

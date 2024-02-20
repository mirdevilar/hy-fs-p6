import { useSelector, useDispatch } from 'react-redux'
import { actionVote } from '../reducers/anecdoteReducer.js'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const handleVote = (id) => {
    dispatch(actionVote(id))
  }

  return (
    <div>
    {anecdotes
      .sort((a, b) => a.votes < b.votes)
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default AnecdoteList

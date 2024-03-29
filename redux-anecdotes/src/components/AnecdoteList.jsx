import { useSelector, useDispatch } from 'react-redux'
import { actionVoteAnecdote } from '../reducers/anecdoteReducer'
import { actionShowNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => { 
    return state.anecdotes.filter(a =>
      a.content.toLowerCase().includes(filter.content.toLowerCase())
    )
  })
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(actionVoteAnecdote(anecdote))
    dispatch(actionShowNotification(`You just voted for note "${anecdote.content}"!`, 5))
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
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default AnecdoteList

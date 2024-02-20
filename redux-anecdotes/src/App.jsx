import { useSelector, useDispatch } from 'react-redux'
import { actionCreate, actionVote } from './reducers/anecdoteReducer.js'
import AnecdoteForm from './components/AnecdoteForm.jsx'

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(actionVote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
        .sort((a, b) => a.votes < b.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
      <AnecdoteForm />
    </div>
  )
}

export default App

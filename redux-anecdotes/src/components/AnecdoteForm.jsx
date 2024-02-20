import { useDispatch } from 'react-redux'
import { actionCreate } from '../reducers/anecdoteReducer.js'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreate = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    dispatch(actionCreate(content))
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleCreate}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

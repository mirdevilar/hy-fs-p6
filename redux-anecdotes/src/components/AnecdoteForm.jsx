import { useDispatch } from 'react-redux'
import { actionCreateAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import { actionSetNotification, actionResetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreate = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    dispatch(actionCreateAnecdote({ content }))
    dispatch(actionSetNotification({ content: `Created note "${content}"!` }))
    setTimeout(() => {
      dispatch(actionResetNotification())
    }, 5000);

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

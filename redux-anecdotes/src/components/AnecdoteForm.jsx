import { useDispatch } from 'react-redux'
import { actionCreate } from '../reducers/anecdoteReducer'
import { actionSetNotification, actionResetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreate = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    dispatch(actionCreate({ content }))
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

import { useContext } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import NotificationContext from '../NotificationContext'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const [notification, notificationDispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const createMutation = useMutation({
    mutationFn: anecdoteService.create,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      notificationDispatch({ type: 'SET', payload: `Note "${newAnecdote.content}" created!` })
      setTimeout(() => {
        notificationDispatch({ type: 'RESET' })
      }, 5000)
    },
    onError: (error) => {
      notificationDispatch({ type: 'SET', payload: error.response.data.error })
      setTimeout(() => {
        notificationDispatch({ type: 'RESET' })
      }, 5000)
    },
  })

  const handleCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    createMutation.mutate({ content, votes: 0 })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={handleCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm

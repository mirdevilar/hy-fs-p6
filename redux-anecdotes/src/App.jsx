import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actionSetAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes.js'

import Filter from './components/Filter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      dispatch(actionSetAnecdotes(anecdotes))
    })
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App

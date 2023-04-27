import { createStore } from 'redux'
import rootReducer from './reducer'

let preoadedState
const persistedTodosString = localStorage.getItem('todos')

if (persistedTodosString) {
  preoadedState = {
    todos: JSON.parse(persistedTodosString),
  }
}
const store = createStore(rootReducer, preoadedState)

export default store

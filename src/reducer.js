import { combineReducer } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

// // passa da tutti i reducer sempre, se poi l'action triggera uno dei due avviene l'update
// export default function rootReducer(state = {}, action) {
//   // always return a new object for the root state
//   return {
//     todos: todosReducer(state.todos, action),
//     filters: filtersReducer(state.filters, action),
//   }
// }

// with combineReducers you can replicate the code written before

const rootReducer = combineReducer({
  // Define a top-level state field named "todos", handled by todosReducer (key name the name of the state releated, the value the reducer that updated the relate state)
  todos: todosReducer,
  filters: filtersReducer,
})

export default rootReducer

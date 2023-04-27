const initialState = []

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the "todos" field
        todos: [
          //with all of the old todos
          ...state.todos,
          //and the new todo object
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      }
    }
    case 'todos/todoToggled': {
      return {
        //copy the entire state object
        ...state,
        // copy old todos array
        todos: state.todos.map((todo) => {
          // if doesn't match with id in the action payload don't update
          if (todo.id !== action.payload) {
            return todo
          }
          // if match, update his status to completed
          return {
            ...todo,
            completed: !todo.completed,
          }
        }),
      }
    }
    default:
      return state
  }
}

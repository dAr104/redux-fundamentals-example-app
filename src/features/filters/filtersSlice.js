const initialState = {
  filters: {
    status: 'All',
    colors: [],
  },
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/statusFilterChanged': {
      return {
        //copy current state
        ...state,
        // update filters
        filters: {
          // copy current filters fields
          ...state.filters,
          // replace the status field with the new value
          status: action.payload,
        },
      }
    }
    default:
      // if reducer doesn't recognize the action type, or doesn't care about this specific action, return the current state unchanged
      return state
  }
}

// all reducers get two args - state and action
// reducers are only called when an action occurs
// The state argument is not application state
// The state is the one the reducer is responsible for.
// redux cannot accept undefined for reducer state, which will occur on intital start of our application
// so we default the reducer state to null

export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}

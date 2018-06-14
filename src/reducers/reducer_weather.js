import { FETCH_WEATHER } from '../actions/index';

// We always want to return a new state instead
// NEVER want to manipulate our state
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
    return state;
}

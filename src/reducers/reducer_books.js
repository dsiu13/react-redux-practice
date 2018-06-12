// a Reducer is a function that returns a piece of the applications state
// Our app can have many states, so we can have reducers for each

// Two process to create a reducer
// 1. create the reducer
// 2. wire it our application

export default function() {
  return [
    { title: 'JavaScript' },
    { title: 'Python' },
    { title: 'Ruby' },
    { title: 'Java' }
  ]
}

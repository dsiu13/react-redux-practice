// a Reducer is a function that returns a piece of the applications state
// Our app can have many states, so we can have reducers for each

// Two process to create a reducer
// 1. create the reducer
// 2. wire it our application

export default function() {
  return [
    { title: 'JavaScript', pages: 123 },
    { title: 'Python', pages: 321 },
    { title: 'Ruby', pages: 808 },
    { title: 'Java', pages: 415 }
  ];
}

export function selectBook(book) {
// selectBook is an action creator, needs to return
// an obj with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

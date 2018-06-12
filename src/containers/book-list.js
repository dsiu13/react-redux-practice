// A container is component that has direct access to the state created by redux
// Only through react-redux can the two communicate
// Most parent component should be a container

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

// whatever gets returned will show up as props inside of booklist
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);

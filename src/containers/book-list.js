// A container is component that has direct access to the state created by redux
// Only through react-redux can react & redux communicate
// the most parent component should be a container

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

// Anything returned will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  // When select book is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// PromoteBookList from a component to a container. Needs to know
// about new dispatch method. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

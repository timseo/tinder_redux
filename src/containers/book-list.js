import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned from here will show up as props inside of BooksList
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the BooksList container
function mapDistpatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// promote Book List from a component to a container it needs to konw aboutthis new dispatch method, selectBook. makes it available as a prop
export default connect(mapStateToProps, mapDistpatchToProps)(BookList);

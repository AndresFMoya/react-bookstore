import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = (props) => {
  const { books, removeBook } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <table className="books-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { books.map(book => (
          <Book
            book={book}
            key={book.id}
            remove={handleRemoveBook}
          />
        ))}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [{}],
  removeBook: null,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

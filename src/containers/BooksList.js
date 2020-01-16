import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const { books, removeBook, filter } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <div>
      <CategoryFilter />
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
          { books.filter(book => (filter === 'All' || book.category === filter)).map(book => (
            <Book
              book={book}
              key={book.id}
              remove={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
  removeBook: null,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

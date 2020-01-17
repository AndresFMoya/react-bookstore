import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { filterBook, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = (props) => {
  const {
    books, removeBook, filter, filterBook,
  } = props;

  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (event) => {
    filterBook(event.target.value);
  };

  return (
    <div>
      <CategoryFilter filterBook={handleFilterChange} />
      <div className="">
        <div>
          { books.filter(book => (filter === 'All' || book.category === filter)).map(book => (
            <Book
              book={book}
              key={book.id}
              remove={handleRemoveBook}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func,
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [{}],
  removeBook: null,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  filterBook: filter => dispatch(filterBook(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

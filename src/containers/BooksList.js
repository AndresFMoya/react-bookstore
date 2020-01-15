import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = (props) => {
  const { books } = props;

  return (
    <table className="books-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        { books.map((book) => <Book book={book} key={book.id} />)}
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

BooksList.defaultProps = { books: [{}] };

const mapStateToProps = (state) => ({ books: state.books });
export default connect(mapStateToProps, null)(BooksList);

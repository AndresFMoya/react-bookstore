import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const renderBooks = () => books.map(book => <Book key={book.id} book={book} />);

  return (
    <table className="books-list">
      <thead>
        <tr>
          <th>ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>{renderBooks()}</tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({ books: state.books });
export default connect(mapStateToProps, null)(BooksList);

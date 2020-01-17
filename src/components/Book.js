import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, remove } = props;

  const handleRemoveBook = () => {
    remove(book);
  };

  return (
    <div className="book card m-4" key={book.id}>
      <div className="book-info p-5">
        <div className="category">{ book.category }</div>
        <div className="title">{ book.title }</div>
        <button className="remove" type="button" onClick={handleRemoveBook}>Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Book;

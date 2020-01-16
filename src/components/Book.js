import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, remove } = props;

  const handleRemoveBook = () => {
    remove(book);
  };

  return (
    <tr key={book.id}>
      <td>{ book.id }</td>
      <td>{ book.title }</td>
      <td>{ book.category }</td>
      <td><button type="button" onClick={handleRemoveBook}>remove</button></td>
    </tr>
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

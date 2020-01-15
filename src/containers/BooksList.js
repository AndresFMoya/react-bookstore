import React from "react";
import { connect } from 'react-redux';
import Book from '../components/Book'

const BooksList = ({ books }) => {
  const renderBooks = () => {
    return books.map(book => <Book key={book.id} />);
  };
  
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

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, null) (BooksList);
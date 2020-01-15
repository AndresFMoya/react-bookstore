import React from 'react';
import { connect } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import { createBook } from '../actions/index';


const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
const BooksFormContainer = connect(null, mapDispatchToProps)(BooksForm);

const App = () => (
  <div className="app">
    <BooksList />
    <BooksFormContainer />
  </div>
);

export default App;

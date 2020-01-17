import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import randomId from '../components/randomId';
import { createBook } from '../actions';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const [state, setState] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'title') {
      setState({
        title: value,
        category: state.category,
      });
    }
    if (name === 'category') {
      setState({
        title: state.title,
        category: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, category } = state;
    const { createBook } = props;
    const newBook = { id: randomId(), title, category };
    createBook(newBook);
    setState({
      title: '',
      category: 'Action',
    });
  };


  const renderOption = category => (
    <option key={category} value={category}>
      {category}
    </option>
  );

  return (
    <div className="panel-bg d-flex">
      <form onSubmit={handleSubmit} className="add-book d-flex flex-column w-100">
        <h4 className="title">ADD NEW BOOK</h4>
        <div className="d-flex align-items-center">
          <input placeholder="Book Title" onChange={handleChange} value={state.title} name="title" className="book-input m-4" />
          <select onChange={handleChange} value={state.category} name="category" className="category m-4">
            {categories.map(category => renderOption(category))}
          </select>
          <button className="btn btn-primary" type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);

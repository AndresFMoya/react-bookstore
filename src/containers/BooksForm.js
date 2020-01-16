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
    <form onSubmit={handleSubmit}>
      <input placeholder="Book title" onChange={handleChange} value={state.title} name="title" />
      <select onChange={handleChange} value={state.category} name="category">
        {categories.map(category => renderOption(category))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);

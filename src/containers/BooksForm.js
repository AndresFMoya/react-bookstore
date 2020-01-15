import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const { createBook } = props;

  const [state, setState] = useState({
    title: null,
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


  const renderOption = (category) => (
    <option key={category} value={category}>
      {category}
    </option>
  );

  return (
    <form>
      <input placeholder="Book title" onChange={handleChange} value={state.title} name="title" />
      <select onChange={handleChange} value={state.category} name="category">
        {categories.map((category) => renderOption(category))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BooksForm;

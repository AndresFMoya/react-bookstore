import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBook } from '../actions';

const CategoryFilter = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const { filterBook, filter } = props;

  const handleFilterChange = (event) => {
    filterBook(event.target.value);
  };

  return (
    <div>
      Filter by Category
      <select value={filter} onChange={handleFilterChange}>
        <option value="All">All</option>
        { categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        )) }
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  filterBook: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  filter: 'All',
};

const mapDispatchToProps = (dispatch) => ({ filterBook: (filter) => dispatch(filterBook(filter)) });
const mapStateToProps = (state) => ({ filter: state.filter });

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);

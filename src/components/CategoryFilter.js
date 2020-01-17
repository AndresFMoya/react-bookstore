import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const { filterBook, filter } = props;

  return (
    <div>
      Filter by Category
      <select value={filter} onChange={filterBook}>
        <option value="All">All</option>
        { categories.map(category => (
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

const mapStateToProps = state => ({ filter: state.filter });

export default connect(mapStateToProps, null)(CategoryFilter);

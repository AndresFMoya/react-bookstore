import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CategoryFilter = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const { filterBook, filter } = props;

  return (
    <div className="category-section d-flex align-items-center pt-2">
      <h1 className="bookstore-CMS m-1">Bookstore CMS</h1>
      <div className="books m-1">BOOKS</div>
      <div className="categories m-1">CATEGORIES</div>
      <select className="category m-1" value={filter} onChange={filterBook}>
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

const filterReducer = (state = 'All', action) => {
  const { type, filter } = action;
  if (type === 'CHANGE_FILTER') {
    return filter;
  }
  return state;
};

export default filterReducer;

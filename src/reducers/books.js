const booksReducer = (state = [], action) => {
  const { type, book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, book];
    case 'REMOVE_BOOK':
      return [...state.filter(data => data !== book)];
    default:
      return state;
  }
};

export default booksReducer;

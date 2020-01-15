export const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

export const deleteBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

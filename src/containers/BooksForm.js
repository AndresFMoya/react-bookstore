import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];

  const renderOption = category => (
    <option key={category} value={category}>
      {category}
    </option>
  );

  return (
    <form>
      <input placeholder="Book title" />
      <select>{categories.map(category => renderOption(category))}</select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;

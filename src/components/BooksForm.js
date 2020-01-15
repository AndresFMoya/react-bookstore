import React from "react";

const BookForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror',
    'Kids', 'Learning', 'Sci-Fi'];
  
  const renderOption = (category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  };
  
  return (
    <form>
      <input placeholder="Book title" />
      <select>{categories.map(category => renderOption(category))}</select>
      <button>Submit</button>
    </form>
  );
};

export default BookForm;
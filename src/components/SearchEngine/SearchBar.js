import './SearchBar.css';
import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input
          name="term"
          placeholder="Search Term"
          value={term}
          onChange={(e) => {
            return setTerm(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar
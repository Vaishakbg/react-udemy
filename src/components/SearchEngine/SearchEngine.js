import React, { useState } from 'react'
import searchImages from '../Api/api';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

function SearchEngine() {
    const [images, setImages] = useState([])
  const handleSubmit = async (term)=> {
    const result = await searchImages(term);
    setImages(result);
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default SearchEngine
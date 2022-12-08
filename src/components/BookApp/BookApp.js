import './BookApp.css'
import React, { useContext, useEffect } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'
import BooksContext from '../../context/books';

function BookApp() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  
  
  return (
    
      <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    
  )
}

export default BookApp
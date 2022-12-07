import './BookApp.css'
import React, { useState } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'

function BookApp() {
  const [books, setBooks] = useState([]);
  const createBook =(title) => {
    const id = Math.round(Math.random() * 9999)
    const updatedBooks = [...books, { id, title }]
    setBooks(updatedBooks);
  }
  return (
    <div className='app'>
      <BookList books={books}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookApp
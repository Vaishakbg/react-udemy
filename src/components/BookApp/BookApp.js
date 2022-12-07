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
  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    });
    setBooks(updatedBooks);
  }
  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookApp
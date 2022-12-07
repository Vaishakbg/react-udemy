import './BookApp.css'
import React, { useState } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'
import axios from 'axios';

function BookApp() {
  const [books, setBooks] = useState([]);
  const createBook =async (title) => {
    const response = await axios.post('http://localhost:3001/books',{
      title
    });
    const updatedBooks = [...books, response.data]
    setBooks(updatedBooks);
  }
  const deleteBookById = (id) =>{
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    });
    setBooks(updatedBooks);
  }
  const editBookById = (id, title) =>{
    const updatedBooks = books.map((book)=>{
      if (book.id === id) {
        return { ...book, title: title };
      }
  
      return book;
    });
    setBooks(updatedBooks);
  }
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookApp
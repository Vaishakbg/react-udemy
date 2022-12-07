import './BookApp.css'
import React, { useState } from 'react'
import BookCreate from './BookCreate'

function BookApp() {
  const [books, setBooks] = useState([]);
  const createBook =(title) => {
    //BAD CODE!
    // books.push({id: 123, title});
    // setBooks(books);
    const id = Math.round(Math.random() * 9999)
    const updatedBooks = [...books, { id, title }]
    setBooks(updatedBooks);
    console.log(books);
  }
  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookApp
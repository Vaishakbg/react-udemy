import './BookApp.css'
import React, { useState } from 'react'
import BookCreate from './BookCreate'

function BookApp() {
  const [books, setBooks] = useState([]);
  const createBook =(title) => {
    console.log('Add Book', title);
    //BAD CODE!
  }
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookApp
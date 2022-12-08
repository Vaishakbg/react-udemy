import React, { useContext, useState } from 'react'
import BooksContext from '../../context/books';

function BookEdit({book, onSubmit}) {
  const {editBookById} = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

    const handleSubmit =(e)=>{
      e.preventDefault();
      onSubmit();
      editBookById(book.id, title);
    }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label className='label' htmlFor="title">Title</label>
      <input className='input' id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button className='button is-primary' type="submit">Save</button>
    </form>
  )
}

export default BookEdit
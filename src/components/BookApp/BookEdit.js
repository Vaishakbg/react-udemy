import React, { useState } from 'react'

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);

    const handleSubmit =(e)=>{
      e.preventDefault();
      onSubmit(book.id, title);
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
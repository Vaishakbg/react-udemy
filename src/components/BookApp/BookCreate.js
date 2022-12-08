import React, { useContext, useState } from 'react'
import BooksContext from '../../context/books';

function BookCreate() {
    const {createBook} = useContext(BooksContext);
    
    const [title, setTitle] = useState('');

    const handleSubmit =(e)=>{
      e.preventDefault();
      createBook(title);
      setTitle('');
    }
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label className='label' htmlFor="title">Title</label>
            <input className='input' id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button className='button' type="submit">Create!</button>
        </form>
    </div>
  )
}

export default BookCreate
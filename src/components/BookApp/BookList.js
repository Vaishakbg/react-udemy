import React from 'react'
import { useContext } from 'react'
import BookContext from '../../context/context'
import BookShow from './BookShow'

function BookList({books, onDelete, onEdit}) {
  const {count, incrementCount} = useContext(BookContext);
  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  })
  return (
    <div className='book-list'>
      value: {count}
      <button onClick={incrementCount}>Increment</button>
      {renderedBooks}
    </div>
  )
}

export default BookList
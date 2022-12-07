import React from 'react'
import { useContext } from 'react'
import BookContext from '../../context/context'
import BookShow from './BookShow'

function BookList({books, onDelete, onEdit}) {
  const value = useContext(BookContext);
  const renderedBooks = books.map((book)=>{
    return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
  })
  return (
    <div className='book-list'>
      value: {value}
      {renderedBooks}
    </div>
  )
}

export default BookList
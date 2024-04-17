import React from 'react'
import Books from './Books'

function RenderingLists() {
  const bookList = [
    'to kill a mockingbird',
    'Spongebob',
    'Teen Titans Go!',
  ]

  const books = [{
    title: 'to kill a mockingbird',
    author: "Me",
    pages: 218 , 
    },{
    title: 'SpongBob',
    author: "Kim Kardation", 
    pages: 333,
    },{
    title: 'Teen Titans Go!',
    author:"Your mom", 
    pages: 111,
    }
 ]

  return (
    <div>
        {bookList.map(
            book => {
                return <h2 key={book}>{book}</h2>
            }
        )}
        <hr/>
        {
            books.map(
                book => {
                    return <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                }
            )
        }
    </div>
  )
}

export default RenderingLists
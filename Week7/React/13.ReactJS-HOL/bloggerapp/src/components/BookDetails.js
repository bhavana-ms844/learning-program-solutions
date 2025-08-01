import React from 'react';

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "Ikigai", author: "Francesc Miralles" },
  { id: 3, title: "Deep Work", author: "Cal Newport" }
];

function BookDetails() {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;

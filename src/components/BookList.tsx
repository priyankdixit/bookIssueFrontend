import React, { useState } from 'react';
import { getAllBooks } from '../api/api';

const BookList: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);

  const fetchBooks = async () => {
    const response = await getAllBooks();
    setBooks(response.data);
  };

  return (
    <div>
      <h2>Books List</h2>
      <button onClick={fetchBooks}>Load Books</button>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            {book.name} - {book.category} - Rent per Day: {book.rentPerDay}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

import React, { useState } from 'react';
import { getUserIssuedBooks } from '../api/api';

const IssuedBooks: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const fetchIssuedBooks = async () => {
    try {
      setError(null);  // Reset error before fetching data
      const response = await getUserIssuedBooks(username);

      // Assuming the API returns an empty array or specific message if the user is not found
      if (response.data.issuedBooks && response.data.issuedBooks.length > 0) {
        setBooks(response.data.issuedBooks);
      } else {
        setError('User not found or no books issued.');
        setBooks([]);  // Clear the books array in case it has previous data
      }
    } catch (error) {
      setError('Error fetching issued books. Please try again later.');
      setBooks([]);  // Clear the books array on error
    }
  };

  return (
    <div>
      <h2>Issued Books by User</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchIssuedBooks}>Fetch Books</button>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.bookName}>
              {book.bookName} - Issued on: {book.issueDate} - Returned on: {book.returnDate || 'Not Returned'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssuedBooks;

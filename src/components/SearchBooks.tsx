import React, { useState } from 'react';
import { getBooksByName } from '../api/api';

const SearchBook: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const searchBooks = async () => {
    try {
      setError(null); // Reset error before fetching data
      const response = await getBooksByName(bookName);

      // If no books found or an empty response is returned
      if (response.data && response.data.length > 0) {
        setResults(response.data);
      } else {
        setError('No books found with that name.');
        setResults([]); // Clear results if no books found
      }
    } catch (error) {
      setError('Error fetching books. Please try again later.');
      setResults([]); // Clear results on error
    }
  };

  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Enter Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <ul>
        {results.map(book => (
          <li key={book._id}>
            {book.name} - Rent per Day: {book.rentPerDay}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBook

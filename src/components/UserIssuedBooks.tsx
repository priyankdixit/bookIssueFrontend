import React, { useState } from 'react';
import { getUserIssuedBooks } from '../api/api';

const UserIssuedBooks: React.FC = () => {
  const [username, setUsername] = useState('');
  const [issuedBooks, setIssuedBooks] = useState<any[]>([]);
  const [message, setMessage] = useState('');

  const fetchUserBooks = async () => {
    try {
      const response = await getUserIssuedBooks(username);
      setIssuedBooks(response.data.issuedBooks);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error fetching user books');
    }
  };

  return (
    <div>
      <h2>User Issued Books</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchUserBooks}>Fetch Books</button>
      {message && <p>{message}</p>}
      {issuedBooks.length > 0 && (
        <ul>
          {issuedBooks.map((book, index) => (
            <li key={index}>
              {book.bookName} - Issued on: {new Date(book.issueDate).toLocaleDateString()}
              {book.returnDate && ` - Returned on: ${new Date(book.returnDate).toLocaleDateString()}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserIssuedBooks;

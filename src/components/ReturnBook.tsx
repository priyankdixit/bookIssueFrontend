import React, { useState } from 'react';
import { returnBook } from '../api/api';

const ReturnBook: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [userName, setUserName] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [message, setMessage] = useState('');

  const handleReturnBook = async () => {
    try {
      const response = await returnBook(bookName, userName, returnDate);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error returning book');
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <button onClick={handleReturnBook}>Return Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ReturnBook;

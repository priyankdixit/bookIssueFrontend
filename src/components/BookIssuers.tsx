import React, { useState } from 'react';
import { getBookIssuers } from '../api/api';

const BookIssuers: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [result, setResult] = useState<any>(null);
  const [message, setMessage] = useState('');

  const fetchIssuers = async () => {
    try {
      const response = await getBookIssuers(bookName);
      setResult(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error fetching issuers');
    }
  };

  return (
    <div>
      <h2>Book Issuers</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={fetchIssuers}>Get Issuers</button>
      {message && <p>{message}</p>}
      {result && (
        <div>
          <p>Total Count: {result.totalCount}</p>
          <p>Current Issuer: {result.currentIssuer}</p>
          <ul>
            {result.issuedUsers.map((user: string) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookIssuers;

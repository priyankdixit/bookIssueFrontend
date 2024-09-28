import React, { useState } from 'react';
import { issueBook } from '../api/api';

const IssueBook: React.FC = () => {
  const [bookName, setBookName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [issueDate, setIssueDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // Error state

  const handleIssueBook = async (): Promise<void> => {
    try {
      setError(null); // Reset error before issuing the book
      const response = await issueBook(bookName, userName, issueDate);
      setMessage(response.data.message);
    } catch (error) {
      // Handling the error, assuming it's an AxiosError
      if (error.response) {
        setError(error.response.data.message || 'Error issuing book');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      setMessage(''); // Clear the message in case of an error
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
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
        value={issueDate}
        onChange={(e) => setIssueDate(e.target.value)}
      />
      <button onClick={handleIssueBook}>Issue Book</button>
      {message && <p>{message}</p>} {/* Display success message */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </div>
  );
};

export default IssueBook;

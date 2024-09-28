import React, { useState } from 'react';
import { getTotalRentGenerated } from '../api/api';

const TotalRentGenerated: React.FC = () => {
  const [bookName, setBookName] = useState('');
  const [totalRent, setTotalRent] = useState<number | null>(null);
  const [message, setMessage] = useState('');

  const fetchTotalRent = async () => {
    try {
      const response = await getTotalRentGenerated(bookName);
      setTotalRent(response.data.totalRent);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error fetching total rent');
    }
  };

  return (
    <div>
      <h2>Total Rent Generated</h2>
      <input
        type="text"
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={fetchTotalRent}>Fetch Rent</button>
      {message && <p>{message}</p>}
      {totalRent !== null && <p>Total Rent: {totalRent}</p>}
    </div>
  );
};

export default TotalRentGenerated;

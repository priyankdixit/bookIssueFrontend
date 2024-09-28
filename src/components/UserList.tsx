import React, { useState } from 'react';
import { getAllUsers } from '../api/api';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };

  return (
    <div>
      <h2>User List</h2>
      <button onClick={fetchUsers}>Load Users</button>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

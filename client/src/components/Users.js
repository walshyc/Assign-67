import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="flex flex-wrap justify-center items-center gap-1 w-full">
        {users.map((u, i) => (
          <UserCard key={i} user={u}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;

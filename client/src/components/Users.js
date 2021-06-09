import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:4000/users');
      console.log(res.data);
      setUsers(res.data);
    };
    getData();
    // fetch('http://localhost:4000/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUsers(data);
    //   });
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

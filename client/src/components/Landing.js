import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className=" bg-gray-300">
      <div className="flex flex-col justify-content items-center pt-4">
        <Link to="/users">
          <button className="py-3 px-4 text-2xl font-bold bg-green-400 text-black rounded-2xl shadow-2xl w-80 my-4">
            Users
          </button>
        </Link>
        <Link to="/phones">
          <button className="py-3 px-4 text-2xl font-bold bg-blue-400 text-black rounded-2xl shadow-2xl w-80 my-4">
            Phones
          </button>
        </Link>
        <Link to="/orders">
          <button className="py-3 px-4 text-2xl font-bold bg-yellow-400 text-black rounded-2xl shadow-2xl w-80 my-4">
            Orders
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;

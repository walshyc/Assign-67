import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gray-800 text-gray-100 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          to="/"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >
          CS230
        </Link>
      </div>
      <div>
        <Link
          to="/users"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6"
        >
          Users
        </Link>
        <Link
          to="/phones"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6"
        >
          Phones
        </Link>
        <Link
          to="/orders"
          className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-6"
        >
          Orders
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

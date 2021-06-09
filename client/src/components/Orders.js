import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/orders')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);
  return (
    <div className="w-full min-h-screen pt-4">
      {orders.map((order) => (
        <div className="mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-start items-start bg-green-300 px-3 py-4 my-4 rounded-2xl shadow-xl w-full sm:w-1/2">
          <div className="pr-4">
            <svg
              className="w-16"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>

          <div className="flex flex-col w-2/3">
            <div className="text-xl font-bold">Order No: {order._id.slice(19).toUpperCase()}</div>
            {/* 
            <Link
              to={{
                pathname: `/users/${user._id}`,
                state: { user },
              }}
            >
              <button className="bg-yellow-200 hover:bg-yellow-100 opacity-90 text-gray-900 hover:text-gray-900 p-1 text-sm my-2 rounded-xl shadow-xl w-3/4  text-medium">
                View {user.fname}
              </button>
            </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;

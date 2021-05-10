import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const UserProfile = () => {
  const { state } = useLocation();
  const [userDetails, setUserDetails] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    console.log(state);
    fetch(`http://localhost:4000/users/${state.user._id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserDetails(data);
        console.log(userDetails);
      });
    fetch(`http://localhost:4000/orders/${state.user._id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserOrders(data);
      });
  }, []);

  
  return (
    <div className=" min-h-screen bg-gray-300 flex items-start justify-center w-full pt-8">
      <div className="w-full mx-10 rounded bg-white dark:bg-gray-800 shadow">
        <div className="w-full h-10 bg-gray-100 dark:bg-gray-700 rounded-t">
          <div className="flex flex-col justify-center items-start h-full w-full">
            <p className="w-full pl-4 text-xl font-bold">
              {userDetails.fname} {userDetails.lname}
            </p>
          </div>
        </div>
        <div className="w-full h-64 border-t border-gray-400 dark:border-gray-600 rounded-b">
          <div className="flex justify-between flex-wrap">
            <div className="w-full flex flex-col sm:flex-row ">
              <div className="w-1/3 pl-4">{userDetails.mobile}</div>
              <div className="w-1/3 pl-4">{userDetails.email}</div>
            </div>
            <div className="w-1/2"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import React, { useEffect, useState } from 'react';
import { useLocation, } from 'react-router';
import UserOrders from './UserOrders';

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
        console.log('orders ' + data);
        setUserOrders(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 flex items-center  justify-top w-full pt-8 flex-col">
      <div className="w-full mx-10 rounded bg-white dark:bg-gray-800 shadow">
        <div className="w-full h-10 bg-green-300 rounded-t">
          <div className="flex flex-col justify-center items-start h-full w-full">
            <p className="w-full pl-4 text-xl font-bold">
              {userDetails.fname} {userDetails.lname}
            </p>
          </div>
        </div>
        <div className="w-full border-t border-gray-400 bg-green-100 rounded-b h-full">
          <div className="flex justify-between flex-wrap">
            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap ">
              <div className="w-full sm:w-1/2 pl-4 flex py-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <a href={`tel:${userDetails.mobile}`}>{userDetails.mobile}</a>
              </div>
              <div className="w-full sm:w-1/2 pl-4 flex py-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <a href={`mailto:${userDetails.email}`}>{userDetails.email}</a>
              </div>
              <div className="w-full sm:w-1/2 pl-4 flex py-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <div className="flex flex-col">
                  <div className="">
                    {userDetails.deliveryAddress?.addressOne}
                  </div>
                  <div className="">
                    {userDetails.deliveryAddress?.addressTwo
                      ? userDetails.deliveryAddress?.addressTwo
                      : ''}
                  </div>
                  <div className="">{userDetails.deliveryAddress?.town}</div>
                  <div className="">{userDetails.deliveryAddress?.county}</div>
                  <div className="">{userDetails.deliveryAddress?.eircode}</div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 pl-4 flex py-2">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <div className="flex flex-col">
                  <div className="">
                    {userDetails.billingAddress?.addressOne}
                  </div>
                  <div className="">
                    {userDetails.billingAddress?.addressTwo
                      ? userDetails.billingAddress?.addressTwo
                      : ''}
                  </div>
                  <div className="">{userDetails.billingAddress?.town}</div>
                  <div className="">{userDetails.billingAddress?.county}</div>
                  <div className="">{userDetails.billingAddress?.eircode}</div>
                </div>
              </div>
            </div>
            <div className="w-1/2"></div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
      <UserOrders user={userDetails} orders={userOrders}></UserOrders>
    </div>
  );
};

export default UserProfile;

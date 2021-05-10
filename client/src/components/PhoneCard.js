import React from 'react';

const PhoneCard = ({ phone }) => {
  return (
    <div className="mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex justify-start items-start bg-green-300 px-3 py-2 my-2 rounded-2xl shadow-xl w-10/12 sm:w-80">
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
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>

      <div className="flex flex-col w-2/3">
        <div className="text-xl font-bold">
          {phone.manufacturer} {phone.model}
        </div>
        <button className="bg-yellow-200 hover:bg-yellow-100 opacity-90 text-gray-900 hover:text-gray-900 p-1 text-sm my-2 rounded-xl shadow-xl w-3/4  text-medium">
          View {phone.model}
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;

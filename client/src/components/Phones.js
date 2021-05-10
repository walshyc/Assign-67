import React, { useState, useEffect } from 'react';
import PhoneCard from './PhoneCard';

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/phones')
      .then((response) => response.json())
      .then((data) => setPhones(data));
    console.log(phones);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="flex flex-wrap justify-center items-center gap-1 w-full">
        {phones.map((p, i) => (
          <PhoneCard key={i} phone={p}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;

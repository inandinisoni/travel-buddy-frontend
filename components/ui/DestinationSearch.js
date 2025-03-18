'use client';
import React, { useState } from 'react';

const DestinationSearch = ({ onContinue }) => {
  const [destination, setDestination] = useState('');

  const handleContinue = () => {
    onContinue(destination);
  };

  return (
    <section className="p-6 w-full bg-white rounded-lg shadow-md max-w-[500px]">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Select Your Visiting Country"
            className="px-4 py-3 w-full text-sm rounded border border-solid"
            aria-label="Destination country search"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <svg
            className="absolute right-[16px] top-[50%] transform translate-y-[-50%] w-[20px] h-[20px] text-[#9CA3AF]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <button className="flex gap-2 items-center text-sm text-blue-500 cursor-pointer">
          <svg
            className="w-[20px] h-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <span>Auto-detect my location</span>
        </button>
        <button
          className="px-4 py-3 w-full text-sm font-medium text-white bg-blue-500 rounded"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default DestinationSearch;

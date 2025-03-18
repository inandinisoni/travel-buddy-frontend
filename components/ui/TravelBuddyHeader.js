'use client';
import React from 'react';

const TravelBuddyHeader = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex gap-2 items-center">
        <svg
          className="w-[24px] h-[24px] text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
        </svg>
        <h1 className="text-xl font-semibold text-blue-500">TravelBuddy</h1>
      </div>
      <div className="flex gap-6 items-center">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 items-center">
            <svg
              className="w-[20px] h-[20px] text-[#4B5563]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3"
              ></path>
            </svg>
            <span className="text-sm text-gray-600">EN</span>
          </div>
          <button className="text-sm text-blue-500 cursor-pointer">
            Login
          </button>
          <button className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default TravelBuddyHeader;
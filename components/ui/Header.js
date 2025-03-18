'use client';
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white max-sm:px-4 max-sm:py-3">
      <div className="flex gap-2 items-center text-blue-700">
        <i className="ti ti-plane" aria-hidden="true" />
        <h1 className="text-lg font-semibold">YTravel Buddy</h1>
      </div>
      <nav className="flex gap-6 max-sm:hidden">
        <button className="text-gray-600 cursor-pointer">Help</button>
        <button className="text-gray-600 cursor-pointer">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
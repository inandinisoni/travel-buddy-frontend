'use client';
import React from 'react';

function ActionButton({ icon, text, variant = 'secondary', onClick }) {
  const baseClasses =
    'flex justify-center items-center py-2 w-full text-sm rounded-lg';

  const variantClasses = {
    primary: 'text-white bg-blue-600',
    secondary: 'text-gray-700 border border-gray-200 border-solid',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      <i className={`${icon} mr-2`} aria-hidden="true" />
      <span>{text}</span>
    </button>
  );
}

export default ActionButton;

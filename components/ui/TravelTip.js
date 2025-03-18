'use client';
import React from 'react';

function TravelTip({ icon, title, description }) {
  return (
    <article className="p-4 bg-gray-50 rounded-lg max-sm:p-3">
      <i className={`ti ${icon}`} aria-hidden="true" />
      <h3 className="mx-0 my-2 font-medium text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </article>
  );
}

export default TravelTip;
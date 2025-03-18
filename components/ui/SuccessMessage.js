'use client';
import React from 'react';

function SuccessMessage() {
  return (
    <section className="mb-10 text-center">
      <div className="flex justify-center items-center mx-auto mt-0 mb-4 w-12 h-12 text-white bg-emerald-500 rounded-full">
        <i className="ti ti-check" aria-hidden="true" />
      </div>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">
        Enjoy Your Trip!
      </h2>
      <p className="text-gray-500">
        Your travel plan is ready. Download our app to access all features.
      </p>
    </section>
  );
}

export default SuccessMessage;
'use client';
import React from 'react';

function TravelSelections() {
  const handleEditSelections = () => {
    // Handle edit selections action
    console.log('Edit selections clicked');
  };

  return (
    <section className="p-6 mb-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Your Travel Selections
        </h2>
        <button
          onClick={handleEditSelections}
          className="text-blue-600 cursor-pointer"
        >
          Edit Selections
        </button>
      </div>
      <div className="flex flex-col gap-3 max-sm:gap-2">
        <div className="flex gap-3 items-center p-3 text-gray-700 bg-gray-50 rounded-lg">
          <i className="ti ti-map-pin" aria-hidden="true" />
          <span>Destination: Paris, France</span>
          <i
            className="ti ti-check ml-auto text-emerald-500"
            aria-hidden="true"
          />
        </div>
        <div className="flex gap-3 items-center p-3 text-gray-700 bg-gray-50 rounded-lg">
          <i className="ti ti-calendar" aria-hidden="true" />
          <span>Dates: Aug 15 - Aug 22, 2025</span>
          <i
            className="ti ti-check ml-auto text-emerald-500"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default TravelSelections;
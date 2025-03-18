'use client';
import React from 'react';
import AppCard from './AppCard';

function AppSelection() {
  const apps = [
    { icon: 'ti-map', name: 'Maps App' },
    { icon: 'ti-plane', name: 'Flight Tracker' },
    { icon: 'ti-building', name: 'Hotel Booking' },
  ];

  return (
    <section className="p-6 bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <h2 className="mb-4 text-lg font-medium text-gray-900">Selected Apps</h2>
      <div className="flex flex-wrap gap-6 max-sm:flex-col">
        {apps.map((app, index) => (
          <AppCard key={index} icon={app.icon} name={app.name} />
        ))}
      </div>
    </section>
  );
}

export default AppSelection;
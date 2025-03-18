'use client';
import React from 'react';
import QRCodeSection from './QRCodeSection';
import AppSelection from './AppSelection';

function TravelBuddy() {
  return (
    <main className="flex flex-col bg-gray-50 min-h-screen font-['Inter',sans-serif]">
      <section className="p-6 max-md:p-5 max-sm:p-4">
        <div className="mx-auto max-w-[800px]">
          <header>
            <h1 className="mb-2 text-3xl font-semibold text-gray-900">
              Travel Buddy
            </h1>
            <p className="mb-8 text-base text-gray-500">
              Your travel apps companion
            </p>
          </header>

          <QRCodeSection />
          <AppSelection />
        </div>
      </section>
    </main>
  );
}

export default TravelBuddy;

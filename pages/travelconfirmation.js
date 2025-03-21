'use client';
import React from 'react';
import Header from '@/components/ui/Header';
import SuccessMessage from '@/components/ui/SuccessMessage';
import AppDownload from '@/components/ui/AppDownload';
import TravelSelections from '@/components/ui/TravelSelections';
import LocalTravelTips from '@/components/ui/LocalTravelTips';

function TravelConfirmation() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="flex flex-col min-h-screen bg-white">
        <Header />
        <section className="flex-grow p-6 bg-gray-50 max-sm:p-4">
          <SuccessMessage />
          <AppDownload />
          <TravelSelections />
          <LocalTravelTips />
        </section>
      </main>
    </>
  );
}

export default TravelConfirmation;
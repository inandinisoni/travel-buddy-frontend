'use client';
import React from 'react';

function AppDownload() {
  const handleAppStoreClick = () => {
    // Handle App Store download
    console.log('App Store download clicked');
  };

  const handleGooglePlayClick = () => {
    // Handle Google Play download
    console.log('Google Play download clicked');
  };

  return (
    <section className="p-6 mb-6 bg-white rounded-xl">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Download Our App
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          Scan the QR code or click the buttons below to download YTravel Buddy
        </p>
        <div className="flex justify-between items-center max-sm:flex-col max-sm:gap-6">
          <div className="flex gap-3 max-sm:w-full">
            <button
              onClick={handleAppStoreClick}
              className="flex gap-2 items-center px-6 py-3 text-white bg-black rounded-lg cursor-pointer max-sm:flex-1 max-sm:justify-center"
              aria-label="Download from App Store"
            >
              <i className="ti ti-brand-apple" aria-hidden="true" />
              <span>App Store</span>
            </button>
            <button
              onClick={handleGooglePlayClick}
              className="flex gap-2 items-center px-6 py-3 text-white bg-emerald-500 rounded-lg cursor-pointer max-sm:flex-1 max-sm:justify-center"
              aria-label="Download from Google Play"
            >
              <i className="ti ti-brand-google-play" aria-hidden="true" />
              <span>Google Play</span>
            </button>
          </div>
          <div
            className="bg-gray-100 rounded-lg h-[120px] w-[120px] max-sm:mx-auto max-sm:my-0"
            aria-label="QR code for app download"
            role="img"
          />
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
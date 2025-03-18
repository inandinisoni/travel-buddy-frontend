'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ActionButton from './ActionButton';

function QRCodeSection() {
  const router = useRouter();

  const handleDownloadClick = () => {
    router.push('/travelconfirmation');
  };

  return (
    <section className="p-8 mb-6 bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
      <h2 className="mb-4 text-lg font-medium text-gray-900">
        Scan this QR Code to download your selected apps
      </h2>
      <p className="mb-6 text-sm text-gray-500">
        Point your camera at the QR code to access your curated app collection
      </p>

      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white rounded-lg border border-gray-200 h-[200px] w-[200px]">
          <img
            src="https://placehold.co/168x168/000000/000000"
            alt="QR Code"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <ActionButton
          icon="ti-copy"
          text="Copy App List URL"
          variant="secondary"
          onClick={() => console.log('Copy URL clicked')}
        />
        <ActionButton
          icon="ti-share"
          text="Share with Friends"
          variant="secondary"
          onClick={() => console.log('Share clicked')}
        />
        <ActionButton
          icon="ti-download"
          text="Download as Text/Image"
          variant="primary"
          onClick={handleDownloadClick}
        />
      </div>
    </section>
  );
}

export default QRCodeSection;
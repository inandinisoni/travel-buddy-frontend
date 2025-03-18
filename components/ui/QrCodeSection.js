"use client";
import React from "react";
import ActionButton from "./ActionButton";

function QrCodeSection() {
  const handleCopyUrl = () => {
    // Implementation for copying URL would go here
    console.log("Copying URL");
  };

  const handleShare = () => {
    // Implementation for sharing would go here
    console.log("Sharing with friends");
  };

  const handleDownload = () => {
    // Implementation for downloading would go here
    console.log("Downloading as Text/Image");
  };

  return (
    <section className="p-10 mb-10 text-center bg-gray-50 rounded-xl max-sm:p-6">
      <h2 className="mb-2 text-xl font-semibold text-black">
        Scan this QR Code to download your selected apps
      </h2>
      <p className="mb-8 text-sm text-gray-500">
        Point your camera at the QR code to access your curated app collection
      </p>

      <div className="p-4 mx-auto mt-0 mb-8 bg-white rounded-lg h-[200px] shadow-[0_1px_3px_rgba(0,0,0,0.1)] w-[200px]">
        <div className="bg-contain bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=')] size-full" />
      </div>

      <div className="flex flex-col gap-3 mx-auto my-0 max-w-[400px] max-sm:w-full">
        <ActionButton
          icon="ti-copy"
          text="Copy App List URL"
          onClick={handleCopyUrl}
        />
        <ActionButton
          icon="ti-share"
          text="Share with Friends"
          onClick={handleShare}
        />
        <ActionButton
          icon="ti-download"
          text="Download as Text/Image"
          onClick={handleDownload}
          variant="primary"
        />
      </div>
    </section>
  );
}

export default QrCodeSection;

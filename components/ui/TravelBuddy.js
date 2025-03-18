"use client";
import React from "react";
import QrCodeSection from "./QrCodeSection";
import AppList from "./AppList";

function TravelBuddy() {
  return (
    <main className="p-5 mx-auto my-0 bg-white max-w-[800px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <header className="mb-10 text-center">
        <h1 className="mb-2 text-3xl font-semibold text-black">Travel Buddy</h1>
        <p className="text-base text-gray-500">Your travel apps companion</p>
      </header>

      <QrCodeSection />

      <AppList />
    </main>
  );
}

export default TravelBuddy;

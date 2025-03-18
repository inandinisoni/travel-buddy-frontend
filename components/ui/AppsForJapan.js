"use client";
import React, { useState } from "react";
import AppCategoryFilter from "./AppCategoryFilter";
import AppItem from "./AppItem";

const AppsForJapan = ({ onGenerateQRCode }) => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Basic Needs",
    "Productivity",
    "Entertainment",
    "Transport",
    "Social",
  ];

  const apps = [
    {
      id: 1,
      name: "LINE",
      description:
        "Essential messaging app in Japan for communication and payments",
      color: "bg-green-600",
      category: "Social",
    },
    {
      id: 2,
      name: "Japan Transit Planner",
      description: "Navigate Japan's complex transit system with ease",
      color: "bg-emerald-500",
      category: "Transport",
    },
    {
      id: 3,
      name: "Japanese Translator",
      description: "Real-time translation with offline support",
      color: "bg-red-500",
      category: "Basic Needs",
    },
  ];

  const filteredApps =
    selectedCategory === "All"
      ? apps
      : apps.filter((app) => app.category === selectedCategory);

  const handleSelectApp = (appId) => {
    if (selectedApps.includes(appId)) {
      setSelectedApps(selectedApps.filter((id) => id !== appId));
    } else {
      setSelectedApps([...selectedApps, appId]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedApps(filteredApps.map((app) => app.id));
    } else {
      setSelectedApps([]);
    }
  };

  const isAllSelected =
    filteredApps.length > 0 &&
    filteredApps.every((app) => selectedApps.includes(app.id));

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="p-5 mx-auto my-0 bg-white max-w-[1200px] max-md:max-w-[991px] max-sm:p-4 max-sm:max-w-screen-sm">
        <header className="flex items-center mb-5">
          <button className="p-2 cursor-pointer" aria-label="Go back">
            <i className="ti ti-arrow-left text-stone-500" />
          </button>
          <h1 className="grow ml-2 text-base font-semibold">Apps for Japan</h1>
          <p className="text-sm text-stone-500">
            Selected: {selectedApps.length}
          </p>
        </header>

        <AppCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="flex gap-2 items-center mx-0 my-4 text-sm text-stone-500">
          <input
            type="checkbox"
            id="select-all-checkbox"
            checked={isAllSelected}
            onChange={handleSelectAll}
          />
          <label htmlFor="select-all-checkbox">
            Select All {selectedCategory !== "All" ? selectedCategory : "Basic"}{" "}
            Apps
          </label>
        </div>

        <section className="flex flex-col gap-3">
          {filteredApps.map((app) => (
            <AppItem
              key={app.id}
              app={app}
              isSelected={selectedApps.includes(app.id)}
              onSelect={() => handleSelectApp(app.id)}
            />
          ))}
        </section>

        <button
          className="p-3 mt-5 font-medium text-center text-white bg-blue-500 rounded-lg cursor-pointer w-full"
          onClick={onGenerateQRCode}
        >
          Generate QR Code
        </button>
      </main>
    </>
  );
};

export default AppsForJapan;

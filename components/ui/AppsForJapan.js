'use client';

import React, { useState } from "react";
import AppCategoryFilter from "./AppCategoryFilter";
import AppItem from "./AppItem";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"; // Import Heroicons

const AppsForJapan = ({ onGenerateQRCode }) => {
  const [selectedApps, setSelectedApps] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedApps, setExpandedApps] = useState({}); // Track expanded apps

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
      shortDescription: "Messaging & payments app in Japan.",
      description:
        "Essential messaging app in Japan for communication and payments.",
      color: "bg-green-600",
      category: "Social",
      screenshots: ["/images/line1.png", "/images/line2.png"],
      reviews: ["Very popular in Japan!", "Best app for payments & chat."],
    },
    {
      id: 2,
      name: "Japan Transit Planner",
      shortDescription: "Navigate Japan's complex transit system with ease.",
      description:
        "A powerful tool for finding the best routes across Japan’s vast transportation network, including trains, buses, and subways.",
      color: "bg-emerald-500",
      category: "Transport",
      screenshots: ["/images/transit1.png"],
      reviews: ["Lifesaver for tourists!", "Accurate and fast."],
    },
    {
      id: 3,
      name: "Japanese Translator",
      shortDescription: "Real-time translation with offline support.",
      description:
        "A reliable translation app that supports voice input, text translations, and offline mode for when you don’t have internet.",
      color: "bg-red-500",
      category: "Basic Needs",
      screenshots: [],
      reviews: ["Helpful for non-Japanese speakers!", "Easy to use."],
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

  // Toggle expand/collapse for each app card
  const toggleExpand = (appId) => {
    setExpandedApps((prev) => ({
      ...prev,
      [appId]: !prev[appId], // Toggle only the clicked app
    }));
  };

  return (
    <>
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
            <div
              key={app.id}
              className="border rounded-lg p-4 shadow-md transition-all duration-300"
            >
              {/* Header: Checkbox + Dropdown beside Checkbox */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedApps.includes(app.id)}
                    onChange={() => handleSelectApp(app.id)}
                  />

                  {/* App Name */}
                  <div>
                    <h3 className="text-lg font-semibold">{app.name}</h3>
                    <p className="text-sm text-gray-500">{app.shortDescription}</p>
                  </div>

                  {/* Dropdown Arrow (Beside Checkbox) */}
                  <button
                    onClick={() => toggleExpand(app.id)}
                    className="ml-2 p-2 rounded-full hover:bg-gray-200 transition"
                  >
                    {expandedApps[app.id] ? (
                      <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
              </div>

              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedApps[app.id] ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-3 border-t pt-3">
                  <p className="text-gray-600">{app.description}</p>

                  {/* Screenshots */}
                  {app.screenshots.length > 0 && (
                    <div className="mt-2 flex gap-2">
                      {app.screenshots.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt="Screenshot"
                          className="w-20 h-20 rounded-md shadow-md"
                        />
                      ))}
                    </div>
                  )}

                  {/* User Reviews */}
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold">User Reviews:</h3>
                    <ul className="list-disc ml-4 text-gray-700">
                      {app.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

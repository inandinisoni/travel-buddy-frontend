import React from "react";

const PopularDestinations = () => {
  const destinations = ["United States", "United Kingdom", "France", "Japan"];

  return (
    <section className="mt-8">
      <h3 className="mb-4 text-sm text-gray-500">Popular destinations</h3>
      <div className="flex flex-wrap gap-4">
        {destinations.map((destination, index) => (
          <button key={index} className="text-sm text-gray-600 cursor-pointer">
            {destination}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;

import React from "react";

function AppList() {
  const apps = [
    { icon: "ti-map", name: "Maps App" },
    { icon: "ti-plane", name: "Flight Tracker" },
    { icon: "ti-building", name: "Hotel Booking" },
  ];

  return (
    <section className="mt-10">
      <h3 className="mb-4 text-base font-semibold text-black">Selected Apps</h3>
      <div className="flex gap-6 justify-start max-sm:flex-col max-sm:gap-4">
        {apps.map((app, index) => (
          <AppItem key={index} icon={app.icon} name={app.name} />
        ))}
      </div>
    </section>
  );
}

function AppItem({ icon, name }) {
  return (
    <div className="flex gap-2 items-center text-sm text-gray-600">
      <i className={`${icon} text-xl`} />
      <span>{name}</span>
    </div>
  );
}

export default AppList;

'use client';
import React from 'react';
import TravelTip from './TravelTip';

function LocalTravelTips() {
  const tips = [
    {
      icon: 'ti-language',
      title: 'Language Tips',
      description:
        'Basic French phrases will be helpful. English is widely spoken in tourist areas.',
    },
    {
      icon: 'ti-currency-euro',
      title: 'Currency',
      description: 'Euro is the local currency. Cards are widely accepted.',
    },
    {
      icon: 'ti-clock',
      title: 'Best Times',
      description:
        'Tourist attractions are less crowded early morning or late evening.',
    },
    {
      icon: 'ti-train',
      title: 'Transportation',
      description:
        'Metro is the fastest way to travel. Consider getting a travel pass.',
    },
  ];

  return (
    <section className="p-6 bg-white rounded-xl">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">
        Local Travel Tips
      </h2>
      <div className="grid gap-4 grid-cols-[repeat(2,1fr)] max-md:gap-3 max-md:grid-cols-[1fr]">
        {tips.map((tip, index) => (
          <TravelTip
            key={index}
            icon={tip.icon}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </div>
    </section>
  );
}

export default LocalTravelTips;
'use client';
import React from 'react';

function AppCard({ icon, name }) {
  return (
    <article className="flex flex-1 gap-3 items-center p-4 rounded-lg border border-gray-200 border-solid">
      <i className={`${icon} text-2xl text-gray-700`} aria-hidden="true" />
      <span className="text-sm text-gray-700">{name}</span>
    </article>
  );
}

export default AppCard;
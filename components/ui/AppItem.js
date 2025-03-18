import React from "react";

const AppItem = ({ app, isSelected, onSelect }) => {
  const { name, description, color } = app;

  return (
    <article className="flex items-center p-4 bg-white rounded-lg border border-solid max-sm:p-3">
      <div
        className={`mr-4 w-10 h-10 ${color} rounded-xl max-sm:mr-3 max-sm:w-8 max-sm:h-8`}
        aria-hidden="true"
      />
      <div className="grow">
        <h2 className="mb-1 font-medium">{name}</h2>
        <p className="text-sm text-stone-500 max-sm:text-sm">{description}</p>
      </div>
      <div className="ml-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          aria-label={`Select ${name}`}
        />
      </div>
    </article>
  );
};

export default AppItem;

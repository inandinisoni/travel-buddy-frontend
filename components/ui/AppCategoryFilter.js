import React from "react";

const AppCategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <nav className="flex overflow-x-auto gap-3 px-0 py-1 mb-5 max-sm:gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 text-sm whitespace-nowrap rounded-3xl cursor-pointer max-sm:px-3 max-sm:py-1.5 max-sm:text-sm ${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "text-stone-500"
          }`}
          onClick={() => onCategoryChange(category)}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default AppCategoryFilter;

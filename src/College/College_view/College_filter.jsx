import React, { useState } from "react";

function CollegeFilter() {
  const filters = [
    { label: "Info" },
    { label: "Course & Fees" },
    { label: "Reviews" },
    { label: "Placement" },
    { label: "Gallery" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full px-4 sm:px-20 py-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Filter Buttons (Visible on Larger Screens) */}
        <div className="hidden lg:flex space-x-48">
          {filters.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center justify-between p-3">
        <h2 className="text-lg font-semibold">Filter</h2>

        <button
          className="text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-fit bg-white shadow-md rounded-md flex flex-col p-4 space-y-3 z-50 transition-all duration-300 ease-in-out">
          {filters.map((item, index) => (
            <a
              key={index}
              href="/"
              className="block text-lg text-gray-800 px-4 py-2 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default CollegeFilter;

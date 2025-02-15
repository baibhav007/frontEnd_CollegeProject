import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full md:w-auto"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="flex justify-between items-center w-full md:w-auto px-4 py-2 text-lg md:text-xl font-medium text-gray-700 rounded-md focus:outline-none"
        onClick={toggleDropdown}
      >
        {label}
        <svg
          className={`ml-2 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 md:right-auto md:left-0 z-10 mt-2 w-full md:w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-2">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 text-lg text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="py-1 max-h-48 overflow-auto">
            {options
              .filter((option) =>
                option.toLowerCase().includes(search.toLowerCase())
              )
              .map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-lg text-gray-700"
                >
                  {option}
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Collegefilter() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filters = [
    { label: "State", options: ["Uttar Pradesh"] },
    { label: "City", options: ["Gautam Buddha Nagar"] },
    { label: "Courses", options: ["B.Tech", "BCA", "BBA"] },
    { label: "Course Duration", options: ["4 years", "3 years"] },
    { label: "Exam Accepted", options: ["JEE", "Mains", "No Required"] },
    { label: "Specialization", options: ["Computer Application"] },
  ];

  return (
    <div className="bg-slate-200 px-4">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-between text-2xl h-16 items-center px-10">
        <h2 className="border-r border-slate-400 pr-6 h-full flex items-center">
          Filter by
        </h2>
        {filters.map((filter, index) => (
          <Dropdown key={index} label={filter.label} options={filter.options} />
        ))}
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
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="h-6 w-6 right-2  "
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="h-6 w-6"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute left-0 w-full bg-white shadow-md rounded-md flex flex-col p-4 space-y-3 z-50 transition-all duration-300 ease-in-out">
          {filters.map((filter, index) => (
            <Dropdown
              key={index}
              label={filter.label}
              options={filter.options}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Collegefilter;

import React, { useState, useEffect, useCallback } from "react";
import Courses_search from "./Courses_search";
import Course_cards from "./Course_cards";
import FreeCourse_cards from "./FreeCourse_cards";

const tabs = [
  { name: "Courses", component: <Course_cards /> },
  { name: "Free Course", component: <FreeCourse_cards /> },
  { name: "Books Library" },
  { name: "Previous Year Questions" },
  { name: "Short-term Course" },
];

function CourseFilters() {
  const [showSearch, setShowSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("Courses");

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  const handleTabClick = useCallback((tabName) => {
    setActiveTab(tabName);
  }, []);

  return (
    <div>
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        {/* Course Links */}
        <div className="flex flex-wrap gap-4 text-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`hover:text-gray-500 transition duration-200 ${
                activeTab === tab.name
                  ? "border-b-2 border-gray-700 font-medium"
                  : ""
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative flex flex-col md:flex-row items-center border border-gray-100 bg-opacity-40 rounded-2xl px-4 py-2 shadow-md mt-4 md:mt-0">
          <svg
            viewBox="0 0 488.4 488.4"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6 mr-4"
          >
            <path
              d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 
            s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 
            S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 
            S381.9,104.65,381.9,203.25z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search Courses"
            className="flex-grow bg-transparent outline-none"
            onClick={() => setShowSearch(true)}
          />
          {showSearch && (
            <Courses_search onClose={() => setShowSearch(false)} />
          )}
        </div>
      </div>

      {/* Render Active Tab Content */}
      {tabs.find((tab) => tab.name === activeTab)?.component}
    </div>
  );
}

export default CourseFilters;

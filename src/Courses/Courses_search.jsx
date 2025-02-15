import React, { useEffect } from "react";
import working from "../assets/Image/working.jpeg";

function Courses_search({ onClose, inputRef }) {
  const courses = [
    { id: 1, name: "UI/UX", duration: "4 Hrs", price: "Free" },
    { id: 2, name: "UI/UX", duration: "4 Hrs", price: "Free" },
    { id: 3, name: "UI/UX", duration: "4 Hrs", price: "Free" },
  ];
  const search = ["UI/UX", "Javascript", "Java", "C++", "HTML", "CSS"];
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [inputRef]);
  return (
    <div className="fixed inset-0 flex justify-center z-50 overflow-hidden">
      <div className="relative p-10 w-full border border-blue-100 rounded-2xl justify-center shadow-lg overflow-hidden bg-blue-50">
        <div className="flex items-center justify-center mt-6">
          {/* searchbar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-7 mr-10"
            onClick={onClose}
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <div className="flex items-center border  rounded-2xl px-4 py-2 shadow-md w-[320px] sm:w-4/5 max-w-[600px]">
            <svg
              fill="currentcolor"
              viewBox="0 0 488.4 488.4"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-6"
            >
              <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search Courses"
              className="flex-grow bg-transparent outline-none text-lg "
              ref={inputRef}
            />
          </div>
        </div>
        <div>
          <div className="flex">
            {/* trending search */}
            <div className="w-1/4 pr-10">
              <h1 className="text-2xl my-6">Trending Search</h1>
              <div className="flex flex-col">
                {search.map((items) => (
                  <a
                    key={items}
                    href="#"
                    className="px-4 py-2 text-xl text-gray-600 hover:text-gray-800 transition duration-300 border-b border-gray-200 w-full"
                  >
                    {items}
                  </a>
                ))}
              </div>
            </div>
            {/* popular courses */}
            <div className="">
              <h1 className="text-4xl mt-6">Popular Courses</h1>
              <div className="mt-10 flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {courses.map((items) => (
                    <a
                      key={items.id}
                      href="#"
                      className="transform hover:scale-105 transition duration-300"
                    >
                      <div className="max-w-xs bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl">
                        <img
                          src={working}
                          className="w-full h-[220px] object-cover"
                          alt="Course"
                          loading="lazy"
                        />
                        <div className="px-6 py-4">
                          <h1 className="text-2xl font-semibold text-gray-800">
                            {items.name}
                          </h1>
                          <h2 className="text-lg text-gray-600 mt-2">
                            Duration: {items.duration}
                          </h2>
                          <p className="mt-4 text-sm text-gray-500 drop-shadow-lg">
                            Learn For {items.price}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 text-xl">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
              onClick={onClose}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses_search;

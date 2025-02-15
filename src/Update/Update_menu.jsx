import React from "react";

function UpdateMenu({ onClosed }) {
  const updateexam = [
    {
      id: 1,
      university: "CCSU",
      name: "New Exam Schedule after 21 March",
    },
    {
      id: 2,
      university: "AKTU",
      name: "Change in Examination Timetable",
    },
    {
      id: 3,
      university: "CCSU",
      name: "Change in Examination Fees",
    },
  ];

  return (
    <div>
      <div className="fixed inset-0 overflow-auto scrollbar-hide bg-white rounded-2xl shadow-lg z-50 h-[500px] sm:h-[480px] w-[360px] mx-2 sm:w-96 mt-20 ml-auto mr-10 ">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-4 rounded-t-2xl">
          <h1 className="text-2xl font-semibold">Updates</h1>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 right-4 cursor-pointer h-6 w-6 text-white"
            onClick={onClosed}
            tabIndex={0}
            role="button"
            aria-label="Close menu"
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.68342 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4">
          {updateexam.map((update) => (
            <div
              key={update.id}
              className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              <h2 className="font-bold text-lg">{update.university}</h2>
              <p className="text-gray-700">{update.name}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-300 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            Mark as Read
          </button>
          <a href="/update">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
              Visit Page
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpdateMenu;

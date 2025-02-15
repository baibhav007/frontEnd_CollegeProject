import React, { useState } from "react";
import formbg from "../assets/Image/formbg.jpg";

function Visit_form({ selectedHostel, onClose, rooms }) {
  const college = [{ names: "IIMT Group of College" }];
  const beds = [
    { beds: "Single beds" },
    { beds: "Double beds" },
    { beds: "Triple beds" },
  ];
  const gender = [{ gender: "Male" }, { gender: "Female" }];
  const budgets = [
    { budgets: "Less" },
    { budgets: "6,000" },
    { budgets: "7,000" },
    { budgets: "8,000" },
    { budgets: "9,000" },
    { budgets: "10,000" },
    { budgets: "More" },
  ];
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 px-4">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl bg-blue-100 rounded-2xl shadow-xl overflow-hidden">
        {/* Background Image */}
        <img
          src={formbg}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        {/* Form Content */}
        <div className="relative flex flex-col items-center w-full px-6 py-8 overflow-auto max-h-[90vh]">
          {/* Close Button */}
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fixed sm:absolute top-10 sm:top-4 right-6 sm:right-4 cursor-pointer sm:h-8 h-6 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.68342 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>

          {/* Title */}
          <div className="fixed sm:relative drop-shadow-2xl ">
            <h1 className="text-2xl font-bold text-gray-800">Visits</h1>
            <div className="w-[60px] border-b-2 border-gray-300 mb-4"></div>
          </div>

          {/* Form Fields */}
          <div className="mt-10 sm:mt-0 w-full space-y-4 text-lg">
            {/* Hostel Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Applying to:</label>
              <select
                name="college"
                id="college"
                className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none"
                defaultValue={selectedHostel}
              >
                {rooms.map((room) => (
                  <option key={room.id} value={room.name}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* College Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">College Name:</label>
              <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none">
                {college.map((item, index) => (
                  <option key={index} value={item.names}>
                    {item.names}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter Full Name"
              />
            </div>

            {/* Email & Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="mobilenumber"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>

            {/* Bed Requirement & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  Required for
                </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none">
                  {gender.map((item, index) => (
                    <option key={index} value={item.beds}>
                      {item.gender}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  Bed Requirement
                </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none">
                  {beds.map((item, index) => (
                    <option key={index} value={item.beds}>
                      {item.beds}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 font-medium">Budget</label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring focus:ring-blue-300 focus:outline-none">
                  {budgets.map((item, index) => (
                    <option key={index} value={item.budgets}>
                      {item.budgets}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Selection */}
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium">Select a Date</label>
              <input
                type="date"
                name="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
              />
              {selectedDate && (
                <p className="text-sm text-gray-500">
                  Selected Date: {new Date(selectedDate).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 focus:ring focus:ring-blue-300 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit_form;

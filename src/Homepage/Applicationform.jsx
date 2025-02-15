import React, { useState } from "react";
import formbg from "../assets/Image/formbg.jpg";

function Applicationform({ onClose }) {
  const options = ["Yes", "No"];
  const [is12thPass, setIs12thPass] = useState(false);
  const handle12thPassChange = (event) => {
    setIs12thPass(event.target.value === "Yes");
  };
  const colleges = ["IIMT", "Glb", "mgc"];

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 overflow-hidden">
      <div className="relative w-fit max-w-[700px] sm:w-[700px] h-[490px] rounded-2xl shadow-lg overflow-hidden">
        <img
          src={formbg}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative flex flex-col items-center w-full px-4 sm:px-6 py-6 sm:py-8">
          {/* Close Button */}
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-2 sm:top-4 right-2 sm:right-4 cursor-pointer h-6 sm:h-8 w-6 sm:w-8 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <path
              d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.68342 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
              fill="currentColor"
            />
          </svg>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
            Application for College Admission
          </h1>
          <div className="w-full border-b-2 border-gray-300 mb-4"></div>

          {/* Form Fields */}
          <div className="w-full space-y-3 sm:space-y-4 text-base sm:text-lg">
            {/* College Name */}
            <p className="text-lg font-medium">
              Applying to:{" "}
              <select
                name="college"
                id="college"
                className="bg-transparent text-blue-600 focus:outline-none"
              >
                {colleges.map((college, index) => (
                  <option key={index}>{college}</option>
                ))}
              </select>
            </p>

            {/* Full Name */}
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="text-gray-600 font-medium text-left"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Enter Full Name"
              />
            </div>

            {/* Email and Mobile Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-gray-600 font-medium text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="applicationemail"
                  name="email"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mobilenumber"
                  className="text-gray-600 font-medium text-left"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobilenumber"
                  name="mobilenumber"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>

            {/* Academic Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="12thpass" className="text-gray-600 font-medium">
                  12th Pass
                </label>
                <div className="flex gap-4 items-center">
                  {options.map((item, index) => (
                    <label key={index} className="flex items-center gap-1">
                      <input
                        type="radio"
                        id={`12thpass-${item}`}
                        name="12thpass"
                        value={item}
                        onChange={handle12thPassChange}
                        className="border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none"
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* 12th Percentage */}
              {is12thPass && (
                <div className="flex flex-col">
                  <label
                    htmlFor="12thpercentage"
                    className="text-gray-600 font-medium"
                  >
                    12th Percentage
                  </label>
                  <input
                    type="text"
                    id="12thpercentage"
                    name="12thpercentage"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Enter 12th Percentage"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button className="w-full py-3 mt-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400 focus:ring focus:ring-blue-300 focus:outline-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicationform;

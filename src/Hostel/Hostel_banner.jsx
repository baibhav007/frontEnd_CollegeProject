import React from "react";

function Hostel_banner() {
  return (
    <div className="w-full bg-slate-300">
      <div className="flex flex-col h-48 m-auto items-center justify-center">
        {/* Title */}
        <h1 className="text-center mb-4 text-3xl md:text-4xl font-semibold">
          Hostels
        </h1>

        {/* Search Bar */}
        <div className="flex items-center bg-yellow-500 rounded-2xl px-3 py-2 shadow-md w-11/12 max-w-[800px]">
          {/* Search Icon */}
          <svg
            fill="white"
            viewBox="0 0 488.4 488.4"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6"
          >
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
          </svg>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search Hostels nearby College"
            className="flex-grow bg-transparent outline-none text-white placeholder-white text-lg px-2  w-full sm:w-auto"
          />

          {/* Dropdown */}
          {/* <select className="ml-2 bg-transparent outline-none text-lg text-white px-2 w-32 sm:w-auto border-l border-white">
            <option value="iimtcollege" className="text-black">
              IIMT College
            </option>
          </select> */}
        </div>
      </div>
    </div>
  );
}

export default Hostel_banner;

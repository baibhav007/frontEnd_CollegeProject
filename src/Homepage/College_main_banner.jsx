import React from "react";
import College from "../assets/Image/iimt.png";

function College_main_banner() {
  return (
    <>
      <div>
        <div className="relative flex items-center justify-center h-[450px] w-fit sm:w-auto sm:h-[660px] mx-1 sm:mx-5 rounded-3xl overflow-hidden drop-shadow-md mt-2">
          <img
            src={College}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col items-center mt-5 text-white p-4 gap-6">
            <h4 className="text-xl sm:text-2xl">Welcome to my site</h4>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center tracking-wider">
              Your Education <br /> Journey
            </h1>

            <div className="flex items-center border border-gray-100 bg-opacity-40 rounded-2xl px-4 py-2 shadow-md w-[320px] sm:w-4/5 max-w-[600px]">
              <svg
                fill="white"
                viewBox="0 0 488.4 488.4"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-6"
              >
                <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
              </svg>
              <input
                type="text"
                placeholder="Search College"
                className="flex-grow bg-transparent outline-none text-white placeholder-white text-lg "
              />
              {/* <select className="sm:ml-2 bg-transparent outline-none text-sm sm:text-lg text-white border-l border-white">
                <option value="state1">Greater Noida</option>
                <option value="state2">Noida</option>
                <option value="state3">Delhi NCR</option>
              </select> */}
            </div>
            <div className="text-center md:mt-44">
              <p className="sm:text-4xl text-2xl mb-2">
                Transforming dream into reality, one student at a time!
              </p>
              <p className="sm:text-xl text-md mb-2">
                Join us for an unforgettable educational experience
              </p>
              <a href="/college">
                <button className="px-6 py-2 sm:text-lg text-md text-black bg-white rounded-2xl shadow-md hover:bg-gray-100">
                  Explore Colleges
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default College_main_banner;

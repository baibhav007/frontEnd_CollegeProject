import React from "react";
import college from "../assets/Image/iimt.png";

function Banner_nine() {
  return (
    <div className="mx-4 sm:mx-10 my-5">
      <div className="text-2xl sm:text-4xl text-center mb-5 font-semibold">
        <h1>College/Campus</h1>
      </div>
      <div className="relative max-w-auto mx-auto overflow-hidden rounded-2xl">
        <img
          src={college}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <h2 className="absolute inset-0 flex items-end justify-center text-white text-xl sm:text-4xl md:text-5xl font-bold bottom-4 sm:bottom-10">
          Experience the thrill
        </h2>
      </div>
    </div>
  );
}

export default Banner_nine;

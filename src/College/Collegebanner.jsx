import React from "react";
import collegeimg from "../assets/Image/iimt.png";

function Collegebanner() {
  return (
    <div className="relative">
      <img
        src={collegeimg}
        className="w-full h-52 object-cover"
        alt="IIMT College"
      />
      <div className="absolute inset-0 bg-opacity-50 flex items-end justify-end pr-6">
        <h1 className="text-white text-3xl font-bold">
          IIMT Group of Colleges
        </h1>
      </div>
    </div>
  );
}

export default Collegebanner;

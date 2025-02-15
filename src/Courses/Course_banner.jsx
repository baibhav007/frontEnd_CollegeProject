import React from "react";
import coursemain from "../assets/Image/coursemain.png";
function Course_banner() {
  return (
    <div>
      {/* <div className="flex flex-col h-20 m-auto items-center justify-center border-b bg-yellow-300 border-gray-100 ">
        <h1 className="flex flex-col items-center justify-center text-4xl">
          Course
        </h1>
      </div> */}
      <div className="flex flex-col sm:flex-row justify-center item-center bg-blue-100 ">
        <div className="flex flex-col w-3/4 m-auto justify-center items-center gap-8">
          <h2 className="sm:text-2xl lg:text-3xl">
            Looking for Job-oriented program?
          </h2>
          <h1 className="text-2xl sm:text-4xl">
            Enroll in College91{" "}
            <span className="text-yellow-400">Carrer Program</span>
          </h1>
          <button className="p-2 w-60 border rounded-xl border-black text-xl">
            Placement Guidance
          </button>
          <button className="p-1 bg-blue-500 text-white w-36 rounded-lg">
            Know more
          </button>
        </div>
        <div className="w-auto sm:w-1/4 sm:mr-10 mt-5 m-5 ">
          <img src={coursemain} className="rounded-lg" />
        </div>
      </div>
      <hr className="border-b border-gray-100 drop-shadow-sm" />
    </div>
  );
}

export default Course_banner;

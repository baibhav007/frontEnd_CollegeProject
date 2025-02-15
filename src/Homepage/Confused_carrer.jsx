import React from "react";

function Confused_carrer() {
  return (
    <div>
      {/*Confused about the best carrer choice for you?  */}
      <div className="md:flex justify-center items-center bg-yellow-100 sm:p-10 p-4 mt-5">
        <div className="md:w-3/4 ">
          <h1 className="text-2xl md:text-5xl mb-2 font-bold">
            Confused about the best carrer choice for you?
          </h1>
          <p className="sm:text-2xl text-lg">
            Discovered your path with carrer compass, Our personality career
            recommendation tool. Explore your Skills,personality and interested
            for the carrer advice and guidance designed for your.
          </p>
        </div>
        <div className="md:w-1/4 mt-7 md:p-1 p-2 bg-yellow-400 text-center text-2xl rounded-xl ">
          <a href="#">Get Carrer Recommendation</a>
        </div>
      </div>
      {/* Ask questions */}
      <div className="bg-black sm:px-10 px-3 py-4 text-white">
        <h1 className="text-xl md:text-3xl sm:m-2 m-1">
          Get our experts to answer your questions within 24 Hours
        </h1>
        <div className="relative mx-auto">
          <input
            type="text"
            placeholder="Write your questions here ..."
            className="w-full px-4 py-2 border text-black bg-white border-gray-300 rounded-full pr-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-yellow-500">
            Ask questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confused_carrer;

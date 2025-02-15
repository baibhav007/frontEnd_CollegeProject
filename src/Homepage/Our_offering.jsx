import React from "react";
import book from "../assets/Image/Books.png";

function Our_offering() {
  return (
    <div className="my-10 flex justify-center">
      <div className="w-full max-w-6xl mx-auto rounded-3xl p-6 sm:p-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left text-gray-800">
          Explore More
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-center my-10 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center space-y-4">
            <p className="text-5xl md:text-6xl font-extrabold text-blue-600 leading-tight">
              Our <br /> Offering
            </p>
            <p className="text-lg sm:text-xl md:w-96 mx-auto md:mx-0 text-gray-700">
              From real-time updates to a vast library, we have everything to
              make your academic life easier and more enjoyable!
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* Navigation Buttons */}
            <div
              className="flex w-full sm:w-auto px-6 py-3 rounded-2xl bg-white shadow-md 
                          text-lg sm:text-xl justify-around sm:justify-between 
                          space-x-3 sm:space-x-8 text-center mb-4 transition-all duration-300"
            >
              <a href="/update" className="hover:text-blue-600 font-medium">
                Update
              </a>
              <a href="#" className="hover:text-blue-600 font-medium">
                Feedback
              </a>
              <a href="#" className="hover:text-blue-600 font-medium">
                Help
              </a>
              <a href="/course" className="hover:text-blue-600 font-medium">
                Courses
              </a>
            </div>

            {/* Image */}
            <img
              src={book}
              className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] p-2 rounded-lg hover:scale-105 transition-transform duration-300"
              loading="lazy"
              alt="Books"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Our_offering;

import React from "react";
import college from "../../../public/college_view.json";
function College_banner() {
  return (
    <div>
      {college.map((items, index) => (
        <div key={index} className="relative">
          <img
            src={items.collegeimg}
            className="h-40 w-full object-cover"
            alt="College"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col md:flex-row items-center text-white justify-between p-4 md:p-0">
            <div className="flex flex-row gap-3 sm:ml-16 lg:ml-32 text-center md:text-left items-center md:items-start">
              <img
                src={items.collegelogo}
                className="h-12 md:h-16 w-auto"
                alt="Logo"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl text-yellow-50">
                  {items.name}
                </h1>
                <p className="text-sm md:text-base">{items.details}</p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center md:items-end mt-3 md:mt-0 md:mr-10 gap-3">
              {/* Rating */}
              <div className="flex gap-2 items-center">
                <h1 className="text-base lg:text-2xl md:text-xl">4.1</h1>
                <div>
                  {Array(5)
                    .fill("★")
                    .map((star, index) => (
                      <span key={index} className="text-yellow-500 text-base">
                        {star}
                      </span>
                    ))}
                </div>
              </div>
              <button className="px-3 py-1 text-sm lg:text-lg border rounded-3xl shadow-md">
                Get Contact Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default College_banner;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import locationicon from "../assets/Image/location.png";
import Applicationform from "./Applicationform";

function Collegecards() {
  const [colleges, setColleges] = useState([]);
  const navigate = useNavigate();
  const fileUrl = `${import.meta.env.BASE_URL}college_card.json`;

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const handleViewCollege = (college) => {
    navigate(`/college/${college.name}`, { state: { college } });
  };

  return (
    <div className="px-4 sm:px-10 py-10 bg-gray-50">
      {colleges.map((college) => (
        <div
          key={college.id}
          className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden my-8"
        >
          {/* College Image */}
          <div className="h-80 w-full md:w-2/5">
            <img
              src={college.image}
              className="h-64 md:h-full w-full object-cover"
              alt={`${college.name} Image`}
            />
          </div>

          {/* College Details */}
          <div className="w-full md:w-3/5 p-6 flex flex-col lg:flex-row justify-between">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src={college.logo}
                  className="h-12 w-12 rounded-full border-2 border-gray-300 mr-4"
                  alt={`${college.name} Logo`}
                />
                <h1 className="text-2xl font-bold text-gray-800">
                  {college.name}
                </h1>
              </div>
              <p className="text-lg text-gray-700 font-medium mb-2">
                {college.firstYearFee}
              </p>
              <div className="flex gap-4 text-lg text-gray-600 mb-4">
                <p className="bg-green-200 px-4 py-1 rounded-lg text-green-800 font-semibold">
                  {college.placementrating} ⭐ Placement
                </p>
                <p className="border-l pl-4">
                  {college.placementcompany} Companies
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Courses: B.Tech & more
              </p>
              <div className="flex items-center text-lg text-gray-600">
                <img
                  src={locationicon}
                  className="h-6 mr-2"
                  alt="Location Icon"
                />
                <p>{college.location}</p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-6 flex flex-col gap-3 ">
              <button
                className="w-full px-6 py-3 text-lg text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
                onClick={() => {
                  setSelectedCollege(college.name);
                  setShowForm(true);
                }}
              >
                Apply Admission
              </button>
              {showForm && (
                <Applicationform
                  selectedCollege={selectedCollege}
                  onClose={() => setShowForm(false)}
                  colleges={colleges}
                />
              )}
              <button className="w-full sm:w-80 px-6 py-3 text-lg border border-gray-300 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
                Download Brochure
              </button>
              <button
                className="w-full sm:w-80 px-6 py-3 text-lg border border-gray-300 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
                onClick={() => handleViewCollege(college)}
              >
                View College
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collegecards;

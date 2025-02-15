import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import working from "../assets/Image/working.jpeg";

function FreeCourse_cards() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  // Fetch JSON data
  useEffect(() => {
    fetch("/course_view.json")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/course/${id}`); // Navigate using course ID
  };

  return (
    <div className="mt-10">
      <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => handleCardClick(course.id)}
          >
            <div className="max-w-xs bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl">
              <img
                src={working}
                className="w-full h-[220px] object-cover"
                alt="Course"
                loading="lazy"
              />
              <div className="px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {course.name}
                </h1>
                <h2 className="text-lg text-gray-600 mt-2">
                  Duration: {course.duration}
                </h2>
                <p className="mt-4 text-sm text-gray-500 drop-shadow-lg">
                  Learn For {course.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 text-xl">
        <button className="border px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default FreeCourse_cards;

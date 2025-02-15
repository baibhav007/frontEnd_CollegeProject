import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import working from "../assets/Image/working.jpeg";
import certificate from "../assets/Image/certificate.png";
import Navbar from "../Homepage/Navbar";
import Confused_carrer from "../Homepage/Confused_carrer";
import Footer from "../Homepage/Footer";

function Course_views() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const fileUrl = `${import.meta.env.BASE_URL}course_view.json`;

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.json())
      .then((data) => {
        const course = data.find((item) => item.id === parseInt(id));
        setSelectedCourse(course);
      })
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  if (!selectedCourse) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold">Course Not Found</h2>
        <button
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
          onClick={() => navigate("/course")}
        >
          Go Back
        </button>
      </div>
    );
  }
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-50">
      <Navbar />
      <div className="mx-10 my-5 sm:my-0 sm:flex items-center">
        <div className="m-auto">
          <h1 className="text-3xl lg:text-6xl">
            Learn to Program: {selectedCourse.learnigto}
          </h1>
          <div className="flex flex-col items-center mt-8 text-xl">
            <button className="border px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
              Enroll for <br /> {selectedCourse.price}
            </button>
            <p className="mt-2 text-sm">{selectedCourse.alreadyregistered}</p>
          </div>
        </div>
        <div className="-mx-2 sm:mx-0 md:w-96 w-80 lg:w-96 md:ml-auto md:mr-10 mt-10 p-6 bg-gradient-to-b from-green-100 to-gray-200  shadow-lg rounded-lg border border-gray-400">
          <img
            src={working}
            className="w-full h-[200px] object-cover rounded-lg"
            alt="Course"
          />
          <h1 className="text-4xl font-bold mt-4">{selectedCourse.name}</h1>
          <div className="flex justify-between">
            <p className="flex items-center text-lg text-gray-600 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 mr-2"
              >
                <path d="M12 1.75C6.07 1.75 1.25 6.57 1.25 12.5S6.07 23.25 12 23.25 22.75 18.43 22.75 12.5 17.93 1.75 12 1.75Zm0 19c-4.55 0-8.25-3.7-8.25-8.25S7.45 4.25 12 4.25 20.25 7.95 20.25 12.5 16.55 20.75 12 20.75Zm.5-14h-1v6l4.5 2.7.5-.87-4-2.33V6.75Z"></path>
              </svg>
              {selectedCourse.duration}
            </p>
            <p className="text-lg text-gray-600 mt-2">
              {selectedCourse.classtype}
            </p>
          </div>
          <p className="flex items-center text-xl text-gray-600 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 mr-2"
            >
              <path d="M17 10.5V7a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.5l4 3v-9l-4 3z"></path>
            </svg>{" "}
            {selectedCourse.videoquantity}
          </p>
          <p className="text-md text-gray-600 mt-4">
            <span className="font-bold">Skill you'll gain:</span>{" "}
            {selectedCourse.skillgain}
          </p>
        </div>
      </div>
      <div className="md:flex mx-5 items-center text-pretty text-2xl md:text-2xl lg:text-3xl my-5">
        <h1 className="text-center ">Skills you'll gain:</h1>
        <p className="ml-0 sm:ml-2">{selectedCourse.skillgain}</p>
      </div>
      {/* certificate */}
      <div className="sm:flex items-center justify-between bg-blue-50 p-6 rounded-lg shadow-md mt-10 sm:pb-20">
        <div className="h-96 sm:h-auto border w-full md:mx-6 lg:mx-20 px-10 py-4 rounded-2xl">
          <h2 className="text-xl lg:text-3xl font-semibold">
            Earn a Certificate:
          </h2>
          <p className="text-gray-700 mt-2 lg:text-xl">
            Add this certificate to your LinkedIn profile.
            <br />
            Share it on social media and in your performance review.
          </p>
        </div>
        <img
          src={certificate}
          alt="Certificate"
          className="w-72 lg:w-96 h-auto absolute m-auto sm:right-10 lg:right-28 sm:mb-4 -mt-56 sm:mt-0 text-yellow-500 text-3xl "
        />
      </div>
      {/* syllabus */}
      <div className="max-w-3xl mx-4 md:mx-auto mt-20">
        <h1 className="text-3xl text-center mb-6">Syllabus</h1>
        {selectedCourse.rating.map((item, index) => (
          <div
            key={index}
            className="mb-2 rounded-lg shadow-md bg-white cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <h2 className="text-xl">{item.question}</h2>
              <span className="text-2xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-4 bg-gray-50 rounded-lg">
                <p className="md:text-base text-xl">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default Course_views;

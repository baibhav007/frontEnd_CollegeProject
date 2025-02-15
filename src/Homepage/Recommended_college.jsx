import React from "react";
import College from "../assets/Image/iimt.png";
import Collegelogo from "../assets/Image/iimtlogo.png";
import Rating from "../assets/Image/rating.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function RecommendedCollege() {
  const collegeSliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };

  const courseSliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 1, autoplay: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3, slidesToScroll: 1, autoplay: true },
      },
    ],
  };

  const courses = [
    "All",
    "B.Tech",
    "M.Tech",
    "BCA",
    "BBA",
    "MCA",
    "MBA",
    "Diploma",
    "B.Pharma",
  ];

  const colleges = [
    {
      id: 1,
      name: "IIMT Group of Colleges",
      logo: Collegelogo,
      image: College,
      program: "B.Tech/M.Tech",
      firstYearFee: "₹1.5 Lac",
      rating: "3.5/5",
      rank: "118 out of 1400 QS",
    },
    {
      id: 2,
      name: "IIMT University",
      logo: Collegelogo,
      image: College,
      program: "B.Tech/MBA",
      firstYearFee: "₹2.0 Lac",
      rating: "4.0/5",
      rank: "98 out of 1400 QS",
    },
    {
      id: 3,
      name: "IIMT Engineering College",
      logo: Collegelogo,
      image: College,
      program: "B.Tech/M.Tech",
      firstYearFee: "₹1.5 Lac",
      rating: "4.2/5",
      rank: "105 out of 1400 QS",
    },
  ];

  return (
    <div className="mx-4 sm:mx-10 my-4 sm:my-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
        🎓 Recommended Colleges
      </h1>

      {/* Course Filter Slider */}
      <div className="w-full mb-8">
        <Slider {...courseSliderSettings} className="space-x-4">
          {courses.map((course, index) => (
            <div key={index} className="px-2">
              <a
                href="#"
                className="block px-5 py-2 text-sm sm:text-base md:text-lg font-medium text-center border border-gray-400 
                          rounded-full bg-white shadow-md transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-indigo-500 
                          hover:text-white hover:shadow-lg active:scale-95"
              >
                {course}
              </a>
            </div>
          ))}
        </Slider>
      </div>
      {/* College Cards Slider */}
      <div className="relative w-full">
        <Slider {...collegeSliderSettings} className="">
          {colleges.map((college) => (
            <div key={college.id} className="p-4 ">
              <div
                className="h-full w-full lg:h-[480px] lg:w-[360px] bg-white rounded-lg shadow-xl overflow-hidden 
                              backdrop-blur-xl bg-opacity-80 border border-gray-200 transform transition-all hover:scale-[1.02]"
              >
                {/* College Image */}
                <div className="relative">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-[160px] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-90 text-white px-4 py-2 flex items-center gap-2 w-full">
                    <img
                      src={college.logo}
                      className="h-6"
                      alt="College Logo"
                      loading="lazy"
                    />
                    <a href="#" className="truncate">
                      {college.name}
                    </a>
                  </div>
                </div>
                {/* College Details */}
                <div className="p-4 border-b">
                  <p className="font-bold text-xl text-gray-900">
                    {college.program}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    First Year Fee:{" "}
                    <span className="text-blue-500">
                      {college.firstYearFee}
                    </span>
                  </p>
                </div>

                <div className="p-4 border-b flex justify-between items-center">
                  <p className="text-sm text-gray-700">
                    🏆 Ranked <b>{college.rank}</b>
                  </p>
                  <div className="flex items-center gap-1">
                    <img
                      src={Rating}
                      className="h-4"
                      alt="Rating"
                      loading="lazy"
                    />
                    <span className="text-gray-800 font-semibold">
                      {college.rating}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 flex flex-col gap-2">
                  <button
                    className="px-4 py-2 w-full rounded-lg bg-blue-500 text-white font-medium text-center 
                                     transition-all duration-300 hover:bg-indigo-600"
                  >
                    View Courses & Fees
                  </button>
                  <button
                    className="px-4 py-2 w-full rounded-lg border border-gray-300 bg-white 
                                     hover:bg-gray-100 transition-all duration-300"
                  >
                    Download Brochure
                  </button>
                  <button
                    className="px-4 py-2 w-full rounded-lg border border-gray-300 bg-white 
                                     hover:bg-gray-100 transition-all duration-300"
                  >
                    Apply for Admission
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Explore Button */}
      <div className="text-center my-6">
        <a href="/college">
          <button
            className="px-6 py-3 text-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full 
                              shadow-lg hover:opacity-90"
          >
            🔍 Explore Colleges
          </button>
        </a>
      </div>
    </div>
  );
}

export default RecommendedCollege;

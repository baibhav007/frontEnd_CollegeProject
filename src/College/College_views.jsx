import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Homepage/Navbar";
import Confused_carrer from "../Homepage/Confused_carrer";
import Footer from "../Homepage/Footer";
import iimtimg from "../assets/image/iimt.png";
import iimtlogo from "../assets/image/iimtlogo.png";
import Campus_tour from "../Homepage/Campus_tour";
import like from "../assets/Image/like.png";

function College_views() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColleges, setSelectedColleges] = useState(null);
  const fileUrl = `${import.meta.env.BASE_URL}college_view.json`;

  useEffect(() => {
    fetch(fileUrl)
      .then((response) => response.json())
      .then((data) => {
        const college = data.find((item) => item.id === parseInt(id));
        setSelectedColleges(college);
      })
      .catch((error) => console.error("Error fetching course:", error));
  }, [id]);

  if (!selectedColleges) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold">College Not Found</h2>
        <button
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
          onClick={() => navigate("/college")}
        >
          Go Back
        </button>
      </div>
    );
  }

  // filter
  const filters = [
    { label: "Info" },
    { label: "Course & Fees" },
    { label: "Reviews" },
    { label: "Placement" },
    { label: "Gallery" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // course & fees
  const courses = [
    {
      id: 1,
      course: "B.Tech",
      fee: "INR 1.10 - 1.35 Lakhs (1st Year)",
      details: "12th PCM with a minimum of 50%",
    },
    {
      id: 2,
      course: "B.Pharma",
      fee: "INR 1.20 Lakhs (1st Year)",
      details: "10+2th PCM/PCB with a minimum of 50%",
    },
    {
      id: 3,
      course: "BCA",
      fee: "INR 95K (1st Year)",
      details: "10+2th with a minimum of 45%",
    },
    {
      id: 4,
      course: "BBA",
      fee: "INR 95K (1st Year)",
      details: "12th PCM with a minimum of 50%",
    },
  ];
  // rating
  const ratings = [
    { stars: 5, percentage: 100 },
    { stars: 4, percentage: 80 },
    { stars: 3, percentage: 60 },
    { stars: 2, percentage: 40 },
    { stars: 1, percentage: 20 },
  ];
  // placements company
  const placement_company = [
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
    "Directi",
    "Amazon",
    "Cognizant",
  ];
  const rows = [];
  for (let i = 0; i < placement_company.length; i += 5) {
    rows.push(placement_company.slice(i, i + 5));
  }
  const [visibleCompanies, setVisibleCompanies] = useState(5);
  const handleNext = () => {
    if (visibleCompanies + 5 <= placement_company.length) {
      setVisibleCompanies(visibleCompanies + 5);
    } else {
      setVisibleCompanies(placement_company.length); // Show all companies
    }
  };
  // user review
  const reviews = [
    {
      id: 1,
      name: "Amit Kumar",
      daysAgo: 100,
      rating: 4,
      review:
        "College is amazing. Infrastructure, Faculty, and Study environment is good.",
      likes: 10,
      comments: 6,
    },
    {
      id: 2,
      name: "Amit Kumar",
      daysAgo: 10,
      rating: 4,
      review:
        "College is amazing. Infrastructure, Faculty, and Study environment is good.",
      likes: 10,
      comments: 6,
    },
    {
      id: 3,
      name: "Amit Kumar",
      daysAgo: 15,
      rating: 4,
      review:
        "College is amazing. Infrastructure, Faculty, and Study environment is good.",
      likes: 10,
      comments: 6,
    },
  ];
  return (
    <div className="bg-blue-50">
      <Navbar />
      {/* college views */}
      <div>
        {/* banner */}
        <div>
          <div className="relative">
            <img
              src={iimtimg}
              className="h-40 w-full object-cover"
              alt="College"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col md:flex-row items-center text-white justify-between p-4 md:p-0">
              <div className="flex flex-row gap-3 sm:ml-16 lg:ml-32 text-center md:text-left items-center md:items-start">
                <img
                  src={iimtlogo}
                  className="h-12 md:h-16 w-auto"
                  alt="Logo"
                />
                <div className="flex flex-col">
                  <h1 className="text-2xl md:text-4xl text-yellow-50">
                    IIMT Group of College
                  </h1>
                  <p className="text-sm md:text-base">
                    Greater Noida | Est.1994 | AKTU,Lucknow | NAAC Grade
                  </p>
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
        </div>
        {/* Filter */}
        <div>
          <div className="relative w-full px-4 sm:px-20 py-4 bg-white shadow-md">
            <div className="flex justify-between items-center">
              {/* Filter Buttons (Visible on Larger Screens) */}
              <div className="hidden lg:flex space-x-48">
                {filters.map((item, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 text-lg font-medium text-gray-700 rounded-md hover:bg-gray-100"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center justify-between p-3">
              <h2 className="text-lg font-semibold">Filter</h2>

              <button
                className="text-3xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={isMenuOpen}
              >
                ☰
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-16 right-4 w-fit bg-white shadow-md rounded-md flex flex-col p-4 space-y-3 z-50 transition-all duration-300 ease-in-out">
                {filters.map((item, index) => (
                  <a
                    key={index}
                    href="/"
                    className="block text-lg text-gray-800 px-4 py-2 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* college info */}
        <div>
          <div>
            <h1 className="text-2xl mx-10 my-2 text-justify font-bold">Info</h1>

            <h1 className="text-sm sm:text-xl mx-10 my-2 text-justify">
              IIMT College Of Management, Greater Noida offers BBA, BCA, BJMC
              and B.com at UG level. Admission to all the courses are on the
              basis of candidates' previous qualifying examination. IIMT fees
              for B.Com is INR 1.76 Lacs. <br />
              <div className="text-start">
                <li>
                  What is the seat intake for the courses in IIMT? Number of
                  seats for BBA and BCA is 240, BJMC is 120 and B.Com is 60.{" "}
                </li>
                <li className="text-justify">
                  Can I get admission in BCA with 50%? Yes, one can get
                  admission with 50% in the qualifying examination which is an
                  intermediate degree for taking admission in the BCA course.{" "}
                </li>
                <li>
                  How is the placement of IIMT? During the placement drive, over
                  480 recruiters participated and successfully placed 1200+
                  students and some of the top recruiters were Planet Spark,
                  Josh Technology Group, Travio, Aviva India, and many more.{" "}
                </li>
              </div>
            </h1>
          </div>
        </div>
      </div>
      {/* Campus Tour */}
      <div>
        <Campus_tour />
      </div>
      {/* Courses & fees */}
      <div>
        <div className="mx-10 my-2 text-justify">
          <h1 className="text-2xl font-bold">Couses & Fee</h1>
          <br />
          <p className="text-sm sm:text-xl">
            IIMT Group of Colleges Greater Noida offers over 25 courses across
            various disciplines like Engineering, Computer Science, Law,
            Pharmacy, Commerce, Business Administration, and many more. Also,
            the courses include Diploma, Undergraduate programs, and
            Postgraduate programs.
          </p>
        </div>
        <div className="overflow-x-auto">
          <div className="mx-4 sm:mx-8 lg:mx-20">
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-base sm:text-lg lg:text-2xl table-fixed">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr className="text-center">
                  <th className="px-4 py-2 border-r border-gray-300">
                    Courses
                  </th>
                  <th className="px-4 py-2 border-r border-gray-300">Fees</th>
                  <th className="px-4 py-2">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, id) => (
                  <tr
                    key={id}
                    className="hover:bg-gray-50 text-sm sm:text-base md:text-lg lg:text-xl border-b border-gray-300"
                  >
                    <td className="px-4 py-2 border-r border-gray-300">
                      {course.course}
                    </td>
                    <td className="px-4 py-2 border-r border-gray-300">
                      {course.fee}
                    </td>
                    <td className="px-4 py-2">{course.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* rating */}
      <div>
        <div className="mx-4 sm:mx-8 lg:mx-10 my-6">
          <div className="mb-4 text-3xl text-center">
            <h1>Review & Rating</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* First content */}
            <div className="w-full lg:w-1/3 mx-auto flex flex-col justify-center items-center bg-gradient-to-t from-green-200 to-green-300 transition-colors rounded-xl shadow-md p-4 mb-8 lg:mb-0">
              <div className="flex items-center space-x-4 mb-4">
                <img src={like} className="sm:h-16 h-10" alt="Like Icon" />
                <h1 className="sm:text-2xl text-xl text-green-800 font-semibold">
                  Likes
                </h1>
              </div>
              <ul className="space-y-3 sm:text-lg text-sm text-green-900 mx-6 leading-relaxed">
                <li>
                  I liked campus sports and games as well as the literary club.
                </li>
                <li>
                  My experience is very good. I am a lawyer, and all the lawyer
                  teachers are very good during my study time.
                </li>
                <li>
                  The alumni base is quite strong as this is one of the oldest
                  colleges in Delhi.
                </li>
              </ul>
            </div>

            {/* Second content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="lg:text-8xl md:text-6xl text-4xl">4.1</h1>
                <div className="flex flex-col">
                  <div>
                    {Array(5)
                      .fill("★")
                      .map((star, index) => (
                        <span
                          key={index}
                          className="text-yellow-500 sm:text-xl"
                        >
                          {star}
                        </span>
                      ))}
                  </div>
                  <span>(400 reviews)</span>
                </div>
              </div>
              <div className="w-full p-6 rounded-lg">
                {ratings.map((rating) => (
                  <div key={rating.stars} className="flex items-center mb-4">
                    <span className="text-lg font-semibold w-8 text-right mr-2">
                      {rating.stars}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 mr-2"
                    >
                      <path d="M12 .587l3.668 7.568L24 9.432l-6 5.894 1.416 8.784L12 19.572l-7.416 4.538L6 15.326l-6-5.894 8.332-1.277L12 .587z" />
                    </svg>
                    {/* rating percentage */}
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-gray-200 rounded-full"
                        style={{ width: `${rating.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Write review */}
              <div className="flex mx-auto items-center border border-gray-300 bg-white rounded-2xl px-4 py-2 shadow-lg w-full sm:w-4/5 max-w-[600px] space-x-4 mt-6">
                <input
                  type="text"
                  placeholder="Enter Review"
                  className="flex-grow bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* User review */}
      <div className="mx-10">
        <h1 className="text-3xl font-bold mb-6">User Reviews</h1>
        <div className="flex justify-center items-center">
          <div className="max-w-7xl w-full p-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border rounded-md shadow-sm bg-white mb-4"
              >
                {/* User Info */}
                <div className="flex items-center mb-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 text-black font-bold text-sm">
                    {review.name[0]}
                  </span>
                  <span className="font-semibold ml-2">{review.name}</span>
                  <span className="ml-2 text-gray-500 text-sm">
                    {review.daysAgo} days ago
                  </span>
                </div>

                {/* Star Ratings */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-2xl ${
                        index < review.rating
                          ? "text-blue-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-3">{review.review}</p>

                {/* Likes, Comments, and Reply */}
                <div className="flex items-center text-gray-500 text-sm">
                  <div className="flex items-center mr-4">
                    <span className="mr-1">👍</span>
                    <span>{review.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">💬</span>
                    <span>{review.comments}</span>
                  </div>
                  <button className="ml-4 text-blue-500 hover:underline">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* placement company */}
      <div>
        <div className="mx-10 my-4">
          <h1 className="text-3xl">Placement</h1>
          <div className="relative w-full max-w-4xl mx-auto p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Highest and Average Package
            </h1>
            <div className="relative w-full h-10 bg-gray-200 rounded-xl overflow-hidden">
              <div
                className="absolute h-full bg-yellow-500 flex items-center justify-end px-4 text-white text-sm font-bold rounded- cursor-pointer"
                style={{ width: "87%" }}
                title="32.05 L - Highest Package"
              >
                32.05 L
              </div>
            </div>
            <div className="flex justify-between text-sm mt-4 text-gray-700">
              {[
                "0",
                "3.2 L",
                "6.4 L",
                "9.6 L",
                "12.8 L",
                "18 L",
                "24 L",
                "32 L",
                "40 L",
              ].map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto p-6 rounded-lg ">
            <h1 className="text-2xl font-semibold text-center mb-6">
              Average Package
            </h1>
            <div className="relative w-full h-10 bg-gray-200 rounded-xl overflow-hidden">
              <div
                className="absolute h-full bg-green-500 flex items-center justify-end px-4 text-white text-sm font-bold rounded- cursor-pointer"
                style={{ width: "24%" }}
                title="32.05 L - Highest Package"
              >
                6.04 L
              </div>
            </div>
            <div className="flex justify-between text-sm mt-4 text-gray-700">
              {[
                "0",
                "3.2 L",
                "6.4 L",
                "9.6 L",
                "12.8 L",
                "18 L",
                "24 L",
                "32 L",
                "40 L",
              ].map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>
          {/* placement company */}
          <div className="sm:hidden grid grid-cols-2 gap-6 mt-6">
            {placement_company
              .slice(0, visibleCompanies)
              .map((company, index) => (
                <div
                  key={index}
                  className="bg-white p-4 border border-gray-300 rounded-lg shadow-md text-center"
                >
                  <p className="text-lg font-semibold text-gray-800">
                    {company}
                  </p>
                </div>
              ))}
          </div>

          {/* Next button to load more companies */}
          <div className="text-center mt-4">
            {visibleCompanies < placement_company.length && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all sm:hidden"
              >
                More
              </button>
            )}

            <div className="overflow-x-auto hidden sm:block mt-6">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-2xl table-fixed">
                <thead className="bg-gray-100 border-b border-gray-300 text-center">
                  <tr>
                    <th colSpan="5" className="px-4 py-2 text-lg">
                      Companies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-gray-50 text-xl border-b border-gray-300"
                    >
                      {row.map((company, index) => (
                        <td
                          key={index}
                          className="px-4 py-2 border-r border-gray-300 text-center"
                        >
                          {company}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default College_views;

// integrate to previous code
// import React from "react";
// import { useLocation } from "react-router-dom";

// function CollegeDetails() {
//   const location = useLocation();
//   const { college } = location.state || {};

//   if (!college) {
//     return (
//       <p className="text-center text-gray-600 text-lg">
//         College data not found.
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-gray-800">{college.name}</h1>
//       <img
//         src={college.image}
//         alt={college.name}
//         className="w-full h-80 object-cover mt-4 rounded-lg shadow-lg"
//       />
//       <p className="text-lg text-gray-700 mt-4">
//         First Year Fee: {college.firstYearFee}
//       </p>
//       <p className="text-lg text-gray-700">
//         Placement Rating: {college.placementrating} ⭐
//       </p>
//       <p className="text-lg text-gray-700">
//         Placement Companies: {college.placementcompany}
//       </p>
//       <p className="text-lg text-gray-700">Location: {college.location}</p>
//     </div>
//   );
// }

// export default CollegeDetails;

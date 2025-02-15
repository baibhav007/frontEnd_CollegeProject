import React from "react";

function College_course_fee() {
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
  return (
    <div>
      <div className="mx-10 my-2 text-justify">
        <h1 className="text-2xl font-bold">Couses & Fee</h1>
        <br />
        <p className="text-sm sm:text-xl">
          IIMT Group of Colleges Greater Noida offers over 25 courses across
          various disciplines like Engineering, Computer Science, Law, Pharmacy,
          Commerce, Business Administration, and many more. Also, the courses
          include Diploma, Undergraduate programs, and Postgraduate programs.
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="mx-4 sm:mx-8 lg:mx-20">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-base sm:text-lg lg:text-2xl table-fixed">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr className="text-center">
                <th className="px-4 py-2 border-r border-gray-300">Courses</th>
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
  );
}

export default College_course_fee;

import React from "react";

function Footer() {
  return (
    <div className="bg-gray-300 text-black px-10 py-5">
      <h1 className="mb-4 text-xl md:2xl font-bold">All Course</h1>
      <ul className="flex flex-col md:flex-row justify-between gap-4">
        <li>
          <a href="#" className="font-bold">
            MBA
          </a>
          <ul className="mt-2 space-y-1">
            <li>MBA</li>
            <li>Top MBA College</li>
            <li>MBA Exams</li>
            <li>CAT</li>
            <li>MAT</li>
            <li>SNAP</li>
            <li>Online MBA</li>
          </ul>
        </li>
        <li>
          <a href="#" className="font-bold">
            Engineering
          </a>
          <ul className="mt-2 space-y-1">
            <li>Engineering</li>
            <li>Top Engineering Colleges</li>
            <li>Engineering Exams</li>
            <li>JEE Main</li>
            <li>JEE Advance</li>
          </ul>
        </li>
        <li>
          <a href="#" className="font-bold">
            Medical
          </a>
          <ul className="mt-2 space-y-1">
            <li>NEET UG</li>
            <li>NEET PG</li>
            <li>NEET SS</li>
            <li>NEET MDS</li>
            <li>INI CET</li>
            <li>Top Medical College</li>
            <li>Medical Exams</li>
          </ul>
        </li>
        <li>
          <a href="#" className="font-bold">
            Other Courses
          </a>
          <ul className="mt-2 space-y-1">
            <a href="#">
              <li>Animation</li>
              <li>B.COM</li>
              <li>BBA</li>
              <li>BSC</li>
              <li>CA</li>
              <li>Fashion Designing</li>
              <li>LAW</li>
              <li>Hotel Management</li>
            </a>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

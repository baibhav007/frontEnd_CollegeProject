import React from "react";
import Navbar from "../Homepage/Navbar.jsx";
import Footer from "../Homepage/Footer.jsx";
import Course_banner from "./Course_banner.jsx";
import Course_filters from "./Course_filters.jsx";
import Confused_carrer from "../Homepage/Confused_carrer.jsx";

function Course_main() {
  return (
    <div className="bg-blue-50 overflow-x-hidden">
      <Navbar />
      <Course_banner />
      <Course_filters />
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default Course_main;

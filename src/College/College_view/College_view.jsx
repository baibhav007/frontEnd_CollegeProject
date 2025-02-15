import React from "react";
import Navbar from "../../Homepage/Navbar";
import College_banner from "./College_banner";
import College_filter from "./College_filter";
import College_info from "./College_info";
import College_course_fee from "./College_course_fee";
import College_rating from "./College_rating";
import College_placement from "./College_placement";
import Footer from "../../Homepage/Footer";
import Confused_carrer from "../../Homepage/Confused_carrer";
import Campus_tour from "../../Homepage/Campus_tour";

function College_view() {
  return (
    <div>
      <Navbar />
      <College_banner />
      <College_filter />
      <College_info />
      <Campus_tour />
      <College_course_fee />
      <College_rating />
      <College_placement />
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default College_view;

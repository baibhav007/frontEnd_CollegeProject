import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Confused_carrer from "../Homepage/Confused_carrer";
import Hostel_list from "./Hostel_list";
import Hostel_banner from "./Hostel_banner";
import Hostel_filter from "./Hostel_filter";

function Hostel_main() {
  return (
    <div className="bg-blue-50 overflow-x-hidden">
      <Navbar />
      <Hostel_banner />
      <Hostel_filter />
      <Hostel_list />
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default Hostel_main;

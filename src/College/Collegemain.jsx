import React from "react";
import Navbar from "../Homepage/Navbar";
import Footer from "../Homepage/Footer";
import Collegefilter from "./Collegefilter";
import Collegebanner from "./Collegebanner";
import Collegecards from "./Collegecards";
import Confused_carrer from "../Homepage/Confused_carrer";

function Collegemain() {
  return (
    <div className="bg-blue-50 overflow-x-hidden">
      <Navbar />
      <Collegebanner />
      <Collegefilter />
      <Collegecards />
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default Collegemain;

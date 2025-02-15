import React from "react";
import Navbar from "./Navbar";
import College_main_banner from "./College_main_banner";
import Application_button from "./Application_button";
import Recommended_college from "./Recommended_college";
import Explore_more from "./Explore_more";
import Hostel_pg from "./Hostels_pg";
import Key_feature from "./Key_feature";
import Our_offering from "./Our_offering";
import Our_offering_cards from "./Our_offering_cards";
import College_campus from "./College_campus";
import Campus_tour from "./Campus_tour";
import Top_colleges from "./Top_colleges";
import Common_question from "./Common_question";
import Praised_company from "./Praised_company";
import Confused_carrer from "./Confused_carrer";
import Footer from "./Footer";
function Homepage() {
  return (
    <div className="bg-blue-50 overflow-x-hidden">
      <Navbar />
      <College_main_banner />
      <Application_button />
      <Recommended_college />
      <Explore_more />
      <Hostel_pg />
      <Key_feature />
      <Our_offering />
      <Our_offering_cards />
      <College_campus />
      <Campus_tour />
      <Top_colleges />
      <Common_question />
      <Praised_company />
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default Homepage;

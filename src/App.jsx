import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Collegemain from "./College/Collegemain";
import Hostelmain from "./Hostel/Hostel_main";
import Courses_main from "./Courses/Course_main";
import Chatbot from "./Homepage/Chatbot";
import Updates_main from "./Update/Updates_main";
import About from "./Homepage/About";
import College_views from "./College/College_views";
import Course_views from "./Courses/Course_views";
function App() {
  return (
    <>
      <Chatbot />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/college" element={<Collegemain />} />
        <Route path="/hostel" element={<Hostelmain />} />
        <Route path="/course" element={<Courses_main />} />
        <Route path="/update" element={<Updates_main />} />
        <Route path="/college/:id" element={<College_views />} />
        <Route path="/about" element={<About />} />
        <Route path="/course/:id" element={<Course_views />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import aboutImage from "/assets/image/about.png";
import Footer from "./Footer";
import Confused_carrer from "./Confused_carrer";
function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex  flex-col sm:flex-row items-center justify-center m-auto md:mx-20">
          <h1 className="lg:text-5xl sm:text-3xl text-2xl w-80 sm:w-[800px]">
            <span className="text-yellow-500">Discover</span>,{" "}
            <span className="text-blue-600">decide</span> , and{" "}
            <span className="text-red-500">succeed</span> with{" "}
            <span className="text-green-500">College 91</span> – because your
            future matters to us.
          </h1>
          <img src={aboutImage} className="lg:h-96 sm:h-80 h-60" />
        </div>
        <div className="text-center mt-20">
          <h1 className="sm:text-4xl text-2xl sm:mx-0 mx-4 sm:text-center text-justify">
            Welcome to <span className="text-green-500">College 91</span> – your
            trusted partner in shaping a brighter{" "}
            <span className="text-green-500">future!</span>
          </h1>
          <p className="text-justify lg:mx-20 sm:mx-10 mx-5 my-5 sm:text-2xl text-xl">
            At College 91, we aim to simplify the journey of students by
            offering a one-stop solution for all their academic and
            accommodation needs. Whether you're looking for the best colleges,
            exploring courses and certifications to upskill, or searching for
            comfortable hostels, we’ve got you covered. Our platform is designed
            to empower students with the right information and opportunities,
            helping them make informed decisions for their education and career
            paths. With a user-friendly interface and a commitment to
            excellence, we strive to connect students with institutions and
            resources that align with their aspirations.
          </p>
        </div>
      </div>
      <Confused_carrer />
      <Footer />
    </div>
  );
}

export default About;

import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function key_feature() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false },
      },
    ],
  };
  const keysfeature = [
    {
      id: 1,
      name: "Courses",
      icon: (
        <svg
          fill="black"
          viewBox="0 0 256 241"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M128.049,103.364l-2.077-0.791L92.391,90.011 v30.762c0,6.627,15.925,12.018,35.609,12.018s35.609-5.391,35.609-12.018V90.011l-33.482,12.562L128.049,103.364z M80.472,79.18 v38.23c2.374,1.088,4.006,3.511,4.006,6.33v16.815H70.63V123.74c0-2.77,1.632-5.193,3.957-6.281V77.004l-9.891-3.709l63.354-23.739 l63.255,23.739l-63.255,23.739L80.472,79.18z"></path>
        </svg>
      ),
      path: "/course",
    },
    {
      id: 2,
      name: "Internship",
      icon: (
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000"
          className="h-7 w-7"
        >
          <path d="M7,34H41a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H7A2,2,0,0,0,5,8V32A2,2,0,0,0,7,34ZM39,10V30H9V10Z" />
          <path d="M44,38H4a2,2,0,0,0,0,4H44a2,2,0,0,0,0-4Z" />
          <path d="M29.5,12.6a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L31.2,20l-4.6,4.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l5.9-6a1.9,1.9,0,0,0,0-2.8Z" />
          <path d="M21.2,12.4a2.1,2.1,0,0,0-2.7.2l-5.9,6a1.9,1.9,0,0,0,0,2.8l5.9,6a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L16.8,20l4.6-4.6A1.9,1.9,0,0,0,21.2,12.4Z" />
        </svg>
      ),
      path: "/",
    },
    {
      id: 3,
      name: "Scholarship",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path
            d="M7.54 11.77L12 14L19 10.5M7.54 11.77V17.77M7.54 11.77L12 9.54M7.54 11.77L5 10.5M7.54 17.77V21M7.54 17.77L12 20L19 16.5V10.5M7.54 17.77L5 16.5V10.5M19 10.5L22 9L12 4L2 9L5 10.5"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/",
    },
    {
      id: 4,
      name: "Library",
      icon: (
        <svg
          fill="#000"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path d="M30.156 26.492l-6.211-23.184c-0.327-1.183-1.393-2.037-2.659-2.037-0.252 0-0.495 0.034-0.727 0.097l0.019-0.004-2.897 0.776c-0.325 0.094-0.609 0.236-0.86 0.42l0.008-0.005c-0.49-0.787-1.349-1.303-2.33-1.306h-2.998c-0.789 0.001-1.5 0.337-1.998 0.873l-0.002 0.002c-0.5-0.537-1.211-0.873-2-0.874h-3c-1.518 0.002-2.748 1.232-2.75 2.75v24c0.002 1.518 1.232 2.748 2.75 2.75h3c0.789-0.002 1.5-0.337 1.998-0.873l0.002-0.002c0.5 0.538 1.211 0.873 2 0.875h2.998c1.518-0.002 2.748-1.232 2.75-2.75v-16.848l4.699 17.54c0.327 1.182 1.392 2.035 2.656 2.037h0c0.001 0 0.003 0 0.005 0 0.251 0 0.494-0.034 0.725-0.098l-0.019 0.005 2.898-0.775c1.182-0.326 2.036-1.392 2.036-2.657 0-0.252-0.034-0.497-0.098-0.729l0.005 0.019zM18.415 9.708l5.31-1.423 3.753 14.007-5.311 1.422zM18.068 3.59l2.896-0.776c0.097-0.027 0.209-0.043 0.325-0.043 0.575 0 1.059 0.389 1.204 0.918l0.002 0.009 0.841 3.139-5.311 1.423-0.778-2.905v-1.055c0.153-0.347 0.449-0.607 0.812-0.708l0.009-0.002zM11.5 2.75h2.998c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.498 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM8.75 23.25h-5.5v-14.5l5.5-0.001zM10.25 8.75l5.498-0.001v14.501h-5.498zM4.5 2.75h3c0.69 0.001 1.249 0.56 1.25 1.25v3.249l-5.5 0.001v-3.25c0.001-0.69 0.56-1.249 1.25-1.25h0zM7.5 29.25h-3c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.5v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM14.498 29.25h-2.998c-0.69-0.001-1.249-0.56-1.25-1.25v-3.25h5.498v3.25c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM28.58 27.826c-0.164 0.285-0.43 0.495-0.747 0.582l-0.009 0.002-2.898 0.775c-0.096 0.026-0.206 0.041-0.319 0.041-0.575 0-1.060-0.387-1.208-0.915l-0.002-0.009-0.841-3.14 5.311-1.422 0.841 3.14c0.027 0.096 0.042 0.207 0.042 0.321 0 0.23-0.063 0.446-0.173 0.63l0.003-0.006z" />
        </svg>
      ),
      path: "/",
    },
    {
      id: 5,
      name: "Support",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 "
        >
          <path
            d="M14.33 15.94l1.33-1.33a3 3 0 0 1 4.461 0l1.56 1.56a2.75 2.75 0 0 1-.17 3.87l-.71.72a3.75 3.75 0 0 1-4.532.304C10.47 17.9 6.11 13.54 3.35 8.19a3.75 3.75 0 0 1 .64-4.85l.71-.72a2.75 2.75 0 0 1 3.87-.17l1.57 1.57a2.75 2.75 0 0 1 0 3.89L8.07 9.68a28.4 28.4 0 0 0 2.89 3.36 28.4 28.4 0 0 0 3.35 2.89l.02.02ZM15.34 8.66 21 3m-4.24 0H21v4.24"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      path: "/",
    },
    {
      id: 6,
      name: "Notes",
      icon: (
        <svg
          className="h-7 w-7 "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M8 10h8M8 14h5M8 6h8" />
        </svg>
      ),
      path: "/course",
    },
  ];

  return (
    <div>
      <div className="text-center sm:text-6xl text-4xl mt-10 ">
        <p>Key Features</p>
        <p className="sm:text-xl text-lg my-5">
          Everything you need for a successful <br /> academic journey!
        </p>
      </div>
      {/* Cards Section */}
      <div className="key-feature-container mx-10 lg:mx-14">
        <Slider {...settings}>
          {keysfeature.map((key, index) => (
            <div
              key={index}
              className="flex items-center justify-center ml-12 lg:ml-10"
            >
              <Link
                to={key.path}
                className="shrink-0 bg-sky-200 rounded-xl flex flex-row items-center 
           sm:h-[200px] h-[150px] sm:w-[250px] w-[200px] text-xl sm:text-3xl gap-4 px-4"
              >
                <div className="flex flex-col">
                  <p>{key.id}</p>
                  <p>{key.name}</p>
                </div>
                {key.icon}
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <p className="text-2xl sm:text-3xl text-center my-5">
        Explore our features and elevate your education!
      </p>
      <div className="text-center my-5">
        <button className="px-6 py-2 text-lg text-white bg-black rounded-2xl shadow-md">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default key_feature;

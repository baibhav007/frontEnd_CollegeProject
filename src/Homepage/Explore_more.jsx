import React from "react";
import hostel from "../assets/Image/hostel.jpg";
import working from "../assets/Image/working.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ExploreMore() {
  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    centerMode: false, // Prevent card cutoff
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
        },
      },
    ],
  };

  const exploreMoreOptions = [
    { id: 1, name: "Hostels/PG", image: hostel, href: "/hostel" },
    {
      id: 2,
      name: "Short-term Courses/Certificates",
      image: working,
      href: "/course",
    },
    {
      id: 3,
      name: "Previous Year Question Papers & Solutions",
      image: working,
      href: "/course",
    },
    { id: 4, name: "Book Library", image: working, href: "/course" },
  ];

  return (
    <div className="py-12 px-4 sm:px-10 bg-yellow-300 text-black rounded-3xl shadow-lg">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">📚 Explore More</h1>
        <p className="text-lg sm:text-2xl font-medium">
          Unlock new opportunities with our short-term courses & certifications
        </p>
      </div>

      {/* Centered Slider with Spacing */}
      <div className="mx-auto px-5">
        <Slider {...cardSettings} className="space-x-10">
          {exploreMoreOptions.map((item) => (
            <div key={item.id} className="px-5">
              <a
                href={item.href}
                className="block w-full max-w-[280px] transform transition-all duration-300 hover:scale-105"
              >
                <div className="h-[380px] bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-3/4 w-full object-cover"
                    loading="lazy"
                  />
                  <p className="mt-4 text-center font-semibold text-lg px-4">
                    {item.name}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Explore All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 text-lg font-medium bg-white text-black rounded-full shadow-md hover:bg-gray-200 transition-all">
          🔍 Explore All
        </button>
      </div>
    </div>
  );
}

export default ExploreMore;

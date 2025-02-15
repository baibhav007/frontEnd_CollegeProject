import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cadecorsa from "../assets/image/cadecorsa.png";
import momda from "../assets/image/momda.png";

function Praised_company() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [cadecorsa, momda, cadecorsa, momda, cadecorsa, momda];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Praised by Company
      </h1>

      <div className="flex justify-center items-center mx-auto w-full">
        <Slider {...settings} className="w-full max-w-full">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain ml-18"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Praised_company;

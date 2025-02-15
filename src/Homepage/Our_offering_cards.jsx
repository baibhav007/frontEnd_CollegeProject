import React from "react";
import image from "../assets/Image/working.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Our_offering_cards() {
  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    centerMode: false,
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

  const texts = [
    {
      id: 1,
      first: "New Scholarship Opportunities",
      second:
        "Discover exciting new scholarships available for students this semester! Don’t miss out!",
    },
    {
      id: 2,
      first: "New Scholarship Opportunities",
      second:
        "Discover exciting new scholarships available for students this semester! Don’t miss out!",
    },
    {
      id: 3,
      first: "New Scholarship Opportunities",
      second:
        "Discover exciting new scholarships available for students this semester! Don’t miss out!",
    },
    {
      id: 4,
      first: "New Scholarship Opportunities",
      second:
        "Discover exciting new scholarships available for students this semester! Don’t miss out!",
    },
  ];

  return (
    <div className="mx-5 my-5">
      <Slider {...cardSettings}>
        {texts.map((item) => (
          <div key={item.id} className="px-5">
            <div className="rounded-xl shrink-0 w-[300px] overflow-hidden bg-gray-200 shadow-lg">
              <img
                src={image}
                className="h-[210px] w-[300px] object-cover"
                loading="lazy"
              />
              <div className="flex mx-5 justify-between mt-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10"
                >
                  <path
                    d="M12.12 12.78c-.07-.01-.16-.01-.24 0-1.76-.06-3.16-1.5-3.16-3.27 0-1.81 1.46-3.28 3.28-3.28s3.28 1.47 3.28 3.28c0 1.77-1.39 3.21-3.16 3.27ZM18.74 19.38c-1.78 1.63-4.14 2.62-6.74 2.62s-4.96-.99-6.74-2.62c.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58ZM12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex space-x-2 items-center">
                  <p className="h-fit w-fit px-2 bg-white rounded-xl">
                    Latest News
                  </p>
                  <p className="h-fit w-fit px-2 bg-white rounded-xl">Update</p>
                </div>
              </div>
              <div className="mx-5 my-5">
                <h1 className="text-2xl">{item.first}</h1>
                <p className="mt-4 text-xs">{item.second}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Our_offering_cards;

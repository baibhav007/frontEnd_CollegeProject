import React from "react";
import like from "../../assets/Image/like.png";

function College_rating() {
  const ratings = [
    { stars: 5, percentage: 100 },
    { stars: 4, percentage: 80 },
    { stars: 3, percentage: 60 },
    { stars: 2, percentage: 40 },
    { stars: 1, percentage: 20 },
  ];
  return (
    <div className="mx-4 sm:mx-8 lg:mx-10 my-6">
      <div className="mb-4 text-3xl text-center">
        <h1>Review & Rating</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* First content */}
        <div className="w-full lg:w-1/3 mx-auto flex flex-col justify-center items-center bg-gradient-to-t from-green-200 to-green-300 transition-colors rounded-xl shadow-md p-4 mb-8 lg:mb-0">
          <div className="flex items-center space-x-4 mb-4">
            <img src={like} className="sm:h-16 h-10" alt="Like Icon" />
            <h1 className="sm:text-2xl text-xl text-green-800 font-semibold">
              Likes
            </h1>
          </div>
          <ul className="space-y-3 sm:text-lg text-sm text-green-900 mx-6 leading-relaxed">
            <li>
              I liked campus sports and games as well as the literary club.
            </li>
            <li>
              My experience is very good. I am a lawyer, and all the lawyer
              teachers are very good during my study time.
            </li>
            <li>
              The alumni base is quite strong as this is one of the oldest
              colleges in Delhi.
            </li>
          </ul>
        </div>

        {/* Second content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="lg:text-8xl md:text-6xl text-4xl">4.1</h1>
            <div className="flex flex-col">
              <div>
                {Array(5)
                  .fill("★")
                  .map((star, index) => (
                    <span key={index} className="text-yellow-500 sm:text-xl">
                      {star}
                    </span>
                  ))}
              </div>
              <span>(400 reviews)</span>
            </div>
          </div>
          <div className="w-full p-6 rounded-lg">
            {ratings.map((rating) => (
              <div key={rating.stars} className="flex items-center mb-4">
                <span className="text-lg font-semibold w-8 text-right mr-2">
                  {rating.stars}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gold"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-2"
                >
                  <path d="M12 .587l3.668 7.568L24 9.432l-6 5.894 1.416 8.784L12 19.572l-7.416 4.538L6 15.326l-6-5.894 8.332-1.277L12 .587z" />
                </svg>
                {/* rating percentage */}
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-gray-200 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Write review */}
          <div className="flex mx-auto items-center border border-gray-300 bg-white rounded-2xl px-4 py-2 shadow-lg w-full sm:w-4/5 max-w-[600px] space-x-4 mt-6">
            <input
              type="text"
              placeholder="Enter Review"
              className="flex-grow bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition-all">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default College_rating;

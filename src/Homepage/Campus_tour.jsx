import React from "react";

function Campus_tour() {
  return (
    <div className="m-2 sm:m-5 bg-yellow-500 rounded-3xl text-center py-6 sm:py-10 px-4 sm:px-8">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-2">
        Campus Tour
      </h1>
      <h2 className="text-xl sm:text-3xl md:text-4xl  mb-3">See It Live!</h2>
      <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Watch your campus tour video and feel the energy of your college.
      </p>

      <div className="relative w-full max-w-6xl mx-auto aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/6Rh9iToPwYs?si=rCrYY7iBwVmcpKrL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Campus_tour;

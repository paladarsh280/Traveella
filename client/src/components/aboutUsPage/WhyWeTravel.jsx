import React from "react";

const WhyWeTravel = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-10 sm:py-14 md:py-20 bg-white">
      {/* Image Box */}
      <div className="relative w-[90%] sm:w-[85%] md:w-[70%] h-[35vh] sm:h-[40vh] md:h-[55vh] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg bg-white">
        {/* Background Image (responsive + slightly shifted down) */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Why We Travel"
          className="absolute inset-0 w-full h-full object-cover brightness-75 object-[center_70%]"
        />

        {/* Text Overlay */}
        <div className="absolute top-1/3 sm:top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-xl leading-snug">
            Why We Travel
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-3 max-w-[500px] mx-auto">
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeTravel;
import React from "react";

const TraveellaExperience = () => {
  return (
    <section className="bg-[#f9f9fb] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28">
      {/* Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 text-black text-left">
        The Traveella Experience
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-200 rounded-2xl p-6 sm:p-10 md:p-16 gap-10 sm:gap-12 shadow-lg max-w-7xl mx-auto">
        {/* Left Text Section */}
        <div className="w-full md:w-2/3 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed flex items-center">
          <p>
            Stay informed with our latest articles and immerse yourself in unique travel
            stories. From breathtaking adventures to serene getaways,{" "}
            <span className="font-semibold text-[#d6b97b]">
              The Traveella Experience
            </span>{" "}
            brings you closer to the heart of every journey. Explore vibrant cultures,
            uncover hidden gems, and rediscover your passion for travel with every trip
            you take.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/3 h-[280px] sm:h-[340px] md:h-[420px] rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Traveella Experience"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default TraveellaExperience;
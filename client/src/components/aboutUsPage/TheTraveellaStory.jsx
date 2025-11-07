import React from "react";

const TraveellaStory = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-16 sm:py-20 md:py-28 bg-[#f9f9fb]">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-black">
          The Traveella Story
        </h2>

        {/* Long Golden Line (Responsive Width) */}
        <div className="w-[180px] sm:w-[400px] md:w-[1170px] h-[3px] bg-[#d6b97b] mx-auto mt-4 sm:mt-6"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 text-gray-800 leading-relaxed">
        {/* Left Column */}
        <div className="md:-translate-x-10 text-center md:text-left">
          <h3 className="font-bold text-2xl sm:text-3xl mb-4 sm:mb-5 border-b-[3px] border-[#d6b97b] inline-block pb-2 text-[#1a1a1a]">
            How it all Started
          </h3>
          <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 leading-relaxed">
            Stay informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles.
          </p>
        </div>

        {/* Right Column */}
        <div className="pt-6 md:pt-0 md:translate-x-10 text-center md:text-left">
          <p className="text-base sm:text-lg md:text-xl mt-3 sm:mt-4 leading-relaxed">
            Stay informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles stay informed with our latest articles stay
            informed with our latest articles stay informed with our latest
            articles stay informed with our latest articles stay informed with
            our latest articles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TraveellaStory;
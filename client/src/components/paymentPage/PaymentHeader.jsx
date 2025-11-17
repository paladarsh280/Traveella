import React from "react";
import Mount from "../../images/Mount.png";
import Map from "../../images/Map.png";

export default function HeroSection() {
  return (
    <div className="w-full bg-white px-4 md:px-8 py-6 flex flex-col items-center">
      
      {/* Navbar */}
      <div className="w-full max-w-7xl flex justify-between items-center mb-8 md:mb-16">
        <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <span>.....</span>
        </div>
      </div>

      {/* Hero Text */}
      <div className="w-full max-w-3xl text-center px-2">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight md:leading-snug">
          FIND MORE ,CHOOSE <br /> SMARTER , WANDER FREELY
        </h1>

        <p className="text-gray-600 mt-4 text-sm md:text-base px-2 md:px-6">
          At Traveella, we believe adventures don’t need to be expensive. Discover breathtaking
          destinations, connect with like-minded travelers, and plan journeys that fit perfectly
          within your budget.
        </p>
      </div>

      {/* Decorative Icons */}
      <div className="
        w-full max-w-7xl mt-10 
        flex justify-between 
        px-2 md:px-6 
        opacity-70
      ">
        {/* Left Icon */}
        <img
          src={Map}
          className="w-16 md:w-28 lg:w-36"
          alt="Map icon"
        />

        {/* Right Icon */}
        <img
          src={Mount}
          className="w-20 md:w-32 lg:w-40"
          alt="Mountains icon"
        />
      </div>
    </div>
  );
}

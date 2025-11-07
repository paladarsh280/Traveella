
import React from "react";
import book from "../../images/book.svg";
import mountain from "../../images/mountain.svg";

export default function HeroSection() {
  return (
    <section className="text-center px-4 mt-10">
      {/* Use a flex container to align items in a row */}
      <div className="flex justify-center items-center gap-4 md:gap-8">
        
        {/* 1. Image on the left */}
        <img
          src={book}
          alt="Book icon"
          className="w-16 h-20 md:w-20 md:h-24" // Slightly adjusted size
        />

        {/* 2. Heading in the center */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
          <span className="text-[rgba(226,173,100,1)]">FIND MORE</span> , CHOOSE
          SMARTER, <br className="hidden lg:block" />{" "}
          <span className="text-[rgba(108,99,255,1)]">WANDER FREELY</span>
        </h1>

        {/* 3. Image on the right */}
        <img
          src={mountain}
          alt="mountain icon"
          className="w-16 h-20 md:w-20 md:h-24" // Slightly adjusted size
        />
      </div>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg font-bold">
        At Travella, we believe adventures don’t need to be expensive. Discover
        breathtaking destinations, connect with like-minded travelers, and plan
        journeys that fit perfectly within your budget.
      </p>
    </section>
  );
}
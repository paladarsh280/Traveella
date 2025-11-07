import React from "react";

const WhatWeOffer = () => {
  const offers = [
    {
      title: "Adventure Trips",
      desc: "Experience the thrill of mountain treks, safaris, and outdoor exploration.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Luxury Getaways",
      desc: "Relax in premium resorts with scenic views and curated luxury stays.",
      img: "https://images.unsplash.com/photo-1501117716987-c8e2a6f1cc9e",
    },
    {
      title: "Cultural Journeys",
      desc: "Discover art, history, and traditions from around the world.",
      img: "https://images.unsplash.com/photo-1533055640609-24b498dfd5a1",
    },
    {
      title: "Solo Escapes",
      desc: "Find yourself in peaceful, introspective travel experiences.",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  ];

  return (
    <section className="bg-[#f9f9fb] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28">
      {/* Section Heading (Left aligned) */}
      <div className="mb-12 sm:mb-16 text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
          What We Offer
        </h2>
        <div className="w-[150px] sm:w-[200px] h-[3px] bg-[#d6b97b] mt-4"></div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image */}
            <div className="h-48 sm:h-52 md:h-64 overflow-hidden">
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Text */}
            <div className="p-6 sm:p-7 text-center">
              <h3 className="font-semibold text-xl sm:text-2xl text-black mb-3">
                {offer.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {offer.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
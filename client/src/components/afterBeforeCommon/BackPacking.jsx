import React, { useEffect, useState } from "react";

export default function BackPacking() {
  const [tourCards, setTourCards] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/tours")
      .then((res) => res.json())
      .then((data) => setTourCards(data))
      .catch((err) => console.error("Error fetching tours:", err));
  }, []);

  const TourCard = ({ card }) => (
    <div className="group relative flex-shrink-0 w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
        {card.duration}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
        <p className="text-sm text-white/90 mb-2">{card.subtitle}</p>
        <p className="text-xl font-bold">{card.price}</p>
      </div>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <h2 className="text-4xl font-bold mb-8">BackPacking</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {tourCards.length > 0 ? (
              tourCards.map((card, i) => (
                <TourCard key={i} card={card} />
              ))
            ) : (
              <p className="text-gray-500">Loading tours...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

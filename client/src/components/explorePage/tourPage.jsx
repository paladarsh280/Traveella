import React from "react";

export default function ToursPage() {
  const cards = [
    {
      id: 1,
      img: "/images/img1.jpg",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      location: "Paris, France",
      rating: "4.8 (269)",
      desc: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
      nights: "2 Days 1 Nights",
      oldPrice: "$1200",
      newPrice: "$114",
    },
    {
      id: 2,
      img: "/images/img2.jpg",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      location: "Paris, France",
      rating: "4.8 (269)",
      desc: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
      nights: "2 Days 1 Nights",
      oldPrice: "$1200",
      newPrice: "$114",
    },
    {
      id: 3,
      img: "/images/img3.jpg",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      location: "Paris, France",
      rating: "4.8 (269)",
      desc: "The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.",
      nights: "2 Days 1 Nights",
      oldPrice: "$1200",
      newPrice: "$114",
    }
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">

      {/* Cards List */}
      <div className="w-[90%] max-w-6xl flex flex-col gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full flex bg-white shadow-md rounded-xl p-4 border border-gray-200"
          >
            {/* Left Image */}
            <div className="w-1/3">
              <img
                src={card.img}
                className="w-full h-48 rounded-lg object-cover"
                alt=""
              />
            </div>

            {/* Middle Content */}
            <div className="w-1/2 px-6 flex flex-col justify-center">
              <p className="text-gray-500 text-sm">{card.location}</p>

              <h2 className="text-gray-800 font-semibold text-lg leading-snug mt-1">
                {card.title}
              </h2>

              <p className="text-xs mt-1 font-medium">{card.rating}</p>

              <p className="text-gray-500 text-sm mt-2 leading-snug max-w-md">
                {card.desc}
              </p>

              <div className="flex items-center gap-6 mt-4">
                <p className="text-xs text-gray-600">Best Price Guarantee</p>
                <p className="text-xs text-gray-600">Free Cancellation</p>
              </div>
            </div>

            {/* Right Price Section */}
            <div className="w-1/3 flex flex-col justify-center items-end pr-4">
              <p className="text-gray-700 text-sm">{card.nights}</p>

              <p className="text-gray-400 text-sm line-through mt-3">{card.oldPrice}</p>
              <p className="text-gray-900 text-sm font-semibold -mt-1">
                From <span className="text-black font-bold">{card.newPrice}</span>
              </p>

              <button className="mt-4 border border-gray-400 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-black text-white text-sm">1</button>
          <button className="w-8 h-8 rounded-full border text-sm">2</button>
          <button className="w-8 h-8 rounded-full border text-sm">3</button>
          <button className="w-8 h-8 rounded-full border text-sm">4</button>
          <span className="text-gray-500">…</span>
        </div>

        <p className="text-gray-500 text-xs mt-2">Showing results 1-30 of 1,415</p>
      </div>

    </div>
  );
}

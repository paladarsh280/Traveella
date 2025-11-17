import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecommendationPage = () => {
  const cards = [1, 2, 3, 4];

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-12">
      {/* Heading + Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Recommendations for you
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Checkout these recommendations according to your taste
          </p>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 self-start sm:self-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md backdrop-blur-md opacity-80 hover:opacity-100 transition">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md backdrop-blur-md opacity-80 hover:opacity-100 transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
        {cards.map((_, i) => (
          <div
            key={i}
            className="
              relative w-full h-[330px] rounded-xl overflow-hidden 
              shadow-lg cursor-pointer transform transition-all duration-300
              hover:scale-[1.04] hover:shadow-2xl
            "
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              boxShadow:
                "0 0 10px rgba(128,0,255,0.6), inset 0 0 14px rgba(0,128,255,0.4)",
            }}
          >
            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />

            {/* CARD FOOTER */}
            <div className="absolute bottom-0 w-full px-4 py-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <p className="text-[13px]">4 days</p>
              <p className="text-[14px] text-gray-300">Paris, France</p>
              <p className="text-[14px] leading-tight mt-[3px]">
                Centipede Tour - Guided Arizona Desert Tour by ATV
              </p>
              <p className="text-[13px] mt-[6px] text-gray-300">
                From <span className="font-semibold text-white">$189.25</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationPage;

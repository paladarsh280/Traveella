import React from "react";

export default function MangaloreSection() {
  return (
    <div className="w-full bg-black flex justify-center py-16">
      <div className="w-[90%] max-w-6xl flex items-start gap-20">

        {/* Left Image Placeholder */}
        <div className="w-[380px] h-[220px] bg-gray-300 rounded-lg"></div>

        {/* Right Text Section */}
        <div className="flex flex-col text-white w-[60%]">
          <h2 className="text-xl font-semibold">
            10 Places to visit in Mangalore
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed mt-3">
            River cruises, railroad adventures, and Frank Lloyd Wright architecture.
            River cruises, railroad adventures, and Frank Lloyd Wright architecture.
            River cruises, railroad adventures, and Frank Lloyd Wright architecture.
            River cruises, railroad adventures, and Frank Lloyd Wright architecture.
          </p>

          {/* Button Right Align */}
          <div className="w-full flex justify-end mt-6">
            <button className="bg-indigo-500 text-white text-xs px-4 py-1.5 rounded-full hover:bg-indigo-600 transition">
              Read Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

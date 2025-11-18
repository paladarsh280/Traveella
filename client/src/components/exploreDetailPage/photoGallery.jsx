import React from "react";

export default function PhotoGallery() {
  return (
    <div className="w-full px-10 py-10">
      <div className="flex gap-4">

        {/* LEFT BIG IMAGE */}
        <div className="w-2/3">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-[380px] object-cover rounded-xl"
            alt=""
          />
        </div>

        {/* RIGHT IMAGES GRID */}
        <div className="w-1/3 grid grid-cols-2 grid-rows-2 gap-4 relative">

          {/* Top Right Big Image */}
          <img
            src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
            className="col-span-2 h-[180px] w-full object-cover rounded-xl"
            alt=""
          />

          {/* Bottom Left */}
          <img
            src="https://images.unsplash.com/photo-1500390364720-3182a34f87c3"
            className="h-[180px] w-full object-cover rounded-xl"
            alt=""
          />

          {/* Bottom Right */}
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="h-[180px] w-full object-cover rounded-xl"
            alt=""
          />

          {/* See All Photos Button */}
          <button className="absolute bottom-4 right-4 bg-[#0b0750] text-white px-4 py-2 text-xs rounded-lg shadow-md">
            See all photos
          </button>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="flex justify-end gap-6 mt-4 text-sm items-center">

        {/* Share */}
        <button className="flex items-center gap-2 text-gray-600 hover:text-black">
          <span>🔗</span> Share
        </button>

        {/* Wishlist */}
        <button className="flex items-center gap-2 bg-[#0b0750] text-white px-4 py-2 rounded-lg text-sm">
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

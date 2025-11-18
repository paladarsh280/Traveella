import React from "react";

const CustomerReviews = () => {
  return (
    <div className="w-full px-28 py-10">   {/* ← SAME RIGHT SHIFT */}
      
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      {/* ---------- TOP OVERALL RATING BOX ---------- */}
      <div className="w-full bg-[#b999ef] rounded-2xl p-6 text-white mb-6">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold">Overall Rating</p>
            <p className="text-sm opacity-90">Excellent</p>
          </div>
          <p className="text-2xl font-bold">5.0</p>
        </div>
      </div>

      {/* ---------- GRID BOX LIKE SCREENSHOT ---------- */}
      <div className="w-full bg-[#f6f2ff] rounded-2xl p-6 grid grid-cols-2 gap-4 shadow">

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Amenities</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Food</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Price</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Rooms</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>

        <div className="flex justify-between bg-[#f6f2ff] rounded-xl p-4 border border-[#ebe6fa]">
          <div>
            <p className="font-semibold">Tour Operator</p>
            <p className="text-sm text-gray-600">Excellent</p>
          </div>
          <p className="font-bold text-lg">5.0</p>
        </div>
      </div>

      {/* -------- REVIEWS -------- */}
      <div className="w-full max-w-2xl">

        {[1, 2, 3].map((item, index) => (
          <div
            key={index}
            className="mt-8 bg-white p-6 rounded-2xl shadow border"
          >
            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>

              <div>
                <p className="text-sm font-semibold">Ali Tufan</p>
                <p className="text-xs text-gray-400">April 2023</p>
              </div>
            </div>

            {/* Title */}
            <p className="mt-4 text-base font-semibold">
              The trip North is fantastic!
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Great tour & fantastic people. Really a trip and a ton of photo spots.
              Even if you're a passport type, it's so relaxed at the station so no
              worries! Great tour & many pictures from here.
            </p>

            {/* Images */}
            <div className="flex gap-3 mt-4">
              <div className="w-24 h-20 bg-gray-200 rounded-xl"></div>
              <div className="w-24 h-20 bg-gray-200 rounded-xl"></div>
              <div className="w-24 h-20 bg-gray-200 rounded-xl"></div>
            </div>

            {/* Helpful */}
            <div className="flex gap-6 mt-4 text-xs">
              <button className="text-gray-500 hover:text-black">Helpful</button>
              <button className="text-gray-500 hover:text-black">
                Not helpful
              </button>
            </div>
          </div>
        ))}

        {/* See more button */}
        <button className="mt-6 px-4 py-2 text-xs border rounded-lg hover:bg-gray-100">
          See more reviews
        </button>
      </div>

      {/* ------- LEAVE A REPLY ------- */}
      <div className="mt-14 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-2">Leave a Reply</h2>

        <p className="text-xs text-gray-500">
          Your email address will not be published. Required fields are marked *
        </p>

        {/* Form */}
        <div className="grid grid-cols-3 gap-4 mt-6 text-xs">
          <div className="flex flex-col">
            <label>Location</label>
            <input className="border rounded p-2" />
          </div>

          <div className="flex flex-col">
            <label>Amenities</label>
            <input className="border rounded p-2" />
          </div>

          <div className="flex flex-col">
            <label>Food</label>
            <input className="border rounded p-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 text-xs">
          <div className="flex flex-col">
            <label>Name</label>
            <input className="border rounded p-2" />
          </div>

          <div className="flex flex-col">
            <label>Email</label>
            <input className="border rounded p-2" />
          </div>
        </div>

        <div className="flex flex-col mt-4 text-xs">
          <label>Comment</label>
          <textarea className="border rounded p-2 h-28" />
        </div>

        <button className="mt-4 px-4 py-2 bg-black text-white rounded text-xs">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CustomerReviews;

import React from "react";
import TravelImg from "../../images/exploredetail.png"; // change path as needed

export default function TravellingAlone() {
  return (
    <div className="w-full bg-black text-white flex items-center justify-between px-16 py-14">

      {/* LEFT SECTION */}
      <div className="flex flex-col items-center text-center w-[55%]">
        <h2 className="text-3xl font-bold mb-3">
          Travelling Alone ?
        </h2>

        <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
          Join a Group and make new friends. Join a Group and make new friends.
          Join a Group and make new friends. Join a Group and make new friends.
          Join a Group and make new friends.
        </p>

        <button className="mt-6 bg-purple-500 text-white text-xs px-5 py-2 rounded-lg hover:bg-purple-600 transition">
          Join a Group Travel
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-[45%] flex justify-end">
        <img
          src={TravelImg}
          alt="Travelling Alone"
          className="w-[420px] object-contain"
        />
      </div>

    </div>
  );
}

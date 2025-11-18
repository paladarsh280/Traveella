import React from "react";

export default function TourDetailPage() {
  return (
    <div className="w-full flex justify-center py-10 px-6 bg-white text-[#1c1c1c]">
      <div className="w-full max-w-7xl flex gap-10">

        {/* LEFT SIDE CONTENT */}
        <div className="w-2/3">

          <div className="flex gap-3 mb-4">
            <span
              className="px-4 py-1 text-base rounded-full"
              style={{ backgroundColor: "#E2DAEF" }}
            >
              Bestseller
            </span>

            <span className="px-4 py-1 text-base bg-gray-100 rounded-full">
              Free cancellation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight mb-3">
            Phi Phi Islands Adventure Day Trip with <br />
            Seaview Lunch by V. Marine Tour
          </h1>

          {/* Info Row */}
          <div className="flex items-center gap-6 text-lg text-gray-700 mb-8">
            <p>4.8 (269)</p>
            <p>Paris, France</p>
            <p>30K+ booked</p>
          </div>

          {/* Icon Info Boxes */}
          <div className="flex gap-6 mb-10">
            <div className="w-32 h-20 border rounded-2xl flex flex-col justify-center pl-4 text-base">
              <span className="text-gray-500">Duration</span>
              <span className="font-medium text-lg">3 days</span>
            </div>

            <div className="w-32 h-20 border rounded-2xl flex flex-col justify-center pl-4 text-base">
              <span className="text-gray-500">Group Size</span>
              <span className="font-medium text-lg">10 people</span>
            </div>

            <div className="w-32 h-20 border rounded-2xl flex flex-col justify-center pl-4 text-base">
              <span className="text-gray-500">Ages</span>
              <span className="font-medium text-lg">18–99 yrs</span>
            </div>

            <div className="w-40 h-20 border rounded-2xl flex flex-col justify-center pl-4 text-base">
              <span className="text-gray-500">Languages</span>
              <span className="font-medium text-lg">English, Japanese</span>
            </div>
          </div>

          {/* Tour Overview */}
          <h2 className="text-2xl font-bold mb-3">Tour Overview</h2>
          <p className="text-base leading-relaxed text-gray-700 mb-8 max-w-2xl">
            The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
            Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
            Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
            and drop-off all included.
          </p>

          {/* Highlights */}
          <h2 className="text-2xl font-bold mb-3">Tour Highlights</h2>
          <ul className="list-disc list-inside text-base leading-relaxed text-gray-700 space-y-2">
            <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
            <li>Be amazed by the variety of marine life in the archipelago</li>
            <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
            <li>Feel the comfort of a tour limited to 35 passengers</li>
            <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
          </ul>
        </div>

        {/* RIGHT SIDEBAR BOOKING CARD */}
        <div className="w-1/3">
          <div className="border rounded-2xl p-6 shadow-sm sticky top-10">
            <p className="text-gray-500 text-base mb-1">From</p>
            <p className="text-3xl font-semibold mb-4">$1,200</p>

            {/* Date and Time */}
            <div className="border rounded-xl overflow-hidden mb-6">
              <div className="p-4 border-b">
                <p className="text-sm text-gray-500">From</p>
                <p className="text-base">February 05 ~ March 14</p>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-base text-gray-400">Choose time</p>
              </div>
            </div>

            {/* Tickets */}
            <h3 className="font-medium text-lg mb-3">Tickets</h3>
            <div className="space-y-4 text-base mb-6">
              <div className="flex justify-between items-center">
                <p>Adult (18+ years) <span className="font-medium">$282.00</span></p>
                <span className="text-lg">3</span>
              </div>

              <div className="flex justify-between items-center">
                <p>Youth (13–17 years) <span className="font-medium">$168.00</span></p>
                <span className="text-lg">2</span>
              </div>

              <div className="flex justify-between items-center">
                <p>Children (0–12 years) <span className="font-medium">$80.00</span></p>
                <span className="text-lg">4</span>
              </div>
            </div>

            {/* Add Extra */}
            <h3 className="font-medium text-lg mb-3">Add Extra</h3>
            <div className="space-y-3 text-base mb-6">
              <div className="flex justify-between items-center">
                <p>Add Service per booking</p>
                <span className="text-lg">$40</span>
              </div>

              <div className="flex justify-between items-center">
                <p>Add Service per person<br /><span className="text-sm">Adult: $17 • Youth: $14</span></p>
                <span className="text-lg">$40</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center border-t pt-4 mb-6">
              <p className="font-medium text-xl">Total:</p>
              <p className="font-semibold text-xl">$530.00</p>
            </div>

            {/* Button */}
            <button className="w-full bg-black text-white py-3 rounded-xl text-lg hover:bg-gray-800 transition">
              Book Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

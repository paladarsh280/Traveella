import React from "react";

export default function ExplorePage() {
  const tours = [
    {
      tag: "20% OFF",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      location: "Paris, France",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      rating: 4.8,
      reviews: 1280,
      days: "2 Days / 1 Nights",
      oldPrice: "$200",
      newPrice: "From $114",
      highlight: "Best Price Guarantee",
    },
    {
      tag: null,
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      location: "Paris, France",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      rating: 4.8,
      reviews: 1280,
      days: "2 Days / 1 Nights",
      oldPrice: "$200",
      newPrice: "From $114",
      highlight: "Best Price Guarantee",
    },
    {
      tag: "FEATURED",
      img: "https://images.unsplash.com/photo-1519817650390-64a93db511aa",
      location: "Paris, France",
      title: "Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour",
      rating: 4.8,
      reviews: 1280,
      days: "2 Days / 1 Nights",
      oldPrice: "$200",
      newPrice: "From $114",
      highlight: "Best Price Guarantee",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white px-6 md:px-16 py-10">
      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold">
        Explore all things to do in Mangalore
      </h1>

      <p className="text-gray-500 text-sm mt-1">
        THE 10 BEST Phuket Tours & Excursions
      </p>

      <div className="flex flex-col md:flex-row gap-10 mt-10">
        {/* LEFT FILTER PANEL */}
        <div className="w-full md:w-64">

          {/* Date Box */}
          <div className="border rounded-xl p-4 shadow-sm">
            <p className="text-sm font-semibold">When are you traveling?</p>
            <button className="w-full mt-3 bg-black text-white py-3 rounded-lg text-sm">
              February 05 → March 14
            </button>
          </div>

          {/* Categories */}
          <div className="mt-6">
            <h3 className="font-semibold text-sm mb-3">Tour Type</h3>

            <div className="space-y-2 text-sm text-gray-600">
              {[
                "Nature Tours",
                "Adventure Tours",
                "Cultural Tours",
                "Food Tours",
                "City Tours",
                "Cruises Tours",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  {item}
                </label>
              ))}

              <button className="text-blue-600 text-sm mt-2">See More</button>
            </div>
          </div>

          {/* Other Filters */}
          {["Filter Price", "Duration", "Language", "Rating", "Specials"].map(
            (item, i) => (
              <button
                key={i}
                className="w-full text-left mt-5 text-sm font-medium text-gray-700"
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex-1">
          {/* Results + Sort */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600">1362 results</p>

            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price</option>
              <option>Rating</option>
              <option>Newest</option>
            </select>
          </div>

          {/* TOUR CARDS */}
          <div className="mt-6 space-y-6">
            {tours.map((tour, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-5"
              >
                {/* IMAGE */}
                <div className="relative w-full md:w-56 h-40 rounded-lg overflow-hidden">
                  <img
                    src={tour.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  {tour.tag && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                      {tour.tag}
                    </span>
                  )}
                </div>

                {/* INFO SECTION */}
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{tour.location}</p>

                  <h2 className="font-semibold text-lg leading-snug mt-1">
                    {tour.title}
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    ⭐ {tour.rating} ({tour.reviews} reviews)
                  </p>

                  <p className="text-sm text-gray-600 mt-3">
                    {tour.highlight} • Free Cancellation
                  </p>
                </div>

                {/* PRICE SECTION */}
                <div className="flex flex-col justify-between items-end">
                  <p className="text-sm text-gray-600">{tour.days}</p>

                  <div className="text-right">
                    <p className="text-xs line-through text-gray-400">
                      {tour.oldPrice}
                    </p>
                    <p className="text-lg font-semibold">{tour.newPrice}</p>
                  </div>

                  <button className="border px-4 py-2 rounded-lg mt-3 text-sm hover:bg-gray-100 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
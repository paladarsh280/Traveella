
import React from "react";
import backpackingImg from "../images/backpacking.png";
import coTravel from "../images/coTravel.png";
import luxuriousTrip from "../images/luxuriousTrip.png";
import soloTravel from "../images/soloTravel.png";
import trekking from "../images/trekking.png";
import couplesTrip from "../images/couplesTrip.png";

export default function Offerings() {
  const offerings = [
    { title: "Backpacking", image: backpackingImg, className: "col-span-1 row-span-2" },
    { title: "Couples Trip", image: couplesTrip, className: "col-span-1 row-span-1" },
    { title: "Luxurious Trips", image: luxuriousTrip, className: "col-span-2 row-span-1" },
    { title: "Solo Travel", image: soloTravel, className: "col-span-1 row-span-1" },
    { title: "Co-Travel\nwith others", image: coTravel, className: "col-span-1 row-span-1" },
    { title: "Trekking", image: trekking, className: "col-span-1 row-span-1" },
  ];


  return (
  <section className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl md:text-4xl font-bold">Our Offerings</h3>
          <button className="text-accent hover:underline font-medium">See all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`${offering.className} relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <img
                src={offering.image}
                alt={offering.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl md:text-2xl font-bold whitespace-pre-line">{offering.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}

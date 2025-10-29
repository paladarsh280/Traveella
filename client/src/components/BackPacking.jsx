import React from "react";
import backpacker from "../images/BackPacker.png"
import campfire from "../images/campfire.jpg";
import backpackingImg from "../images/backpacking.png";
import couplesTripImg from "../images/couplesTrip.png";
import luxuriousTripsImg from "../images/luxuriousTrip.png";
import soloTravelImg from "../images/soloTravel.png";
import coTravelImg from "../images/coTravel.png";
import trekkingImg from "../images/trekking.png";
export default function BackPacking(){
 const tourCards = [
    {
      image: backpackingImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    }
    ,
    {
      image: luxuriousTripsImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
    {
      image: coTravelImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
    {
      image: trekkingImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
  ];

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
      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
        
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
        <p className="text-sm text-white/90 mb-2">{card.subtitle}</p>
        <p className="text-xl font-bold">{card.price}</p>
      </div>
    </div>
  );
  return( 
       <section className="max-w-6xl mx-auto mt-16 px-6">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {["BackPacking"].map((sectionTitle, idx) => (
          <section key={idx}>
            <h2 className="text-4xl font-bold mb-8">{sectionTitle}</h2>
            <div className="relative">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {tourCards.map((card, i) => (
                  <TourCard key={`${sectionTitle}-${i}`} card={card} />
                ))}
              </div>
              
            </div>
           
          </section>
        ))}
      </div>
       </section>
  );
}
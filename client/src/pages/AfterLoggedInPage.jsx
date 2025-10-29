import React, {useEffect} from "react";
import { Facebook, Instagram, Github, Send, Grid3x3, ArrowUp, Search, MapPin, Mountain, Heart, Leaf, Backpack, CheckCircle } from "lucide-react";
import heroMountains from "../images/planeMountain.png";
import campfire from "../images/campfire.jpg";
import backpackingImg from "../images/backpacking.png";
import couplesTripImg from "../images/couplesTrip.png";
import luxuriousTripsImg from "../images/luxuriousTrip.png";
import soloTravelImg from "../images/soloTravel.png";
import coTravelImg from "../images/coTravel.png";
import trekkingImg from "../images/trekking.png";
import traveella from "../images/traveellaSignup.png";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import HeroSection from "../components/HeroSection";
import NavbarAfterloggedin from "../components/navbarafterloggedin";
import SearchBar from "../components/SearchBar";
import Offerings from "../components/Offerings";
import BackPacking from "../components/BackPacking";
import CoTravel from "../components/CoTravel";
import LuxuriousTravel from "../components/LuxuriousTravel";
import aeroplane from "../images/aeroplane.svg"
import aeroplanebackward from "../images/aeroplanebackward.svg"
import Footer from "../components/Footer";
const AfterLoggedInPage = () => {
  
    // for smooth scrolling 
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2, // scroll speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }, []);
  const offerings = [
    { title: "Backpacking", image: backpackingImg, className: "col-span-1 row-span-2" },
    { title: "Couples Trip", image: couplesTripImg, className: "col-span-1 row-span-1" },
    { title: "Luxurious Trips", image: luxuriousTripsImg, className: "col-span-2 row-span-1" },
    { title: "Solo Travel", image: soloTravelImg, className: "col-span-1 row-span-1" },
    { title: "Co-Travel\nwith others", image: coTravelImg, className: "col-span-1 row-span-1" },
    { title: "Trekking", image: trekkingImg, className: "col-span-1 row-span-1" },
  ];

  const tourCards = [
    {
      image: backpackingImg,
      duration: "4 days",
      title: "Cartagena Tour - Guided Arizona",
      subtitle: "Desert Tour by ATV",
      price: "$1,249",
    },
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
        <Heart className="w-5 h-5 text-foreground" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-lg font-bold mb-1">{card.title}</h3>
        <p className="text-sm text-white/90 mb-2">{card.subtitle}</p>
        <p className="text-xl font-bold">{card.price}</p>
      </div>
    </div>
  );

  const AirplanePath = ({ reverse = false }) => (
    <div className={`relative w-full h-32 flex items-center ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="flex-1 relative">
        <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
          <path
            d={reverse ? "M 800 50 Q 600 10, 400 50 T 0 50" : "M 0 50 Q 200 10, 400 50 T 800 50"}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10,10"
            className="text-muted-foreground opacity-40"
          />
        </svg>
      </div>
      <div className={`absolute ${reverse ? 'left-8' : 'right-8'} animate-float`}>
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none"
          className={`text-foreground ${reverse ? 'rotate-[225deg]' : 'rotate-45'}`}
        >
          <path 
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );

   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

   const navigate = useNavigate();

  return (
    <div className="bg-background text-foreground overflow-y-auto">
      {/* Header */}
     <NavbarAfterloggedin/>

    <div className="pt-[120px] px-4 sm:px-6 lg:px-16  max-w-6xl  mx-auto">
 <HeroSection />
      <div className="mt-6 w-full max-w-4xl mx-auto">
                  <SearchBar />
                </div>
    </div>

      {/* Offerings */}
     <Offerings/>
         <br className="gap-y-[80px]"></br>
         <BackPacking/>
                 <img
                   src={aeroplane}
                   alt="aeroplane icon"
                   className="  mr-[70px]  max-w-6xl mx-auto h-[170px]
                      sm:w-screen sm:h-[200px]
                  md:w-screen md:h-[230px]
               lg:w-screen lg:h-[250px]
                  xl:w-screen xl:h-[300px] " 
                 />
    
              <LuxuriousTravel/>
                <img
                   src={aeroplanebackward}
                   alt="aeroplane icon"
                   className="  mr-[70px]  max-w-6xl mx-auto h-[170px]
                      sm:w-screen sm:h-[200px]
                  md:w-screen md:h-[230px]
               lg:w-screen lg:h-[250px]
                  xl:w-screen xl:h-[300px] " 
                 />
                 <CoTravel/>
                 
      <div className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold mb-16">
          Why choose Travella ?
        </h1>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left side - Illustration */}
          <div className="bg-black rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden min-h-[400px]">
            <img 
              src={heroMountains} 
              alt="Mountain landscape with traveler" 
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right side - Campfire Image */}
          <div className="rounded-[3rem] overflow-hidden min-h-[400px]">
            <img 
              src={campfire} 
              alt="Group of travelers around campfire" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Budget-Friendly Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 left-8">
              <Leaf className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Budget-Friendly</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Unlock adventures without breaking the bank. Enjoy group discounts, 
                shared costs, and smart packages that keep every trip affordable and 
                unforgettable.
              </p>
            </div>
          </div>

          {/* Travel Together Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 right-8">
              <Backpack className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Travel Together</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Meet like-minded explorers, build lasting friendships, and share 
                unforgettable journeys that turn every trip into a story worth telling.
              </p>
            </div>
          </div>

          {/* Trusted Agents Card */}
          <div className="border-2 border-foreground rounded-[2.5rem] p-8 relative">
            <div className="absolute top-8 left-8">
              <CheckCircle className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-4">Trusted Agents</h2>
              <p className="text-sm leading-relaxed opacity-90">
                Book with confidence through our network of verified and reliable 
                partners, ensuring safe, seamless, and worry-free travel every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>






<Footer/>



      {/* Hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AfterLoggedInPage;

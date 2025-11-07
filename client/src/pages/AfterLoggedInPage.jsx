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
import HeroSection from "../components/afterBeforeCommon/HeroSection";
import NavbarAfterloggedin from "../components/afterLoggedInPage/navbarafterloggedin";
import SearchBar from "../components/afterBeforeCommon/SearchBar";
import Offerings from "../components/afterBeforeCommon/Offerings";
import BackPacking from "../components/afterBeforeCommon/BackPacking";
import CoTravel from "../components/afterBeforeCommon/CoTravel";
import LuxuriousTravel from "../components/afterBeforeCommon/LuxuriousTravel";
import aeroplane from "../images/aeroplane.svg"
import aeroplanebackward from "../images/aeroplanebackward.svg"
import Footer from "../components/common/Footer";
import chooseTraveella from "../images/whyChoseTravella.png";

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
                 
     


{/* Footer Image */}
      <div className="w-full mt-10 flex justify-center px-4 sm:px-8 lg:px-16">
        <img
          src={chooseTraveella}
          alt="Why Choose Travella"
          className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-lg"
        />
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

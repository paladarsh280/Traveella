import React from "react";
import { User } from "lucide-react";
import bgImg from "../../images/carImg.png"
import Traveellalogo from "../../images/traveellalogo.png"; // your Traveella logo

const TopImage = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f9f9fb]">
      {/* Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div>

      {/* Navbar */}
      <header className="absolute top-4 left-0 right-0 flex justify-between items-center px-10 z-10">
        <img src={Traveellalogo} alt="Traveella Logo" className="h-10 w-auto" />

        <nav className="flex items-center gap-6 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
          <a href="#" className="hover:text-[#d6b97b] transition">
            Discovery
          </a>
          <a href="#" className="hover:text-[#d6b97b] transition">
            Blogs
          </a>
          <a href="#" className="hover:text-[#d6b97b] transition">
            About Us
          </a>
        </nav>

        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
          <User size={20} />
        </div>
      </header>

      {/* Lower Content Boxes */}
      <div className="relative -mt-32 flex justify-center items-start gap-6 px-10 z-20">
        {/* Left Box */}
        <div className="bg-gray-300 rounded-lg shadow-md w-[500px] h-[350px]"></div>

        {/* Right Box */}
        <div className="bg-white rounded-lg shadow-md w-[520px] h-[403px]"></div>
      </div>
    </section>
  );
};

export default TopImage;

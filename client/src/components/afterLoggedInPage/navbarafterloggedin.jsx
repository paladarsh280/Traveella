import React from "react";
import { useNavigate } from "react-router-dom";
import travel1 from "../../images/traveellaSignup.png";
import { CircleUser } from "lucide-react";

export default function NavbarAfterloggedin() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-16 py-3 bg-white shadow-md">
      <img
        src={travel1}
        alt="Travel"
        className="h-12 sm:h-16 md:h-20 w-auto object-contain"
      />

      <div className="hidden md:flex bg-black border border-black px-6 py-2 rounded-full space-x-6 lg:space-x-10 text-sm lg:text-base font-medium">
        <button
          onClick={() => handleNavigation("/discovery")}
          className="hover:text-gray-400 text-white transition-colors duration-200 font-bold"
        >
          Discovery
        </button>

        <button
          onClick={() => handleNavigation("/blogs")}
          className="hover:text-gray-400 text-white transition-colors duration-200 font-bold"
        >
          Blogs
        </button>

        <button
          onClick={() => handleNavigation("/aboutus")}
          className="hover:text-gray-400 text-white transition-colors duration-200 font-bold"
        >
          About Us
        </button>
      </div>

      <div className="flex space-x-2 sm:space-x-3 text-xs sm:text-sm ">
        <a
          href="#"
          className="text-foreground hover:text-secondary transition-colors"
          aria-label="Profile"
        >
          <CircleUser className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}

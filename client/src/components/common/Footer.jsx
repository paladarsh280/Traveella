import React from "react";
import { Facebook, Instagram, Github, Send, Grid3x3, ArrowUp } from "lucide-react";
import traveella from "../../images/traveellaSignup.png";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-background border-t-4 border-secondary relative">
      {/* Main Footer Content */}
      <div className="py-12 px-[50px] md:px-[45px]">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Socials */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <img src={traveella} alt="Traveella Logo" className="w-40 h-auto" />
              <p className="text-sm text-muted-foreground">
                Travel made simple, affordable, and connected.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                {[Facebook, Instagram, Github, Send, Grid3x3].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-foreground hover:text-secondary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-2 font-medium">
                Contact Us
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap gap-6 text-sm border-t pt-6">
            {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-foreground hover:text-secondary transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Wave Section */}
      <div className="relative h-64 overflow-hidden w-full">
        <svg
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--wave-gray))"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,90.7C960,96,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z"
          ></path>
          <path
            fill="hsl(var(--footer-bg))"
            fillOpacity="0.5"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,213.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L0,320Z"
          ></path>
          <path
            fill="hsl(var(--footer-dark))"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,218.7C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>

        {/* Copyright and Scroll */}
        <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto">
          <p className="text-white text-sm">© 2021 All Rights Reserved</p>
          <button
            onClick={scrollToTop}
            className="rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 p-2"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
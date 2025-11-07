import React from "react";

const WhyWeExist = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28 px-6 sm:px-10 md:px-16 py-20 sm:py-28 md:py-32 bg-[#f9f9fb]">
      {/* Left Side - Heading */}
      <div className="text-center md:text-left w-full md:w-auto flex justify-center md:justify-end md:mr-auto -mt-4 md:-mt-14">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-black leading-tight md:ml-8 md:-translate-x-8">
          Why we <br /> Exist?
        </h1>
      </div>

      {/* Right Side - Image Box (responsive) */}
      <div className="bg-[#e9def9] rounded-2xl overflow-hidden shadow-xl w-[90%] sm:w-[520px] sm:h-[360px] md:w-[720px] md:h-[480px] flex items-center justify-center mx-auto md:mx-0 md:-translate-x-12 transition-all">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Why We Exist"
          className="w-full h-full object-cover object-[center_65%]"
        />
      </div>
    </section>
  );
};

export default WhyWeExist;
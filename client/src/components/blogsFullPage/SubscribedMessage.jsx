import React from "react";
import Tick from "../../images/newsletterTick2.png"; // tick image

const SubscribedMessage = () => {
  return (
    <section className="bg-[#f9f9fb] py-20 flex justify-center items-center">
      <div className="bg-black text-white rounded-2xl w-[1150px] h-[320px] shadow-lg flex flex-col justify-center items-center text-center px-10">
        
        {/* Signup Successful with Tick inside Circle on LEFT */}
        <h2 className="text-4xl font-extrabold mb-5 flex items-center gap-4">
          {/* Circle with Tick */}
          <div className="w-12 h-12 bg-[#28a745] rounded-full flex items-center justify-center">
            <img src={Tick} alt="success tick" className="w-6 h-6" />
          </div>
          Signup Successful !!
        </h2>

        <h2 className="text-2xl font-semibold mb-4 text-[#E2AD64]">
          🎒 Woohoo! You’re officially part of the Travella Tribe.
        </h2>

        <p className="text-gray-300 text-base max-w-2xl leading-relaxed">
          You’ve joined the Travella community newsletter — expect curated
          travel insights, exclusive trip updates, and stories that inspire you
          to wander freely.
        </p>
      </div>
    </section>
  );
};

export default SubscribedMessage;

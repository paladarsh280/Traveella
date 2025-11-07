import React, { useState } from "react";
import Envelopes from "../../images/Envelopes.png"; 
import SubscribedMessage from "./SubscribedMessage";

const NewsletterAndReview = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return <SubscribedMessage />;
  }

  return (
    <section className="bg-[#f9f9fb] py-16 flex justify-center px-4">
    
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1150px]">
    
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-black p-6 md:p-8 lg:p-10 rounded-lg w-full md:flex-1">
          
          {/* Left Content */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <p className="text-xl md:text-2xl text-white font-bold font-[Figtree] mb-3">
              Join my newsletter
            </p>
            <p className="text-sm md:text-base text-white font-[Figtree] mb-5">
              Receive fresh articles straight in your inbox, every Friday morning. I also share interesting finds from the internet!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-10 flex-1 sm:max-w-md rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              />
              <button
                onClick={handleSubscribe} // ← yahi lagana tha
                className="h-10 w-full sm:w-32 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#7C3AED] transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-[#E2AD64]">
              Weekly newsletter only. No spam, unsubscribe at any time.
            </p>
          </div>
    
          {/* Envelope Image */}
          <img src={Envelopes} alt="Envelopes" className="w-32 md:w-40 lg:w-48 flex-shrink-0" />
        </div>
    
        {/* Customer Review */}
        <div className="bg-[#f2e9ff] rounded-l-xl p-8 flex flex-col justify-between w-full md:w-[380px]">
          <div className="text-5xl font-serif text-black mb-3">“</div>
          <h3 className="text-lg font-semibold text-black mb-2">
            Customer Reviews
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            The tours in this website are great. I had been really enjoying with
            my family! The team is very professional and taking care of the
            customers. Will surely recommend my friends to join this company!
          </p>
          <p className="text-right text-[#7f56d9] font-medium text-sm">
            – Ali Tufan
          </p>
        </div>
    
      </div>
    
    </section>
  );
};

export default NewsletterAndReview;

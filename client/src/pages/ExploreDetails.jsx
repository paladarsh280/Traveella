import React from "react";

export default function TourMap() {
  return (
    <div className="w-full px-10 py-12">
      
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
        Tour Map
      </h2>

      {/* Map Box */}
      <div className="w-full max-w-5xl h-[500px] rounded-xl overflow-hidden shadow-md border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12653767.63814504!2d-98.5!3d31.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
}

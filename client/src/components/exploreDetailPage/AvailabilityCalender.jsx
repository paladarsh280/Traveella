import React from "react";

export default function AvailabilityCalendar() {
  return (
    <div className="w-full px-28 py-10">  {/* ← Right-shift same as others */}
      
      {/* Title */}
      <h2 className="text-[32px] font-bold mb-6">
        Availability Calendar
      </h2>

      {/* Calendar Box */}
      <div className="w-[380px] border shadow-md rounded-xl p-5 bg-white">

        {/* Header: Month Switch */}
        <div className="flex justify-between items-center text-sm text-gray-700 font-semibold mb-4">
          <button className="text-gray-600">&lt;</button>

          <div className="flex gap-10">
            <span>February, 2024</span>
            <span>March, 2024</span>
          </div>

          <button className="text-gray-600">&gt;</button>
        </div>

        {/* Week Days */}
        <div className="grid grid-cols-7 text-xs font-medium text-purple-600 mb-2">
          <span>Sun</span><span>Mon</span><span>Tue</span>
          <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 text-sm text-gray-700 gap-y-3">

          {/* Blank spaces */}
          <span></span><span></span><span></span>

          {[
            1, 2, 3, 4, 5, 6, 7,
            8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23,
            24, 25, 26, 27, 28, 29
          ].map((day) => (
            <span
              key={day}
              className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer
                ${day === 10 ? "bg-yellow-400 text-white font-semibold" : "hover:bg-gray-100"}
              `}
            >
              {day}
            </span>
          ))}
        </div>

        {/* Bottom number (31) */}
        <div className="w-full text-center text-xs mt-4 text-gray-600">31</div>

      </div>
    </div>
  );
}

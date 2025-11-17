export default function Itinerary() {
  const items = [
    { day: "Day 1: Airport Pick Up", filled: true },
    { day: "Day 2: Temples & River Cruise", filled: false },
    { 
      day: "Day 3: Massage & Overnight Train", 
      filled: false,
      desc: `Like on all of our trips, we can collect you from the airport when you land and 
      take you directly to your hotel. The first Day is just a check-in Day so you have this 
      freedom to explore the city and get settled in.`
    },
    { day: "Day 4: Khao Sok National Park", filled: false },
    { day: "Day 5: Travel to Koh Phangan", filled: false },
    { day: "Day 6: Morning Chill & Muay Thai Lesson", filled: false },
    { day: "Day 7: Island Boat Trip", filled: true }
  ];

  return (
    <div className="w-full px-10 py-10">
      <h2 className="text-[24px] font-bold mb-6">Itinerary</h2>

      <div className="relative border-l-2 border-dotted border-gray-300 ml-4">

        {items.map((item, index) => (
          <div key={index} className="mb-6 ml-6">

            {/* Dot */}
            <span
              className={`
                absolute -left-[11px] mt-1 w-4 h-4 rounded-full border 
                ${item.filled ? "bg-black border-black" : "border-black bg-white"}
              `}
            ></span>

            {/* Day Title */}
            <p className="text-[15px] text-gray-900 font-medium">{item.day}</p>

            {/* Optional Description */}
            {item.desc && (
              <p className="text-[14px] text-gray-700 mt-2 leading-relaxed max-w-xl">
                {item.desc}
              </p>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

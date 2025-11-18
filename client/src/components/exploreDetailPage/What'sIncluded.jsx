export default function WhatsIncluded() {
  return (
    <div className="w-full px-28 py-10"> {/* ← Increased right shift */}
      <h2 className="text-[32px] font-bold mb-6">
        What's included
      </h2>

      <div className="grid grid-cols-2 gap-12">

        {/* Left Column */}
        <div className="flex flex-col space-y-5">
          
          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">
              Beverages, drinking water, morning tea and buffet lunch
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">Local taxes</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">
              Hotel pickup and drop-off by air-conditioned minivan
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">
              Insurance/Transfer to a private pier
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">Soft drinks</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-green-100"></span>
            <p className="text-[17px] text-gray-800">Tour Guide</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-5">

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-red-100"></span>
            <p className="text-[17px] text-gray-800">Towel</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-red-100"></span>
            <p className="text-[17px] text-gray-800">Tips</p>
          </div>

          <div className="flex items-start space-x-3">
            <span className="w-3 h-3 rounded-full bg-red-100"></span>
            <p className="text-[17px] text-gray-800">Alcoholic Beverages</p>
          </div>

        </div>
      </div>
    </div>
  );
}

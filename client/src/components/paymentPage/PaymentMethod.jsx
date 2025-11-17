import React from "react";

export default function PaymentMethods() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 md:p-8">
      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A0A23] mb-10 tracking-tight text-center">
        Payment Methods
      </h1>

      {/* MAIN CONTAINER */}
      <div
        className="bg-white w-full max-w-[88rem] p-6 md:p-10 rounded-3xl 
        border border-gray-200 shadow-2xl shadow-gray-300/40 
        grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {/* LEFT SECTION — Trip + Bill */}
        <div className="col-span-2 space-y-8">
          {/* TRIP CARD */}
          <div
            className="border rounded-2xl p-4 md:p-6 flex flex-col md:flex-row 
            gap-6 items-start md:items-center shadow-sm"
          >
            <div className="flex-1">
              {/* TAGS */}
              <div className="flex gap-2 flex-wrap mb-3 text-xs font-medium">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  Free cancellation
                </span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  Bestseller
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-lg md:text-xl font-bold text-[#0A0A23] leading-snug">
                Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour
              </h2>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip.
              </p>

              {/* DATE BOXES */}
              <div className="flex flex-wrap gap-4 mt-4 text-[11px] md:text-xs font-semibold">
                <div className="bg-[#0A0A23] text-white px-4 py-2 rounded-md text-center">
                  <p className="opacity-70 font-normal">From</p>
                  <p>21-11-25</p>
                </div>

                <div className="bg-[#0A0A23] text-white px-4 py-2 rounded-md text-center">
                  <p className="opacity-70 font-normal">To</p>
                  <p>24-11-25</p>
                </div>

                <div className="bg-[#0A0A23] text-white px-4 py-2 rounded-md text-center">
                  <p className="opacity-70 font-normal">Duration</p>
                  <p>3 days</p>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Trip"
              className="w-full md:w-36 h-40 md:h-32 object-cover rounded-lg"
            />
          </div>

          {/* BILL SECTION */}
          <div className="bg-[#E8DCF9] rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 text-sm text-[#372B63] gap-y-3">
              <p className="font-medium">Free cancellation</p>
              <p className="text-right font-semibold">500</p>

              <p className="font-medium">Trip price</p>
              <p className="text-right font-semibold">600</p>

              <p className="font-medium">GST</p>
              <p className="text-right font-semibold">100</p>

              <p className="font-medium">Platform price</p>
              <p className="text-right font-semibold">100</p>
            </div>

            <hr className="my-6 border-[1.8px] border-[#4A3F78]" />

            <div className="flex justify-between items-center">
              <span className="text-lg md:text-xl font-semibold text-[#0A0A23]">
                Your Bill is:
              </span>
              <span className="text-3xl md:text-4xl font-extrabold text-[#0A0A23]">
                Rs. 1200
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-5 w-full">
          {/* PURPLE CARD — CARD PREVIEW */}
          <div className="bg-[#6C63FF] text-white p-6 rounded-xl shadow-lg">
            <p className="tracking-wider text-xs md:text-sm font-semibold">DEBIT/CREDIT</p>

            <p className="mt-4 text-xl md:text-2xl font-bold">•••• •••• •••• 2313</p>

            <div className="flex justify-between text-[10px] md:text-xs mt-4 opacity-90">
              <span>Card holder name</span>
              <span>Expiry date</span>
            </div>

            <div className="flex justify-between text-sm mt-1 font-semibold">
              <span>•••• ••••</span>
              <span>•• / ••</span>
            </div>
          </div>

          {/* PAYMENT OPTIONS */}
          <div className="space-y-4 mt-4">
            <PaymentOption
              title="DebitCard"
              subtitle="•••• 0783 7873"
              right={<div className="w-4 h-4 rounded-full bg-red-500"></div>}
            />

            <PaymentOption
              title="UPI_Paypal"
              subtitle="••••@paypal"
              right={<span className="text-blue-600 font-bold">PayPal</span>}
            />

            <PaymentOption
              title="Paytm"
              subtitle="•••• 4672"
              right={<span className="text-sky-600 font-bold">Paytm</span>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL REUSABLE COMPONENT */
function PaymentOption({ title, subtitle, right }) {
  return (
    <div
      className="border p-4 rounded-xl flex justify-between items-center 
      shadow-sm cursor-pointer hover:shadow-md transition"
    >
      <div>
        <p className="font-semibold text-[#0A0A23]">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
      {right}
    </div>
  );
}

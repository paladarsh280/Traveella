import React from "react";
import bag from "../images/bag.svg";

export default function UserForm() {
    return (
        <div className="w-full  px-4 py-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                    <h1
                        className="font-bold text-2xl sm:text-3xl md:text-4xl text-black text-center md:text-left"
                        style={{
                            fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`,
                        }}
                    >
                        My Profile
                    </h1>

                    <div className="flex items-center gap-4">
                        <img
                            src={bag}
                            alt="Bag"
                            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                        />
                        <button className="hidden sm:inline-block w-[250px] md:w-[320px] h-[48px] sm:h-[56px] bg-black text-white rounded-xl hover:bg-gray-800 transition-colors text-sm sm:text-base px-3">
                            Check Out Blogs for Safety and Precautions
                        </button>
                    </div>
                </div>

                <p className="text-black text-sm sm:text-base md:text-lg mt-4 max-w-3xl">
                    Complete your profile for a safer and more comfortable travelling!
                </p>

                {/* Form */}
                <form className="mt-8 bg-white" onSubmit={(e) => e.preventDefault()}>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">Full Name</span>
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">Phone</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">Date of Birth</span>
                                <input
                                    type="date"
                                    name="dob"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col md:col-span-2">
                                <span className="text-lg font-semibold mb-2">Address</span>
                                <textarea
                                    name="address"
                                    placeholder="Enter your address"
                                    rows={4}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">City</span>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-lg font-semibold mb-2">Country</span>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Country"
                                    className="h-12 sm:h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </label>
                        </div>

                        <div className="mt-6 flex justify-center md:justify-end">
                            <button
                                type="submit"
                                className="w-full md:w-[180px] px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
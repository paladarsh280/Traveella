
import React from "react";
import review1 from "../images/review1.png";
export default function ReviewSection() {
    const reviewsData = [
        {
            overview: "Great Work",
            reviewText: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
            imgSrc: {review1},
            name: "Courtney Henry",
            role: "Web Designer"
        },
        {
            overview: "Great Work",
            reviewText: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
            imgSrc: "../images/review1.png",
            name: "Courtney Henry",
            role: "Web Designer"
        },
        {
            overview: "Great Work",
            reviewText: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance",
            imgSrc: "../images/review1.png",
            name: "Courtney Henry",
            role: "Web Designer"
        }
    ];

    const statsData = [
        {
            value: "4.9",
            description: "1000+ reviews on TripAdvisor. Certificate of Excellence"
        },
        {
            value: "16M",
            description: "Happy Customers"
        },
        {
            value: "Award winner",
            description: "G2's 2021 Best Software Awards"
        }
    ];

    return (
        <div className="w-full max-w-5xl bg-[#DDD3EC] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0B2E] mb-8 text-center lg:text-left">
                    What our Travelers are saying
                </h2>
                
                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {reviewsData.map((review, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Overview/Title */}
                            <h3 className="text-lg font-semibold text-[#FF6B35] mb-4">
                                {review.overview}
                            </h3>
                            
                            {/* Review Text */}
                            <p className="text-sm text-gray-700 mb-6 leading-relaxed font=[inter]">
                                {review.reviewText}
                            </p>
                            
                            {/* Reviewer Info */}
                            <div className="flex items-center gap-3">
                                <img 
                                    src={review.imgSrc} 
                                    alt={review.name} 
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-[#0A0B2E] text-sm">
                                        {review.name}
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
                    {statsData.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0B2E]">
                                {stat.value}
                            </h3>
                            <p className="text-sm text-[#0A0B2E]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

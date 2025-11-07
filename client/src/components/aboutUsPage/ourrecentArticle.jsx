import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      author: "author",
      date: "14 Oct, 2025",
      title: "Belh snuhne ki kjdiuhe bjd gjrfgljibw bdeflyfekk huahi",
      description:
        "Stay informed with our latest articles and explore insights that inspire your next journey.",
    },
    {
      id: 2,
      author: "author",
      date: "14 Oct, 2025",
      title: "Belh snuhne ki kjdiuhe bjd gjrfgljibw bdeflyfekk huahi",
      description:
        "Stay informed with our latest articles and explore insights that inspire your next journey.",
    },
    {
      id: 3,
      author: "author",
      date: "14 Oct, 2025",
      title: "Belh snuhne ki kjdiuhe bjd gjrfgljibw bdeflyfekk huahi",
      description:
        "Stay informed with our latest articles and explore insights that inspire your next journey.",
    },
  ];

  return (
    <section className="bg-[#f9f9fb] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-14 max-w-7xl mx-auto gap-6 sm:gap-0">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Our Recent Articles
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-2">
            Stay informed with our latest articles
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white border rounded-full shadow-md hover:bg-gray-100 transition">
            <ChevronLeft size={22} />
          </button>
          <button className="p-3 bg-white border rounded-full shadow-md hover:bg-gray-100 transition">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 max-w-7xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-[#d6b97b] transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Image Placeholder */}
            <div className="h-56 sm:h-60 md:h-64 bg-gray-300 rounded-t-3xl"></div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span className="text-[#d6b97b] font-semibold uppercase tracking-wide">
                  {article.author}
                </span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-5 leading-relaxed">
                {article.description}
              </p>
              <a
                href="#"
                className="text-[#d6b97b] text-sm sm:text-base font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;
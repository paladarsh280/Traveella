import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecentArticles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log("Error fetching articles:", err));
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blogsfull/${id}`);
  };

  return (
    <section className="bg-[#fafafa] py-12 px-6 md:px-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-black">
            Our Recent Articles
          </h2>
          <p className="text-sm text-[#457bff] underline mt-1 inline-block">
            Stay informed with our latest articles
          </p>
        </div>

        <div className="flex gap-2">
          <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <ArrowLeft size={18} />
          </button>
          <button className="w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="h-[180px] bg-gray-300">
              <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <div className="flex justify-between text-xs text-gray-600 mb-2">
                <span className="text-[#ff5c00] font-semibold">
                  {article.author}
                </span>
                <span>{article.date}</span>
              </div>

              <h3 className="font-semibold text-[15px] text-black mb-2 leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{article.desc}</p>

              <button
                onClick={() => handleReadMore(article._id)}
                className="text-[#457bff] font-semibold text-sm"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;

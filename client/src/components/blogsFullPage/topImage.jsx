import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import { useParams } from "react-router-dom";
import bgImg from "../../images/carImg.png";
import Traveellalogo from "../../images/traveellalogo.png";

const TopImage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-500">
        Loading article...
      </section>
    );
  }

  if (!article) {
    return (
      <section className="py-20 text-center text-red-500">
        Article not found.
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-[#f9f9fb]">
      {/* Top Background Image */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${article.img || bgImg})`,
        }}
      ></div>

      {/* Navbar */}
      <header className="absolute top-4 left-0 right-0 flex justify-between items-center px-10 z-10">
        <img src={Traveellalogo} alt="Traveella Logo" className="h-10 w-auto" />

        <nav className="flex items-center gap-6 bg-black text-white px-6 py-2 rounded-full text-sm font-semibold">
          <a href="#" className="hover:text-[#d6b97b] transition">
            Discovery
          </a>
          <a href="#" className="hover:text-[#d6b97b] transition">
            Blogs
          </a>
          <a href="#" className="hover:text-[#d6b97b] transition">
            About Us
          </a>
        </nav>

        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
          <User size={20} />
        </div>
      </header>

      {/* Article Content */}
      <div className="relative -mt-32 flex justify-center items-start gap-6 px-10 z-20">
        <div className="bg-white rounded-lg shadow-md w-[1100px] min-h-[650px] p-10">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span className="text-[#ff5c00] font-semibold">
              {article.author}
            </span>
            <span>{article.date}</span>
          </div>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {article.content || article.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopImage;

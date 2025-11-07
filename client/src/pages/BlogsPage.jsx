import React from "react";
import Top from "../components/blogsPage/topImage";
import Articles from "../components/blogsPage/recentArticles";
import NewsLetter from "../components/blogsPage/NewsLetterAndReview"
import Footer from "../components/common/Footer"

const BlogsPage = () => {
  return (
    <div className="flex flex-col">
      <Top />
      <Articles />
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default BlogsPage;

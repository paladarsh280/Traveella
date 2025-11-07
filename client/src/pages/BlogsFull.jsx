import React from "react";
import Top from "../components/blogsFullPage/topImage";
import Articles from "../components/blogsFullPage/recentArticles";
import NewsLetter from "../components/blogsFullPage/NewsLetterAndReview"
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

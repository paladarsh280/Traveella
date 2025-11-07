import WhatWeOffer from "../components/aboutUsPage/WhatWeOffer";
import OurRecentArticle from "../components/aboutUsPage/ourrecentArticle";      
import TheTraveellaExperience from "../components/aboutUsPage/theTraveellaExperience";
import TheTraveellaStory from "../components/aboutUsPage/TheTraveellaStory";
import WhyWeExist from "../components/aboutUsPage/WhyWeExist";
import WhyWeTravel from "../components/aboutUsPage/WhyWeTravel";
import Footer from "../components/common/Footer";
import Navbar from "../components/afterLoggedInPage/navbarafterloggedin";




const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <WhyWeTravel />  
      <WhyWeExist />
      <TheTraveellaStory />
      <WhatWeOffer />
      <TheTraveellaExperience />
      <OurRecentArticle />
      <Footer />
    </div>
  );
};

export default AboutUs;
import ExploreSection from "../components/explorePage/ExpllorePage";
import MangaloreSection from "../components/explorePage/MangalorePlaces";
import NavbarBeforeloggedin from "../components/beforeLoggedInPage/navbarbeforeloggedin";
import Footer from "../components/common/Footer";
import ToursPage from "../components/explorePage/tourPage";
import TravellingAlone from "../components/explorePage/TravellingAlone";
import PaymentHeader from "../components/paymentPage/PaymentHeader";

const ExplorePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <NavbarBeforeloggedin />
      <PaymentHeader />

      {/* Travelling Alone Section */}
      <TravellingAlone />

      {/* Explore Section */}
      <ExploreSection />

      {/* Mangalore Places Section */}
      <MangaloreSection />

      {/* Tours Page Section */}
      <ToursPage />

      <Footer />
    </div>
  );
};

export default ExplorePage;

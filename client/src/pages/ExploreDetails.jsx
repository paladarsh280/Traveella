import AvailabilityCalendar from "../components/exploreDetailPage/AvailabilityCalender";
import NavbarBeforeloggedin from "../components/beforeLoggedInPage/navbarbeforeloggedin";
import Footer from "../components/common/Footer";
import CustomerReviews from "../components/exploreDetailPage/CustomerReview";
import FaqPageForExplore from "../components/exploreDetailPage/FaqPageForDetailPage";
import PaymentHeader from "../components/paymentPage/PaymentHeader";
import Itinerary from "../components/exploreDetailPage/Itinerary";
import TourDetailPage from "../components/exploreDetailPage/TouristDetailPage";
import TourPage from "../components/exploreDetailPage/TourPage";
import WhatsIncluded from "../components/exploreDetailPage/What'sIncluded";
import PhotoGallery from "../components/exploreDetailPage/photoGallery";
import SearchBar from "../components/exploreDetailPage/Search";

const ExploreDetails = () => {  
    return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <NavbarBeforeloggedin />
      <PaymentHeader /> 
        <SearchBar />
        <PhotoGallery />

        {/* Availability Calendar Section */}
        <TourDetailPage />
        
        <WhatsIncluded />

        <Itinerary />

        <TourPage />

        <AvailabilityCalendar />
        {/* FAQ Section */}

        <FaqPageForExplore />
        {/* Customer Reviews Section */}
        <CustomerReviews />
        
        <Footer />
    </div>
  );
};

export default ExploreDetails;
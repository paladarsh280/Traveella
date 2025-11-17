import PaymentHeader from "../components/paymentPage/PaymentHeader";
import FAQPage from "../components/paymentPage/FAQPage";
import RecommendationPage from "../components/paymentPage/RecommendationPage";
import Footer from "../components/common/Footer";
import PaymentMethod from "../components/paymentPage/PaymentMethod";
import NavbarBeforeloggedin from "../components/beforeLoggedInPage/navbarbeforeloggedin";

const PaymentPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white">
      <NavbarBeforeloggedin />
      {/* Payment Header */}
      <PaymentHeader />
      {/* Payment Method Section */}
      <PaymentMethod />
      {/* Recommendation Section */}
      <RecommendationPage />
      {/* FAQ Section */}
      <FAQPage />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PaymentPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../images/signupImg.jpg";
import googleImg from "../images/googleImg.png";
import signupLogo from "../images/traveellaSignup.png";

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-[40%_33%] bg-no-repeat"
      style={{ backgroundImage: `url(${signupImg})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div
        className="
          relative z-10
          w-[90%] max-w-lg sm:max-w-xl lg:max-w-2xl
          bg-white/80 backdrop-blur-xl border border-white/30
          rounded-2xl shadow-2xl
          p-6 sm:p-8 md:p-10
          flex flex-col items-center
          max-h-[95vh] overflow-auto
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src={signupLogo}
            alt="Travel"
            className="h-28 sm:h-32 object-contain"
          />
        </div>

        {/* Headings */}
        <h1 className="text-gray-900 text-3xl sm:text-4xl font-extrabold mb-1">
          Travel With Us
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl font-medium mb-6">
          Join us today
        </p>

        {/* Google Signup */}
        <button
          onClick={() =>
            (window.location.href =
              "http://localhost:5000/api/users/auth/google")
          }
          className="flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[17px] mb-5 hover:bg-gray-50 transition w-[340px] h-[60px] shadow-sm"
        >
          <img src={googleImg} alt="Google logo" className="w-6 h-6 mr-3" />
          Sign up with Google
        </button>

        <div className="text-gray-500 font-medium mb-4">OR</div>

        {/* Email/Phone Signup */}
        <button
          onClick={() => navigate("/signupwithphoneoremail")}
          className="flex justify-center items-center border border-gray-300 rounded-full bg-black font-semibold text-[17px] mb-6 hover:bg-gray-800 transition w-[340px] h-[60px] text-white shadow-md"
        >
          Sign up with phone or email
        </button>

        {/* Terms */}
        <p className="text-gray-600 text-[13px] text-center leading-relaxed mb-8 px-6">
          By signing up, you agree to the{" "}
          <a href="#" className="text-black underline hover:text-gray-700">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-black underline hover:text-gray-700">
            Privacy Policy
          </a>
          , including{" "}
          <a href="#" className="text-black underline hover:text-gray-700">
            Cookie Use
          </a>
          .
        </p>

        {/* Already have an account */}
        <div className="text-center">
          <p className="font-semibold mb-3 text-gray-800">
            Already have an account?
          </p>
          <button
            onClick={() => navigate("/login")}
            className="flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[15px] hover:bg-gray-100 transition w-[340px] h-[45px] text-black shadow-sm"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

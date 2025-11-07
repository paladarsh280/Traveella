import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../images/signupImg.jpg";
import googleImg from "../images/googleImg.png";
import signupLogo from "../images/traveellaSignup.png";
import axios from "axios";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Signup submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessage("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType: "user", // default to user since toggle removed
      });

      setMessage(res.data.message);
      setTimeout(() => navigate("/afterloggedinpage"), 500);
    } catch (err) {
      console.error(err.response?.data);
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="relative h-screen w-screen flex items-center justify-center bg-cover bg-[40%_33%] bg-no-repeat"
      style={{ backgroundImage: `url(${signupImg})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-[90%] max-w-lg bg-white/80 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center max-h-[95vh] overflow-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={signupLogo}
            alt="Travel"
            className="h-28 sm:h-32 object-contain"
          />
        </div>

        {/* Headings */}
        <h1 className="text-gray-900 text-3xl font-extrabold mb-1">
          Travel With Us
        </h1>
        <p className="text-gray-600 text-lg font-medium mb-6">Join us today</p>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-sm"
        >
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Password */}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <span
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs cursor-pointer"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white rounded-lg py-3 font-semibold text-base hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-4 text-blue-600 text-sm text-center">{message}</p>
        )}

        {/* Google Signup */}
        <button
          onClick={() =>
            (window.location.href =
              "http://localhost:5000/api/users/auth/google")
          }
          className="mt-[20px] flex justify-center items-center border border-gray-300 rounded-full bg-white font-semibold text-[17px] mb-5 hover:bg-gray-50 transition w-[340px] h-[80px] shadow-sm"
        >
          <img
            src={googleImg}
            alt="Google logo"
            className="w-6 h-6 mr-3"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

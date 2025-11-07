const express = require("express");
const router = express.Router();
const passport = require("passport");
const { signup, login } = require("../controllers/Auth");

// ---------- NORMAL AUTH ROUTES ---------- //

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// ---------- GOOGLE AUTH ROUTES ---------- //

// Start Google OAuth login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route after Google login
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  (req, res) => {
    // Ye tab chalega jab Google se auth successful ho jaye
    // Ab tu frontend pe redirect kar sakta hai with token
    const token = req.user?.token; // tu ye token generate karega passport callback me (controller me)
    const redirectUrl = `${process.env.FRONTEND_URL}/afterloggedinpage?token=${token}`;

    res.redirect(redirectUrl);
  }
);

module.exports = router;

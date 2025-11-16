// ---------- Imports ---------- //
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

// ---------- Local Files ---------- //
require("./config/passport");
const db = require("./config/database");
const tourRoutes = require("./routes/tour"); 
const userRoutes = require("./routes/User");
const articleRoutes = require("./routes/article");

// ---------- App Setup ---------- //
const app = express();

// ---------- Database Connection ---------- //
db.connect();

// ---------- Middlewares ---------- //
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// ---------- Session Setup ---------- //
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard_cat_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    },
  })
);

// ---------- Passport ---------- //
app.use(passport.initialize());
app.use(passport.session());

// ---------- Routes ---------- //
app.use("/api/tours", tourRoutes);
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// ---------- Test Route ---------- //
app.get("/", (req, res) => res.send("🚀 Traveella backend running successfully!"));

// ---------- Start Server ---------- //
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

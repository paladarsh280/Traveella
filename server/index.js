require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./config/passport'); // Google strategy yahan se load hogi

const app = express();

// ---------- Database Connection ---------- //
const db = require('./config/database');
db.connect();

// ---------- Middlewares ---------- //
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // frontend origin
    credentials: true, // allow cookies and sessions
  })
);

app.use(express.json());

// ---------- Session Setup ---------- //
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'keyboard_cat_secret', // env secret use karna prod me
    resave: false,
    saveUninitialized: false, // avoid unnecessary sessions
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // true if HTTPS in production
      sameSite: 'lax', // important for Google OAuth
    },
  })
);

// ---------- Passport Setup ---------- //
app.use(passport.initialize());
app.use(passport.session());

// ---------- Routes ---------- //
const userRoutes = require('./routes/User');
app.use('/api/users', userRoutes);

// ---------- Test Route ---------- //
app.get('/', (req, res) => res.send('Traveella backend running'));

// ---------- Start Server ---------- //
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

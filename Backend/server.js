// server.js
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Passport configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: "your_google_client_id",
      clientSecret: "your_google_client_secret",
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // Store user data in MongoDB
      try {
        const existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          // User already exists
          return done(null, existingUser);
        }

        const newUser = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          // Add more fields as needed
        });

        await newUser.save();
        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Express session middleware
app.use(
  session({
    secret: "your_session_secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ... Add routes and other middleware as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

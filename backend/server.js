require("dotenv").config(); // Allows .env

const express = require("express");
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require("cors");
const helmet = require('helmet');

// Pulls Mongoose connection into main application
const connectToDb = require("./config/connectToDb");

const app = express();

const PORT = process.env.PORT || 3000; // User port specified in env or 3000

// ---------Importing our Route documents--------------
const eventsRoutes = require('./routes/eventsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const sportsRoutes = require('./routes/sportsRoutes');
const questionsRoutes = require('./routes/questionsRoutes');

// --------------Middlewares--------------
app.use(express.json()); // Express doesn't naturally convert our data to json
app.use(cookieParser());
app.use(cors());
app.use(helmet()); // Use Helmet to set secure headers

// Adjust the CSP policy
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "frame-ancestors 'self' https://drive.google.com https://accounts.google.com");
  next();
});

connectToDb();

// ------------------------- USE OUR ROUTES -------------------------
app.use("/events", eventsRoutes);
app.use("/users", usersRoutes);
app.use("/sports", sportsRoutes);
app.use("/questions", questionsRoutes);

// -------------------------------- [Database Connection]------------------------------
app.listen(PORT, () => {
  console.log(`Express Server Listening on port ${PORT}`);
});

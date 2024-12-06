const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
  });

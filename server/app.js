require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const loginRoutes = require("./routes/loginRoutes");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this to parse JSON requests

// Use combined routes
app.use("/api", routes);
app.use("/api/auth/login", loginRoutes);
app.use("/api/auth/register", registerRoutes); // Ensure this line is present and correct

module.exports = app;

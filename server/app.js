require("dotenv").config();

const express = require("express");
const cors = require("cors");

const newsRoutes = require("./routes/newsRoutes");
const topHeadlinesRoutes = require("./routes/topHeadlinesRoutes");
const countryRoutes = require("./routes/countryRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(newsRoutes);
app.use(topHeadlinesRoutes);
app.use(countryRoutes);

module.exports = app;

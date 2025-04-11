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

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`);
});

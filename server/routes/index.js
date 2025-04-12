const express = require("express");
const newsRoutes = require("./newsRoutes");
const topHeadlinesRoutes = require("./topHeadlinesRoutes");
const countryRoutes = require("./countryRoutes");

const router = express.Router();

router.use('/all-news',newsRoutes);
router.use('/top-headlines',topHeadlinesRoutes);
router.use('/country',countryRoutes);

module.exports = router;

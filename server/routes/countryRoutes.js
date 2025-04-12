const express = require("express");
const { getCountryNews } = require("../controllers/countryController");
const router = express.Router();

router.get("/country/:iso", getCountryNews);

module.exports = router;

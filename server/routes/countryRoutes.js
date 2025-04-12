const express = require("express");
const { getCountryNews } = require("../controllers/countryController");
const router = express.Router();

router.get("/:iso", getCountryNews);

module.exports = router;

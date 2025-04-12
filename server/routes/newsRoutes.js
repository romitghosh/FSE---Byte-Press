const express = require("express");
const { getAllNews } = require("../controllers/newsController");
const router = express.Router();

router.get("/all-news", getAllNews);

module.exports = router;

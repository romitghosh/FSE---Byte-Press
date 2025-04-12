const express = require("express");
const { getAllNews } = require("../controllers/newsController");
const router = express.Router();

router.get("/", getAllNews);

module.exports = router;

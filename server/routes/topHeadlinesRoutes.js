const express = require("express");
const { getTopHeadlines } = require("../controllers/topHeadlinesController");
const router = express.Router();

router.get("/", getTopHeadlines);

module.exports = router;

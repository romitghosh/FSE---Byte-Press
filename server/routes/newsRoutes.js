const express = require("express");
const fetchNews = require("../utils/fetchNews");
const router = express.Router();

const API_KEY = process.env.API_KEY;

router.get("/all-news", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 40;
  let page = parseInt(req.query.page) || 1;
  let url = `https://newsapi.org/v2/everything?q=latest&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

module.exports = router;

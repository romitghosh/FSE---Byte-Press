const express = require("express");
const fetchNews = require("../utils/fetchNews");
const router = express.Router();

const API_KEY = process.env.API_KEY;

router.get("/country/:iso", (req, res) => {
  let pageSize = parseInt(req.query.pageSize) || 80;
  let page = parseInt(req.query.page) || 1;
  let country = req.params.iso;
  let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
});

module.exports = router;

const fetchNews = require("../utils/fetchNews");

const getTopHeadlines = (req, res) => {
  const API_KEY = process.env.API_KEY;
  let pageSize = parseInt(req.query.pageSize) || 80;
  let page = parseInt(req.query.page) || 1;
  let category = req.query.category || "business";
  let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
};

module.exports = { getTopHeadlines };

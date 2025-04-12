const fetchNews = require("../utils/fetchNews");

const getAllNews = (req, res) => {
  const API_KEY = process.env.API_KEY;
  let pageSize = parseInt(req.query.pageSize) || 40;
  let page = parseInt(req.query.page) || 1;
  let url = `https://newsapi.org/v2/everything?q=latest&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  fetchNews(url, res);
};

module.exports = { getAllNews };

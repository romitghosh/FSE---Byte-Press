const axios = require("axios");

function fetchNews(url, res) {
  axios
    .get(url)
    .then((response) => {
      if (response.data.totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "News fetched successfully",
          data: response.data,
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more news available",
          data: response.data,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: 500,
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    });
}

module.exports = fetchNews;

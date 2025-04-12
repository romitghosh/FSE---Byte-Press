import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  publishedAt: {
    type: Date,
  },
  country: {
    type: String,
  },
});

const news = mongoose.model("news", newsSchema);

export default news;

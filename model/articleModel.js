import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true, // The name of the author, e.g., "Sidney Sweeney"
  },
  authorImage: {
    type: String,
    required: true, // URL or path to the author's profile image
  },
  postImage: {
    type: String,
    required: true, // URL or path to the main post image
  },
  date: {
    type: Date,
    default: Date.now, // Date of the post
  },
  category: {
    type: String,
    required: true, // Category of the post, e.g., "Technology", "Lifestyle"
  },
  views: {
    type: Number,
    default: 0, // Number of views
  },
  content: {
    type: String,
    required: true, // The main text content of the post, e.g., "morning ☀️☀️"
  },
  location: {
    type: String,
    required: false, // Location, e.g., "Paris, France"
  },
  likes: {
    type: Number,
    default: 0, // Number of likes
  },
  comments: {
    type: Number,
    default: 0, // Number of comments
  },
  shares: {
    type: Number,
    default: 0, // Number of shares
  },
});

export default mongoose.model("Article", articleSchema);

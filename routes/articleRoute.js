import express from "express";
import {
  fetchArticles,
  addComment,
  incrementLikes,
} from "../controller/articleController.js";

const router = express.Router();

router.get("/fetch", fetchArticles);
// router.post("/:id/comments", addComment);
// router.post("/:id/likes", incrementLikes);

export default router;

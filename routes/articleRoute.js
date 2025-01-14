import express from "express";
import {
  fetchArticles,
  addComment,
  updateArticleStats,
} from "../controller/articleController.js";

const router = express.Router();

router.get("/fetch", fetchArticles);
router.post("/:id/comments", addComment);
router.post("/:id/likes", updateArticleStats);

export default router;

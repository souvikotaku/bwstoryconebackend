import express from "express";
import { fetchArticles, addComment } from "../controller/articleController.js";

const router = express.Router();

router.get("/fetch", fetchArticles);
router.post("/:articleId/comments", addComment);

export default router;

import express from "express";
import { fetchArticles } from "../controller/articleController.js";

const router = express.Router();

router.get("/fetch", fetchArticles); // Route to fetch articles

export default router;

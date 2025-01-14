import Article from "../model/articleModel.js";

export const fetchArticles = async (req, res) => {
  try {
    const { category } = req.query; // Get category from query params
    const filter = category && category !== "All" ? { category } : {}; // Filter by category if not "All"
    const articles = await Article.find(filter);
    res.status(200).json(articles); // Send the filtered articles
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

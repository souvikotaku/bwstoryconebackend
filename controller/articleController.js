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

export const addComment = async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;

  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    article.comments.push({ text: comment });
    await article.save();
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Increment likes for an article
export const incrementLikes = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

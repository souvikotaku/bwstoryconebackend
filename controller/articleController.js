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
  try {
    const { articleId } = req.params; // Get article ID from route parameters
    const { text, user } = req.body; // Get comment text and user from the request body

    // Find the article by ID and add the comment to the comments array
    const article = await Article.findById(articleId);

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Create a new comment object
    const newComment = {
      text,
      user,
      date: new Date(),
    };

    // Add the new comment to the article's comments array
    article.comments.push(newComment);

    // Save the updated article
    await article.save();

    // Return the updated article with the new comment
    res.status(200).json(article);
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

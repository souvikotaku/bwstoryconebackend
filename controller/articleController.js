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

// export const addComment = async (req, res) => {
//   const { id } = req.params; // Article ID from URL
//   const { text, user } = req.body; // Comment details from request body

//   try {
//     const article = await Article.findById(id);
//     if (!article) {
//       return res.status(404).json({ error: "Article not found" });
//     }

//     // Add the new comment to the article's comments array
//     article.comments.push({ text, user });
//     await article.save();

//     res.status(200).json({ message: "Comment added successfully", article });
//   } catch (error) {
//     console.error("Error adding comment:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export const incrementLikes = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const article = await Article.findByIdAndUpdate(
//       id,
//       { $inc: { likes: 1 } },
//       { new: true }
//     );
//     if (!article) {
//       return res.status(404).json({ error: "Article not found" });
//     }
//     res.status(200).json(article);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

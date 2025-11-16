const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// 🧠 Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Get single article by ID
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ error: "Article not found" });
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

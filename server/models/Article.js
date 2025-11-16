const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, default: new Date().toDateString() },
    desc: { type: String },
    img: { type: String },
    content: { type: String }, // 👈 ye full blog content ke liye
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);

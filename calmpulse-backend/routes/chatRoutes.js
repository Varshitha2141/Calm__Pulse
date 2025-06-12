import express from "express";
import QA from "../models/QA.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    // Case-insensitive regex search for question containing the message
    const entry = await QA.findOne({ question: { $regex: message, $options: "i" } });

    if (entry) {
      res.json({ reply: entry.answer });  // Return the matched answer
    } else {
      res.json({ reply: "Sorry, I don't have an answer for that yet." });
    }
  } catch (error) {
    console.error("Error searching QA:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

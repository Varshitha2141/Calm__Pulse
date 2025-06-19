// calmpulse-backend/routes/chatRoutes.js
import express from "express";
import QA from "../models/QA.js";

const router = express.Router();

// POST /api/qa — gets a reply from the Q&A dataset
router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    console.log("🔍 Incoming message:", message);

    const entry = await QA.findOne({
      question: { $regex: message, $options: "i" }, // case-insensitive partial match
    });

    console.log("📚 Matched entry:", entry);

    if (entry) {
      res.json({ reply: entry.answer });
    } else {
      res.json({ reply: "😔 Sorry, I don't have an answer for that yet." });
    }
  } catch (error) {
    console.error("❌ Error fetching QA reply:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;

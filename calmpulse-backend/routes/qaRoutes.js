import express from "express";
import QA from "../models/QA.js";

const router = express.Router();

// Get all Q&A
router.get("/", async (req, res) => {
  try {
    const allQA = await QA.find();
    res.json(allQA);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Q&A" });
  }
});

// Add new Q&A
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const newQA = new QA({ question, answer });
    await newQA.save();
    res.status(201).json(newQA);
  } catch (err) {
    res.status(500).json({ error: "Failed to add Q&A" });
  }
});

// Update Q&A by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const updatedQA = await QA.findByIdAndUpdate(id, { question, answer }, { new: true });
    res.json(updatedQA);
  } catch (err) {
    res.status(500).json({ error: "Failed to update Q&A" });
  }
});

// Delete Q&A by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await QA.findByIdAndDelete(id);
    res.json({ message: "Q&A deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete Q&A" });
  }
});

export default router;

// routes/journalRoutes.js
import express from "express";
import Journal from "../models/Journal.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const journal = new Journal(req.body);
    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const journals = await Journal.find().sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updated = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

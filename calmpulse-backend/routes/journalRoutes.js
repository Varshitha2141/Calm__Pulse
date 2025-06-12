// routes/journalRoutes.js
import express from 'express';
import Journal from '../models/Journal.js';

const router = express.Router();

// POST - Create a journal entry
router.post('/', async (req, res) => {
  try {
    const journal = new Journal(req.body);
    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Fetch all journal entries
router.get('/', async (req, res) => {
  try {
    const journals = await Journal.find().sort({ date: -1 });
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update a journal entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Journal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - Delete a journal entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

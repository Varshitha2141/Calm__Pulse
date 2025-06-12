// controllers/journalController.js
const Journal = require('../models/Journal');

exports.createJournal = async (req, res) => {
  try {
    const journal = new Journal(req.body);
    await journal.save();
    res.status(201).json(journal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const journals = await Journal.find().sort({ date: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(journal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteJournal = async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Journal deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

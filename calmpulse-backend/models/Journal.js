// models/Journal.js
import mongoose from 'mongoose';

const journalSchema = new mongoose.Schema({
  title: String,
  content: String,
  mood: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Journal = mongoose.model('Journal', journalSchema);

export default Journal;

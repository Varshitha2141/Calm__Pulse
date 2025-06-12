// components/JournalForm.js
import React, { useState, useEffect } from 'react';

const JournalForm = ({ onSubmit, currentEntry, setCurrentEntry }) => {
  const [form, setForm] = useState({ title: '', content: '', mood: '' });

  useEffect(() => {
    if (currentEntry) {
      setForm(currentEntry);
    }
  }, [currentEntry]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', content: '', mood: '' });
    setCurrentEntry(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
      <h4>{currentEntry ? "Edit Journal" : "New Journal Entry"}</h4>
      <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea className="form-control mb-2" name="content" value={form.content} onChange={handleChange} placeholder="How are you feeling?" required />
      <input className="form-control mb-2" name="mood" value={form.mood} onChange={handleChange} placeholder="Mood (optional)" />
      <button type="submit" className="btn btn-primary">
        {currentEntry ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default JournalForm;

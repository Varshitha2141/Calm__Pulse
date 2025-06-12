// components/JournalList.js
import React from 'react';

const JournalList = ({ entries, onDelete, onEdit }) => {
  return (
    <div>
      <h4>Journal Entries</h4>
      {entries.length === 0 && <p>No entries yet.</p>}
      {entries.map((entry) => (
        <div key={entry._id} className="border p-3 mb-2 rounded">
          <h5>{entry.title}</h5>
          <p>{entry.content}</p>
          <small>Mood: {entry.mood || 'N/A'} | {new Date(entry.date).toLocaleDateString()}</small>
          <div className="mt-2">
            <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(entry)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(entry._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JournalList;

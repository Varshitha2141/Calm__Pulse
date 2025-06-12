import React, { useState, useEffect } from "react";
import axios from "axios";

const Journal = () => {
  const [entry, setEntry] = useState({ title: "", content: "", mood: "" });
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchEntries = async () => {
    const res = await axios.get("http://localhost:5000/api/journals");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSave = async () => {
    if (!entry.title || !entry.content) return;

    if (editingId) {
      await axios.put(`http://localhost:5000/api/journals/${editingId}`, entry);
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/api/journals", entry);
    }

    setEntry({ title: "", content: "", mood: "" });
    fetchEntries();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/journals/${id}`);
    fetchEntries();
  };

  const handleEdit = (journal) => {
    setEntry({
      title: journal.title,
      content: journal.content,
      mood: journal.mood,
    });
    setEditingId(journal._id);
  };

  return (
    <div style={{ background: "#FFF0F5", minHeight: "100vh", padding: "3rem" }}>
      <div className="container shadow-lg p-5 rounded" style={{ backgroundColor: "white", borderLeft: "10px solid #FF69B4" }}>
        <h1 className="text-center mb-4" style={{ color: "#FF1493" }}>📝 My Journal</h1>

        <input
          className="form-control mb-2"
          placeholder="Title"
          value={entry.title}
          onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        />

        <textarea
          className="form-control mb-2"
          rows="3"
          placeholder="What's on your mind?"
          value={entry.content}
          onChange={(e) => setEntry({ ...entry, content: e.target.value })}
        ></textarea>

        <input
          className="form-control mb-3"
          placeholder="Mood (optional)"
          value={entry.mood}
          onChange={(e) => setEntry({ ...entry, mood: e.target.value })}
        />

        <button className="btn btn-pink mb-4" onClick={handleSave} style={{ backgroundColor: "#FF69B4", color: "white" }}>
          {editingId ? "Update Entry" : "Save Entry"}
        </button>

        {entries.length > 0 && (
          <>
            <h4 className="mt-4 mb-3" style={{ color: "#C71585" }}>📚 Your Past Entries</h4>
            <ul className="list-group">
              {entries.map((item) => (
                <li className="list-group-item" key={item._id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>{new Date(item.date).toLocaleString()}</strong>
                      <h5>{item.title}</h5>
                      <p className="mb-1">{item.content}</p>
                      {item.mood && <p><em>Mood: {item.mood}</em></p>}
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Journal;

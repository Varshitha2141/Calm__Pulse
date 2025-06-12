import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/chat`,
        { message: input }
      );

      const botMessage = {
        sender: "bot",
        text: res.data.reply || "I'm here for you.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMsg = {
        sender: "bot",
        text: "Sorry, I couldn't fetch a reply.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8e8ff, #d1f2ff)",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div
          className="p-4 rounded shadow-lg"
          style={{
            background: "#fff8f0",
            border: "1px solid #f0c7c7",
          }}
        >
          <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>
            🌸 CalmPulse Chat
          </h2>

          <div
            className="p-3 mb-3 rounded"
            style={{
              height: "360px",
              overflowY: "auto",
              background: "#fefefe",
              border: "1px solid #e0e0e0",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`d-flex mb-2 ${
                  msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className={`p-2 px-3 rounded shadow-sm ${
                    msg.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-warning-subtle text-dark border"
                  }`}
                  style={{
                    maxWidth: "75%",
                    background: msg.sender === "user"
                      ? "#5b7cfa"
                      : "#ffe8cc",
                    color: msg.sender === "user"
                      ? "#fff"
                      : "#6c3700",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="input-group">
            <input
              type="text"
              className="form-control shadow-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              style={{ background: "#f3f1ff", border: "1px solid #ccc" }}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

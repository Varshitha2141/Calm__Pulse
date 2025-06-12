import React from "react";

const About = () => {
  return (
    <div style={{ background: "#E6E6FA", minHeight: "100vh", padding: "3rem" }}>
      <div className="container shadow p-5 rounded" style={{ background: "white", borderLeft: "10px solid #6f42c1" }}>
        <h1 className="text-center mb-4" style={{ color: "#6f42c1" }}>About CalmPulse</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          <strong>CalmPulse</strong> is your digital sanctuary — a space created to provide support, relief, and reflection for individuals navigating mental health challenges. Our mission is to blend empathy with technology to make emotional wellness accessible for everyone.
        </p>
        <hr />
        <h3 style={{ color: "#6f42c1" }}>🌈 Why CalmPulse?</h3>
        <ul style={{ fontSize: "1.1rem" }}>
          <li>💬 AI-powered conversations trained on trusted mental health Q&A</li>
          <li>📝 Personal journal space for expressing thoughts safely</li>
          <li>📚 Handpicked resources to guide and uplift you</li>
        </ul>
        <p className="mt-4">
          Whether you're feeling overwhelmed, anxious, or just need someone to listen — CalmPulse is here for you. You’re not alone. 💙
        </p>
      </div>
    </div>
  );
};

export default About;

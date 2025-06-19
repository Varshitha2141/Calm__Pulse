import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import chatRoutes from "./routes/chatRoutes.js";
import qaRoutes from "./routes/qaRoutes.js";
import journalRoutes from "./routes/journalRoutes.js"; // ✅ Journal routes

const app = express(); // Initialize express app

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("🌱 CalmPulse backend is running");
});

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/qa", qaRoutes);
app.use("/api/journals", journalRoutes); // ✅ Journal routes

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

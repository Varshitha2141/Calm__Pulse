import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import chatRoutes from "./routes/chatRoutes.js";
import qaRoutes from "./routes/qaRoutes.js";
import journalRoutes from "./routes/journalRoutes.js"; // ✅ Add this

const app = express();  // Initialize app first

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CalmPulse backend is running");
});

// Register routes after app initialization
app.use("/api/chat", chatRoutes);
app.use("/api/qa", qaRoutes);
app.use("/api/journals", journalRoutes); // ✅ Register journal routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

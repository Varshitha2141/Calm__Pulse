import mongoose from "mongoose";
import dotenv from "dotenv";
import QA from "./models/QA.js";      // Make sure the path is correct
import fs from "fs";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    const data = JSON.parse(fs.readFileSync("./data/mental_health_dataset.json", "utf-8"));

    await QA.deleteMany(); // Clear existing data
    await QA.insertMany(data);

    console.log("Dataset seeded successfully ✅");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
};

seedData();

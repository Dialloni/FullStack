import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import appointmentApi from "./Api/api.js";

const app = express();
const port = 8000;

// Replace <db_password> with your actual MongoDB Atlas password
const mongoUri = "mongodb+srv://dialoabo:Tohysfp6QXWUmxJ5@cluster0.j1dzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas", error);
});

app.use(cors());
app.use(express.json());
app.use("/api", appointmentApi);  // Using /api prefix for all routes

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
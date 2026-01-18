import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Root route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("API is live. Use /api/forms to interact.");
});

// Connect to MongoDB using correct env variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB error:", err));

// Form routes
app.use("/api/forms", formRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
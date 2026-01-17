import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import formRoutes from "./routes/formRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB error:", err));

app.use("/api/forms", formRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
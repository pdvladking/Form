const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const submitRoute = require("./routes/submit");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/submit", submitRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

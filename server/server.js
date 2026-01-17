import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(process.env.PORT || 3000, () =>
console.log(`Server running on port ${process.env.PORT || 3000}`)
);
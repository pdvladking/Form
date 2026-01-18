import express from "express";
import { submitForm, getForms } from "../controllers/formController.js";

const router = express.Router();

router.post("/submit", submitForm);
router.get("/submisions", getForms);

export default router;
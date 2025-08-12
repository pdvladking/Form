const express = require("express");
const router = express.Router();
const UdyamSubmission = require("../models/UdyamSubmission");
const { validateForm } = require("../utils/validators");

router.post("/", async (req, res) => {
  const formData = req.body;
  console.log("Form data received:", formData);

  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  try {
    const newSubmission = new UdyamSubmission(formData);
    await newSubmission.save();
    res
      .status(201)
      .json({ success: true, message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error. Please try again later.",
      });
  }
});

module.exports = router;

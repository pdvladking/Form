import Form from "../models/Form.js";

export const submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const form = new Form({ name, email, message });
    await form.save();
    res.status(201).json({ success: true, data: form });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
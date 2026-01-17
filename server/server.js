const FormSubmission = require('./models/FormSubmission');

app.post('/submit-form', async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ messge: 'Form saved!', data: newSubmission });
  } catch (err) {
    console.error('Error saving form:', err);
    res.status(500).json({ error: 'Failed to save form' });
  }
});
const express = require('express');
const router = express.Router();
const { submitForm } = require('../controllers/formController');

// POST /api/form/submit
router.post('/submit', submitForm);

module.exports = router;
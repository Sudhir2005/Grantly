const express = require('express');
const multer = require('multer'); // File upload middleware
const Document = require('../models/Document'); // Import your Document model

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Add timestamp to filename
  },
});

const upload = multer({ storage: storage });

// Upload document route
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Create a new Document entry in your database
    const newDocument = new Document({
      title: req.file.originalname,
      filePath: req.file.path, // Save the file path to the database
      // Add other necessary fields like user ID, etc.
    });

    await newDocument.save();
    return res.status(201).json({ message: 'File uploaded successfully!', document: newDocument });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;

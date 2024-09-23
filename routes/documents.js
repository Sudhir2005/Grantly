const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a Document schema
const documentSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Document = mongoose.model('Document', documentSchema);

// Create a new document
router.post('/', async (req, res) => {
    const document = new Document(req.body);
    try {
        await document.save();
        res.status(201).send(document);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all documents
router.get('/', async (req, res) => {
    try {
        const documents = await Document.find();
        res.send(documents);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Export the router
module.exports = router;

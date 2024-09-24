const mongoose = require('mongoose');

// Document Schema
const documentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fileUrl: { type: String, required: true },  // Store the file URL or path
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference the user who uploaded it
    uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);

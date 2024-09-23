const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const documentRoutes = require('./routes/documents');


const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const uri = "mongodb://localhost:27017/my_database_name"; // Replace with your database name
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Import document routes
const documentRoutes = require('./routes/documents');

// Use document routes
app.use('/documents', documentRoutes);

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

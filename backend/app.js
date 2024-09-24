const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/grantly_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads')); // To serve uploaded files

// Routes
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/document');

app.use('/api/auth', authRoutes);
app.use('/api/document', documentRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Grantly API');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

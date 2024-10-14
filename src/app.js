// src/app.js
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errorHandler } = require('./middlewares/errorHandler'); // Example for error handling

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Routes
app.get("/",(req,res)=>{
    res.send("Server is working!")
})

// Error handling middleware
app.use(errorHandler);

// Exporting the app for use in server.js
module.exports = { app, connectDB };

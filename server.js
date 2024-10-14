// src/server.js

const { app, connectDB } = require('./src/app');

const PORT = process.env.PORT || 5000;

// Function to start the server
const startServer = async () => {
    try {
        // Attempt to connect to the database
        await connectDB();

        // Start the server only if the database connection is successful
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to MongoDB. Server not started:', error);
        process.exit(1); // Exit the process with a failure code
    }
};

// Start the server
startServer();

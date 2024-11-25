// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: Using Mongoose, this module creates a connection to a MongoDB database, guaranteeing a reliable and effective connection for database operations

const mongoose = require('mongoose'); // Import Mongoose for mongoDB connection

const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection string from environment variables
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Use the new server discovery and monitoring engine and parser 
        });

        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit the process with failure
    }
};
// Export the connectDB function for use in other parts of the application
module.exports = connectDB;
// End of program
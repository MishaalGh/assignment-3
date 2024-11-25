// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: Using Mongoose, this module creates a connection to a MongoDB database, guaranteeing a reliable and effective connection for database operations.

const mongoose = require('mongoose'); // Import Mongoose for database operations

// Define the schema for the user collection
var schema = new mongoose.Schema({
    name: {
        type: String, // The user's name must be a string
        required: true // This field is mandatory
    },
    email: {
        type: String, // The user's email must be a string
        required: true, // This field is mandatory
        unique: true // Email must be unique for each user
    },
    gender: String, // The user's gender (optional)
    status: String  // The user's status (e.g., Active, Inactive; optional)
});

// Create the Mongoose model for the user collection
const Userdb = mongoose.model('userdb', schema); 
// 'userdb' is the collection name in the MongoDB database

module.exports = Userdb; // Export the model to be used in other parts of the application
//End of program
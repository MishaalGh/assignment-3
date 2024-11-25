// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: In order to manage user-related CRUD processes, this file separates the rendering of views from the API endpoints.

const express = require('express');
const route = express.Router(); // Create a router instance

const services = require('../services/render'); // Import rendering service for views
const controller = require('../controller/controller'); // Import controller for API logic

// Route for the home page, rendering the user list
route.get("/", services.homeRoutes);

// Route for rendering the "add user" page
route.get("/add-user", services.add_user);

// Route for rendering the "update user" page
route.get("/update-user", services.update_user);

// API Routes

// Route to create a new user (POST request)
route.post('/api/users', controller.create);

// Route to fetch all users or a single user by ID (GET request)
route.get('/api/users', controller.find);

// Route to update an existing user by ID (PUT request)
route.put('/api/users/:id', controller.update);

// Route to delete a user by ID (DELETE request)
route.delete('/api/users/:id', controller.delete);

module.exports = route; // Export the router to use in other parts of the app

// End of program
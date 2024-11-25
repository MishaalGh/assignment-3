// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: This file manages display rendering and API queries to add, update, and retrieve user data, allowing for dynamic application interaction.

const axios = require('axios'); // Import axios for making HTTP requests

// Render the home page with a list of users
exports.homeRoutes = (req, res) => {
    // Make a GET request to fetch all users from the API
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            // Render the index page and pass the fetched user data
            res.render('index', { users: response.data });
        })
        .catch(err => {
            // Send an error response if the request fails
            res.send(err);
        });
};

// Render the page for adding a new user
exports.add_user = (req, res) => {
    // Render the add_user view
    res.render('add_user');
};

// Render the page for updating an existing user
exports.update_user = (req, res) => {
    // Make a GET request to fetch details of a specific user by ID
    axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        .then(function(userdata) {
            // Render the update_user page and pass the specific user data
            res.render("update_user", { user: userdata.data });
        })
        .catch(err => {
            // Send an error response if the request fails
            res.send(err);
        });
};
// End of program
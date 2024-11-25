// Names: Mishaal.G
// Date: 2024-11-24
// Class: Web and Script Programming
// Purpose: Express is used in the construction of this server to manage static assets including CSS, pictures, and JavaScript, process HTTP requests, and generate dynamic views using EJS. 
// It employs middleware for routing, request processing, and logging, and it interfaces with MongoDB for database operations. 

// Mandatory imports for the web app for logging HTTPS requests 
// enviorment variables, file paths and parse incomming requests 
const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan')
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080


// Log requests 
app.use(morgan('tiny'))

// Connect this to my database
connectDB();
 
//Parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")

//load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//Load routes
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});

// End of program
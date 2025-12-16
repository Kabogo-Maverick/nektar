// Import the Express module
// Express is a popular Node.js framework for building web servers and APIs
const express = require('express');

// Create an instance of Express
// This 'app' variable will be used to define routes, middleware, and server behavior
const app = express();

// Define the port number where the server will listen
// You can change 3000 to any port that is free on your machine
const port = 3000;

// Middleware: parse incoming JSON data
// express.json() allows our server to accept and automatically parse JSON data in requests
app.use(express.json());

// Define a route for the root URL ('/')
// This handles GET requests to the homepage
// req = request object (contains info about the client request)
// res = response object (used to send data back to the client)
app.get('/', (req, res) => {
    // Send a simple message to the browser or client
    res.send('Backend is running!');
});

// Start the server and listen on the specified port
// The callback runs once the server is successfully running
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const sequelize = require('./config/database');
const User = require('./models/User');

sequelize.sync({ force: true }) // force: true drops tables first (good for dev)
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log(err));

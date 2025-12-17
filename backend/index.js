// Import the Express module
// Express is a popular Node.js framework for building web servers and APIs
const express = require('express');

// Create an instance of Express
// This 'app' variable will be used to define routes, middleware, and server behavior
const app = express();
const port = 3000;

// express.json() allows our server to accept and automatically parse JSON data in requests
app.use(express.json());


// This handles GET requests to the homepage
app.get('/', (req, res) => {
    // Send a simple message to the browser or client
    res.send('Backend is running!');
});


// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);


// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const sequelize = require('./config/database');
const User = require('./models/User');

sequelize.sync({ force: true }) // force: true drops tables first (good for dev)
    .then(() => console.log('Database & tables created!'))
    .catch(err => console.log(err));

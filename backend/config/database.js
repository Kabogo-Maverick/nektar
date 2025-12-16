// Import Sequelize
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance connecting to SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',           // Use SQLite
    storage: './database.sqlite' // SQLite file path
});

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection to SQLite has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Export sequelize instance for models to use
module.exports = sequelize;

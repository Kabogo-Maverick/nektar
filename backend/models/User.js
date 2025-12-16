const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // import our sequelize instance

// Define a User model
const User = sequelize.define('User', {
    // id is automatically created by Sequelize
    name: {
        type: DataTypes.STRING,
        allowNull: false, // Name is required
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, // Email is required
        unique: true      // No duplicate emails
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = User;

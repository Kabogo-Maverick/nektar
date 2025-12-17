const User = require('../models/User');

/**
 * Create a new user
 * POST /api/users
 */
exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create user in DB
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Get all users
 * GET /api/users
 */
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

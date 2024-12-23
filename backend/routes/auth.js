const express = require('express');
const User = require('../models/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
require('dotenv').config();

// Add JWT secret to your environment variables
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const userId = require('crypto').randomBytes(8).toString('hex');
        const user = new User({
            name,
            email,
            password: hashedPassword,
            userId,
            phone
        });
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.userId, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        //Automatically log in the user after signup
        req.session.userId = user.userId;

        // Send response with token and user data
        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                userId: user.userId,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.userId, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Send response
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                userId: user.userId,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Add token verification endpoint
router.get('/verify', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ userId: decoded.userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({
            userId: user.userId,
            name: user.name,
            email: user.email
        });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});
module.exports = router;
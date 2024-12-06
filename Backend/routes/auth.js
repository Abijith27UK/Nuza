const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyGoogleToken = require("../config/googleAuth");
const User = require("../models/User");

const router = express.Router();

// Helper function: Generate JWT
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Email Sign-Up
router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, phone, password } = req.body;

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword,
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Email Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        // Generate JWT token
        const token = generateToken(user);
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Google Login
router.post("/google-login", async (req, res) => {
    const { token } = req.body;

    try {
        const payload = await verifyGoogleToken(token);
        const { sub, email, given_name, family_name } = payload;

        let user = await User.findOne({ googleId: sub });
        if (!user) {
            user = new User({
                firstName: given_name,
                lastName: family_name,
                email,
                googleId: sub,
            });
            await user.save();
        }

        const jwtToken = generateToken(user);
        res.status(200).json({ token: jwtToken, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Phone Number Login (Mock Example)
router.post("/phone-login", async (req, res) => {
    const { phone } = req.body;

    try {
        let user = await User.findOne({ phone });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Mock sending OTP (In production, integrate with an SMS service)
        res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

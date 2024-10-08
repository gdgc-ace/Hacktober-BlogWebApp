const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Create a new user
const createUser = async (req, res) => {
  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user with hashed password
    const data = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // Respond with success and user name
    res.status(201).json({ success: true, message: `User Created: ${data.name}` });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

// Get a user by ID
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find the user by ID
    const data = await User.findById(userId);

    if (!data) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Respond with user data
    res.status(200).json({ success: true, user: data });
  } catch (error) {
    console.error(error);  // Log the error for debugging
    res.status(500).json({ success: false, message: 'Server error', error });
  }
};

module.exports = { createUser, getUser };

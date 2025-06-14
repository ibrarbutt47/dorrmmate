// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { findUserByEmail, createUser } = require('../models/userModel');

// const signup = (req, res) => {
//   const { name, email, password, phone} = req.body;

//   findUserByEmail(email, (err, results) => {
//     if (err) return res.status(500).json({ error: 'Server error' });
//     if (results.length > 0) {
//       return res.status(400).json({ message: 'User already registered' });
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     createUser(name, email, hashedPassword, phone,(err, result) => {
//       if (err) return res.status(500).json({ error: 'User creation failed' });

//       res.status(201).json({ message: 'User registered successfully' });
//     });
//   });
// };

// const login = (req, res) => {
//   const { email, password } = req.body;

//   findUserByEmail(email, (err, results) => {
//     if (err) return res.status(500).json({ error: 'Server error' });
//     if (results.length === 0) return res.status(404).json({ message: 'User not found' });

//     const user = results[0];
//     const isMatch = bcrypt.compareSync(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: '1d'
//     });

//     res.status(200).json({
//       message: 'Login successful',
//       token,
//       user: { id: user.id, name: user.name, email: user.email }
//     });
//   });
// };

// module.exports = { signup, login };





import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser } from '../models/userModel.js';

export const signup = (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    if (results.length > 0) {
      return res.status(400).json({ message: 'User already registered' });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    createUser(name, email, hashedPassword, phone, (err, result) => {
      if (err) return res.status(500).json({ error: 'User creation failed' });

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ error: 'Server error' });
    if (results.length === 0) return res.status(404).json({ message: 'User not found' });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  });
};

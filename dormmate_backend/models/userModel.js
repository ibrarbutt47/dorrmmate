// const db = require('../config/db');

// const findUserByEmail = (email, callback) => {
//   const query = 'SELECT * FROM users WHERE email = ?';
//   db.query(query, [email], callback);
// };

// const createUser = (name, email, hashedPassword, phone , callback) => {
//   const query = 'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)';
//   db.query(query, [name, email, phone, hashedPassword], callback);
// };

// module.exports = {
//   findUserByEmail,
//   createUser
// };









import db from '../config/db.js';

export const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], callback);
};

export const createUser = (name, email, hashedPassword, phone, callback) => {
  const query = 'INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, hashedPassword, phone], callback); // ✅ fixed parameter order
};

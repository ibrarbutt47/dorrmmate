import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Server is running and connected to the database!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});

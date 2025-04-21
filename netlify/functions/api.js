const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    // Your user fetching logic here
    res.json({ users: [] });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    // Your user creation logic here
    res.json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Export the serverless function
module.exports.handler = serverless(app);


import express from 'express';
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import { corsMiddleware } from './src/middleware/cors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const jsonServerRouter = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Apply CORS middleware before any other middleware
server.use(corsMiddleware);

// Apply json-server middlewares
server.use(middlewares);
server.use(express.json());

// Add custom routes before json-server router
server.post('/users', (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  next();
});

// Error handling
server.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Mount json-server router
server.use(jsonServerRouter);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


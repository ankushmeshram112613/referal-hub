import jsonServer from 'json-server';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const NETLIFY_URL = 'https://ankushbuisnessprojectforhackathon.netlify.app';
const LOCAL_URL = 'http://localhost:5173';

// CORS configuration
server.use(cors({
  origin: [NETLIFY_URL, LOCAL_URL],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range']
}));

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add headers to all responses
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Handle OPTIONS preflight requests
server.options('*', (req, res) => {
  res.sendStatus(200);
});

server.post('/users', (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  next();
});

// Error handling middleware
server.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: err.message 
  });
});

server.use(router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log(`Allowed origins: ${NETLIFY_URL}, ${LOCAL_URL}`);
});



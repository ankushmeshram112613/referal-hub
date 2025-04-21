import jsonServer from 'json-server';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults({ noCors: true }); // Disable default CORS

// Use CORS middleware with specific configuration
server.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom response for /users endpoint
server.get('/users', (req, res) => {
  const { email } = req.query;
  const users = router.db.get('users').value();
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.json([]);
  }
  
  res.json([user]);
});

// Custom route for user registration
server.post('/users', (req, res, next) => {
  const { email } = req.body;
  const users = router.db.get('users').value();
  const existingUser = users.find(u => u.email === email);
  
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: 'User already exists'
    });
  }
  
  next();
});

// Use router after custom routes
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});


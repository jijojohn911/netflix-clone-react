import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userAuth from './routes/userAuthRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;
let dbError = null;

// If ALLOWED_ORIGINS is set, only those sites can call the API.
// If it is not set, allow any site (useful for local testing).
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check: open this in the browser to see if the API and DB are working.
app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/api/health', (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  res.json({
    server: 'ok',
    database: states[mongoose.connection.readyState],
    mongoUriSet: Boolean(MONGO_URI),
    databaseError: dbError,
  });
});

// Return a clear error instead of a generic 500 when the DB is not connected.
app.use('/api', (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      message: 'Database is not connected. Check the MONGO_URI environment variable.',
    });
  }
  next();
});

app.use('/api', userAuth);

// Start the server first, so the site is reachable even if the DB connection fails.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB separately and log the real error if it fails.
if (!MONGO_URI) {
  console.error('MONGO_URI is not set. Add it in Render -> Environment.');
} else {
  mongoose
    .connect(MONGO_URI, { serverSelectionTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((error) => {
      dbError = error.message;
      console.error('Database connection failed:', error.message);
    });
}

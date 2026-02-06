const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3005;

// Debug info
if (process.env.NODE_ENV === 'development') {
  console.log('[DEBUG] Backend starting...');
  console.log('[DEBUG] PORT:', PORT);
  console.log('[DEBUG] NODE_ENV:', process.env.NODE_ENV);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[DEBUG] Root endpoint accessed');
  }

  res.json({
    message: 'docs-site Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      customerService: '/api/customer-service'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Customer service endpoint
app.post('/api/customer-service', (req, res) => {
  const { message } = req.body;

  if (process.env.NODE_ENV === 'development') {
    console.log('[DEBUG] Customer service request:', { message });
  }

  // TODO: Implement actual customer service logic
  res.json({
    success: true,
    message: 'Message received',
    data: {
      receivedMessage: message,
      timestamp: new Date().toISOString()
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});

// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const environment = process.env.ENV || "unknown";

// Root endpoint to confirm environment
app.get('/', (req, res) => {
  res.send(`Hello from the ${environment} environment!`);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port} in the ${environment} environment`);
});

// api/server.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/api/ping', (req, res) => {
  res.status(200).json({ status: 'success' });
});

// Optional: fallback route to avoid 500s
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = serverless(app);

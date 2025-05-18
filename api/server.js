const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/api/ping', (req, res) => {
  res.status(200).json({ status: 'success' });
});

module.exports = serverless(app);

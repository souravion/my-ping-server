// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow all origins (adjust for security in prod)

app.get('/api/ping', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.status(200).json({ status: 'success' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

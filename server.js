const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/ping', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

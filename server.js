const express = require('express');
const app = express();

const PORT = process.env.APP_PORT || 3200;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Docker! 🐳', status: 'live' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

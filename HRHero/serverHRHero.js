const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 3200;

app.get('/', (req, res) => {
  res.send('<h1>My Docker lab is live HAhaha 🚀</h1>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Watching for changes on port ${PORT}...`);
});
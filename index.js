const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PaaS!');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}...`);
});

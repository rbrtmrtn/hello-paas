const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PaaS!');
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

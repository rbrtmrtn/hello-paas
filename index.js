const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, PaaS!');
});

// heroku dynamically assigns port and injects env var, so try listening on that
// https://stackoverflow.com/a/15693371/676001
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening at http://localhost:${PORT}...`);
});

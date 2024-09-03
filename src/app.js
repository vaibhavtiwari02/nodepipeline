const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Vaibhav Tiwari in-place pipeline');
});

module.exports = app;

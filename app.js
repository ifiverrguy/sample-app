const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

module.exports = app;

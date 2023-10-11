const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/message', (req, res) => {
  res.send({message: 'This is a message from the server.'});
});

app.get('/send_number', (req, res) => {
  res.send({number: 42});
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

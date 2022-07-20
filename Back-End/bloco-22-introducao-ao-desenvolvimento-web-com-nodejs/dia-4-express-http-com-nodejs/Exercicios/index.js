const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Exercício 01
app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

// Exercício 02
app.post('/hello', (req, res) => {
  const { name="Bruno" } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
});

// Exercício 03
app.post('/greetings', (req, res) => {
  const { name='Bruno', age=29 } = req.body;
  if (age > 17) {
    return res.status(200).json({ message: `Hello ${name}!` });
  } return res.status(401).json({ message: 'Unauthorized' });
});


app.listen(3002, () => {
  console.log('Ouvindo na porta 3002');
});

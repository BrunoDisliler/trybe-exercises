const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Exercício 01
app.get('/ping', (req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name="Bruno" } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
})


app.listen(3002, () => {
  console.log('Ouvindo na porta 3002');
});

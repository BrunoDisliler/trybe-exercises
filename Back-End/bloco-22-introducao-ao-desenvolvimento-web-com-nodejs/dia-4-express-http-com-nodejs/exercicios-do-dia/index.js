const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const message = { 
  "message": "pong" 
}

app.get('/ping', (req, res) => {
  res.json(message);
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}` });
});


app.listen(3001, () => {
  console.log('Sendo executado na porta 3001');
})
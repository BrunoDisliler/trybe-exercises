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

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (Number(age) <= 17) {
    return res.status(401).json({ message: "Unauthorized" })
  } return res.status(200).json({ message: `Hello ${name}` })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`})

})


app.listen(3001, () => {
  console.log('Sendo executado na porta 3001');
})
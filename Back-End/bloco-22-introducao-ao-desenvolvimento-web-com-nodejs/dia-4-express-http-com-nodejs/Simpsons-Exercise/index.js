const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

// Exercício 06
app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3003');
})
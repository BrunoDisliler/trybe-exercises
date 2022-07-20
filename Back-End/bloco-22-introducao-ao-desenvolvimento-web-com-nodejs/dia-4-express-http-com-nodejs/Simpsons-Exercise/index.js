const express = require('express');
const bodyParser = require('body-parser');
const simpsonsUtils = require('./fs-utils');
const e = require('express');

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

// Exercício 07
app.get('/simpsons/:id', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);
    
    if(!simpson) { 
      return res.status(404).json({ message: 'simpson not found' })
    } 
    return res.status(200).json(simpson);

  } catch (error) {
    return res.status(500).end();
  }
});

// Exercício 08
app.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.some((character) => character.id === id)) {
      return res.status(409).json({ message: 'id already exists' });
    }
    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    return res.status(204).end();

  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3003');
})
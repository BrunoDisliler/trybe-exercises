const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());
// app.use(express.json()); Alternativa extra ao bodyParser

// Esta rota não passa pelo middleware de autenticação! Não utilizar em produção, apenas em desenvolvimento
app.get('/open', (req, res) => {
  res.send('open!')
});

// Visualizando conteúdo das requisições no console
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// Exercício Proposto 01 - Para fixar
const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid Data' });
  next();
};

// Exercício Proposto 02 - Para fixar
const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if(!price || price < 0 || isNaN(price)) return res.status(400).json({ message: 'Invalid Price' });
  // Outra forma de fazer (price === undefined || price < 0 || typeof price !== 'number')
  next();
}

app.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', validatePrice, validateName, (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', validatePrice, validateName, (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3008, () => {
  console.log('Aplicação ouvindo na porta 3008');
});
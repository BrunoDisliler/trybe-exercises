/* index.js */
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
})

app.get('/drinks', function (_req, res) {
  const drinksOrder = drinks.sort(function(a, b) {
    if(a.name < b.name) {
      return -1;
    } return true;
  });
  res.json(drinksOrder);
})

app.get('/drinks/:id',function (req, res) {
  const { id } = req.params;
  const recipe = drinks.find((r) => r.id === Number(id));
  
  if (!recipe) return res.status(404).json({ message: "Drink recipe not Found" });

  return res.status(200).json(recipe);
})


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

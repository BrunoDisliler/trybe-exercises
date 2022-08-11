const express = require('express');
const rescue = require('express-rescue');
const { validations, create, getAll, getUserId, updateUser } = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/getUsers', async (req, res) => {
  const getUsers = await getAll();
  return res.status(200).json(getUsers);
});

app.post('/user', validations, rescue ( async(req, res) => {
  const users = await create(req.body);
  return res.status(201).json(users);
}));

app.get('/user/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const user = await getUserId(id);
  return res.status(200).json(user);
}));

app.put('/user/:id', rescue( async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const update = await updateUser(id, { firstName, lastName, email, password });
  return res.status(200).json(update);
}));


app.listen(PORT, () => console.log(`Executando na porta ${PORT}`));
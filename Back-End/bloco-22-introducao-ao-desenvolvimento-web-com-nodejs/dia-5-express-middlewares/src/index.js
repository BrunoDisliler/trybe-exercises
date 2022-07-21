const express = require('express');
const validateProductName = require('../middlewares/validateProductName');
const validateInfos = require('../middlewares/validateInfos');

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

app.post('/sales', validateProductName, validateInfos, (_req, res) => {
  res.status(201).json({ message: 'Venda criada com sucesso!'})
})



app.listen(3005, () => {
  console.log('Ouvindo na porta 3005');
})
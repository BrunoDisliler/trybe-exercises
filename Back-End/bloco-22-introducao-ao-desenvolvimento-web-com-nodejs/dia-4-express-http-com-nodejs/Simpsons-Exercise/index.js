const express = require('express');
const bodyParser = require('body-parser');
const simpsons = './simpsons.json';
const fs = require('fs');

const app = express();
app.use(bodyParser.json());



app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3033');
})
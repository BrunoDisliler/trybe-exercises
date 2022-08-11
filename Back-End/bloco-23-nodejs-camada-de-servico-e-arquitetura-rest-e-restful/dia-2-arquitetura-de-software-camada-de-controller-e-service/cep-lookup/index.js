// Carregamos as variáveis de ambiente
require('dotenv').config();
const express = require('express');

// Criamos a aplicação do express
const app = express();
app.use(express.json());

const Cep = require('./controller/CepController');
const errorMiddleware = require('./middlewares/error.js');


app.get('/ping', (_req, res) => {
  return res.status(200).json({ mnessage: "pong!" });
});

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// Iniciamos a aplicação ouvindo na porta informada na variável de ambiente
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });

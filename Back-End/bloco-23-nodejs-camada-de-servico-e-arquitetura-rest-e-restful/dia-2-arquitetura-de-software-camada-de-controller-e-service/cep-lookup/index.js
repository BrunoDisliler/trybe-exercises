const express = require('express');

const app = express();
app.use(express.json());


app.get('/ping', (_req, res) => {
  return res.status(200).json({ mnessage: "pong" });
});


const PORT = 3000;
app.listen(PORT, console.log('Ouvindo na porta 3000'));

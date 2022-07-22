const { json } = require('body-parser');
const express = require('express');
const validateEmail = require('./middlewares/validateEmail');
const validatePassword = require('./middlewares/validatePassword');
const validateUsername = require('./middlewares/validateUsername');
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log("req.method:", req.method);
  console.log("req.path:", req.path);
  console.log("req.params:", req.params);
  console.log("req.query:", req.query);
  console.log("req.headers:", req.headers);
  console.log("req.body:", req.body);
  next();
});


app.post('/user/register', 
  validateUsername, 
  validateEmail,
  validatePassword,
  (_req, res) => {
  res.status(201).json({ message: "User Created" })
});

app.post('/user/login', 
  validateEmail,
  validatePassword,
  (_req, res) => {
  const token = crypto.randomBytes(8).toString("hex");
  res.status(200).json({ token })
});



app.listen(3006, () => { console.log('Ouvindo na porta 3006') });
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');

const express = require('express');
const app = express();


app.use(express.json());

app.use(require('./router'));

app.use(errorMiddleware);


module.exports = app;

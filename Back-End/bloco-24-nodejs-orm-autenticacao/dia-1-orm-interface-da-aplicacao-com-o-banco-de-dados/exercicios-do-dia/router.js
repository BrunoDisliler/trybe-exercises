const express = require('express');
const routers = express.Router();

const bookController = require('./controllers/BooksController');


routers.use('/books', bookController);


module.exports = routers;

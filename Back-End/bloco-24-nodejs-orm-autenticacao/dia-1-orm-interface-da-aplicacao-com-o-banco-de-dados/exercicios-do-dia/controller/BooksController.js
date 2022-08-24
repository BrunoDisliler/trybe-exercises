const express = require('express');
const BooksController = express.Router();
const BooksService = require('../service/BookService');

BooksController.get('/books', async(_req, res) => {
  const books = await BooksService.getAll();
  res.status(200).json(books);
});

module.exports = {
  getAll,
};

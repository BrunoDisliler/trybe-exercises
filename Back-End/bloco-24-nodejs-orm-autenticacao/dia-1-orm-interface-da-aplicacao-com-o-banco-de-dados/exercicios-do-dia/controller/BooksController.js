const express = require('express');
const BooksController = express.Router();
const BooksService = require('../service/BookService');

BooksController.get('/books', async (_req, res) => {
  const books = await BooksService.getAll();
  res.status(200).json(books);
});

BooksController.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
});

module.exports = BooksController;

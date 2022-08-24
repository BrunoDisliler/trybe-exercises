const express = require('express');
const BooksController = express.Router();
const BooksService = require('../service/BookService');

BooksController.get('/books', async (_req, res) => {
  const books = await BooksService.getAll();
  res.status(200).json(books);
});

BooksController.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksId = await BooksService.getById(id);
  if (!booksId) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(booksId);
});

module.exports = BooksController;

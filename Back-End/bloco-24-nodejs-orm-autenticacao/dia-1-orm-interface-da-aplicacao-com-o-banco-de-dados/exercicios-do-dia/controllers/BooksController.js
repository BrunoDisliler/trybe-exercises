const express = require('express');
const BooksRouter = express.Router();

const BookService = require('../services/BookService');

// GET ALL BOOKS
BooksRouter.get('/', async (_req, res) => {
  const books = await BookService.getAll();
  if (!books) return res.status(204).json({ message: "No data" });
  res.status(200).json(books);
});

// GET BOOK BY ID
BooksRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const BookById = await BookService.getById(id);
  if (!BookById) return res.status(404).json({ message: `Id ${id} not found` });
  res.status(200).json(BookById);
});

// CREATE BOOK
BooksRouter.post('/', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity });
  if (!newBook) return res.status(204).json({ message: "No data" });
  res.status(201).json({ message: "New book was created!" });
}); 


// UPDATE BOOK
BooksRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BookService.update(id, { title, author, pageQuantity });
  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
  res.status(201).json({ message: 'Book updated' });
});

// REMOVE BOOK
BooksRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const removeBook = await BookService.remove(id);
  if (!removeBook) return res
  .status(404)
  .json({ message: `Erro ao remover registro ${id}` });
  res.status(200).json({ message: `Registro ${id} removido com sucesso` })
});

module.exports = BooksRouter;
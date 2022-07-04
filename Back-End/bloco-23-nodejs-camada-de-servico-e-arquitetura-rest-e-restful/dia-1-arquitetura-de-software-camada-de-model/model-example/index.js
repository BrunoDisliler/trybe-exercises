const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Books');

const app = express();

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();
	res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;
	const author = await Author.findById(id);
	if (!author) return res.status(404).json({ message: 'Not found' });
	res.status(200).json(author);
});

app.get('/books', async (_req, res) => {
	const { author_id } = req.query;
  const books = (author_id)
	? await Books.getByAuthorId(author_id)
	: await Books.getAll();
  res.status(200).json(books);
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.status(200).json(book);
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
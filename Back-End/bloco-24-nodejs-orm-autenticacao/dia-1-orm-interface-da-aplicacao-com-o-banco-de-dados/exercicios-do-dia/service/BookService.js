const { Book } = require('../database/models/Book');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const bookId = await Book.getById();
  return bookId;
}

module.exports = {
  getAll,
  getById,
};